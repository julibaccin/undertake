import { ISite } from './../../../../interfaces/Sites/ISite';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-landing',
  templateUrl: './template-landing.component.html',
  styleUrls: ['./template-landing.component.css']
})
export class TemplateLandingComponent implements OnInit {

  @Input('data') dataSite: ISite;

  constructor() { }

  ngOnInit(): void {
    console.log(this.dataSite);
  }

}
