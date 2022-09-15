import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  
  user = null;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _userService: UserService
  ) {}

  aumentarDias(fecha: Date) {
    fecha.setDate(fecha.getDate() + 1)
  }

  extenderExpiracion() {
    let fechaNueva = new Date(Date.now())
    fechaNueva.setDate(fechaNueva.getDate() + 30);
    this._userService.update({id: this.user.id, dateExpiration: fechaNueva}).subscribe((i)=>{
      console.log(i)
    })
  }
  

  resetExpiracion(){
    let fechaNueva = new Date();
    console.log(fechaNueva);
    this._userService.update({id: this.user.id, dateExpiration: fechaNueva}).subscribe((i)=>{
      console.log(i)
    })
    
  }

  ngOnInit(): void {
    this._userService.get(this._activatedRoute.snapshot.params.id).subscribe(i=>{
      this.user = i.data
      console.log("USER:", this.user)
    })
  }
 

}



