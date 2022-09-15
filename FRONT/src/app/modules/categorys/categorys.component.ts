import { Component, OnInit } from '@angular/core';
import { CategorysService } from 'src/app/services/categorys.service';

@Component({
  selector: 'app-categorys',
  templateUrl: './categorys.component.html',
  styleUrls: ['./categorys.component.css'],
})
export class CategorysComponent implements OnInit {
  displayedColumns: string[] = ['name', 'actions'];
  dataSource = [];
  constructor(private categorysService: CategorysService) {}

  ngOnInit(): void {
    // this.categorysService.getAll().subscribe((i) => {
    //   let categorys = [];
    //   i.forEach((p) => {
    //     categorys.push({
    //       id: p.payload.doc.id,
    //       name: p.payload.doc.data()['name'],
    //     });
    //   });
    //   this.dataSource = categorys;
    // });
  }

  delete(idDoc: string) {
    //this.categorysService.delete(idDoc);
  }
}
