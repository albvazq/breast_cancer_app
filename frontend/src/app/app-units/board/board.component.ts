import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DashboardService} from "../../core/services/dashboard.service";
import * as d3 from 'd3';
import {APIService} from "../../services/api.service";
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BoardComponent implements OnInit {
  public param = 'radius_mean';
  private graph;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);
  private data;

  constructor(ds: DashboardService, private api: APIService) {
    ds.title.next('Metricas')
  }

  ngOnInit(): void {
    this.api.getDataSet().subscribe(data => {
      this.data = data;
      this.createSvg(data);
    });
}

  openModal() {

  }

  onChange(v) {
    this.api.getDataSet(v !== '' ? `country==${v}` : undefined).subscribe(data => {
      this.data = data;
      this.createSvg(data);
    });
  }
  onChangeParam(v) {
    this.param = v;
    this.createSvg(this.data);
  }

  private createSvg(data): void {
      d3.selectAll("svg").remove();
      this.graph = d3.select("figure#graph")
        .append("svg")
        .attr("width", this.width + (this.margin * 2))
        .attr("height", this.height + (this.margin * 2))
        .append("g")
        .attr("transform", "translate(" + this.margin + "," + this.margin + ")");

      this.drawBars(data);
  }

  private drawBars(data) {
    this.drawGraph(this.graph, data, this.param);
  }

  private drawGraph(graphObject, data, key) {
    // Create the X-axis band scale
      const x = d3.scaleBand()
      .range([0, this.width])
      .domain(data.map(d => d.diagnosis))
      .padding(0.2);

      // Draw the X-axis on the DOM
      graphObject.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

      const maxRadius = Math.max(...(data.map(i => i[key])))
      // Create the Y-axis band scale
      const y = d3.scaleLinear()
      .domain([0, maxRadius])
      .range([this.height, 0]);

      // Draw the Y-axis on the DOM
      graphObject.append("g")
      .call(d3.axisLeft(y));


      // Create and fill the bars
      const avgData = data.reduce((p, c) => {
        p[c.diagnosis] += c[key];
        return p;
      }, [0,0]);
      avgData[0] = avgData[0] / data.filter(i => (i.diagnosis === 0)).length
      avgData[1] = avgData[1] / data.filter(i => (i.diagnosis === 1)).length
      const avgDataObject = avgData.map((item, index) => ({
        diagnosis: index,
        key: item
      }))
      graphObject.selectAll("bars")
      .data(avgDataObject)
      .enter()
      .append("rect")
      .attr("x", d => x(d.diagnosis))
      .attr("y", d => y(d.key))
      .attr("width", x.bandwidth())
      .attr("height", (d) => this.height - y(d.key))
      .attr("fill", "#d04a35");
  }
}
