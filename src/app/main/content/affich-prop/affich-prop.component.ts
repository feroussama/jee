import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-affich-prop',
  templateUrl: './affich-prop.component.html',
  styleUrls: ['./affich-prop.component.scss']
})
export class AffichPropComponent implements OnInit {

  rows: any;
  columns: any;
  constructor() { }

  ngOnInit() {
    this.rows = [
      { name: 'Austin', gender: 'Male', company: 'Swimlane' },
      { name: 'Dany', gender: 'Male', company: 'KFC' },
      { name: 'Molly', gender: 'Female', company: 'Burger King' },
    ];
    this.columns = [
      { prop: 'name' },
      { name: 'Gender' },
      { name: 'Company' }
    ];
  }

}
