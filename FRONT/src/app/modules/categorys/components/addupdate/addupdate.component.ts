import { Component, Input, OnInit } from '@angular/core';
import { CategorysService } from 'src/app/services/categorys.service';

@Component({
  selector: 'app-addupdate',
  templateUrl: './addupdate.component.html',
  styleUrls: ['./addupdate.component.css'],
})
export class AddupdateComponent implements OnInit {
  categorys = [];
  constructor(private categorysService: CategorysService) {}
  ngOnInit(): void {}

  add(input: HTMLInputElement) {
    //this.categorysService.add(input.value);
    //input.value = "";
  }
}
