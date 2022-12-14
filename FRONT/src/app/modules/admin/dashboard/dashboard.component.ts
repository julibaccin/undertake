import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})



export class DashboardComponent implements OnInit {

  users = [];

  constructor(private _userService: UserService, private _router: Router) {}

  ngOnInit(): void {
    this._userService.getAll().subscribe((i =>{
      console.log(i)
      this.users = i.data
    }))
  }

  handleBtnEditarClick(user) {
    this._router.navigateByUrl('admin/users/' + user.id);
  }
}
