import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UserFormComponent} from '@app-units/users/modals/user-form/user-form.component';
import {UsersDataloaderService} from "@app-units/users/users-dataloader.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UsersComponent implements OnInit {

  constructor(private dialog: MatDialog, private users: UsersDataloaderService) {
  }

  ngOnInit(): void {
  }

  openModal() {
    const dialogRef = this.dialog.open(UserFormComponent, {
      width: '550px'
    });
  }

}
