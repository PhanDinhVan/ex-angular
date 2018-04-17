import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-persons',
  templateUrl: './list-persons.component.html',
  styleUrls: ['./list-persons.component.css']
})
export class ListPersonsComponent implements OnInit {

  arrPersons = [
    {name: "Dinh Van", age: 27},
    {name: "BillGates", age: 54},
    {name: "Jack Ma", age: 50}
  ];

  constructor() { }

  ngOnInit() {
  }

  removePersonByName(name: string) {
    const index = this.arrPersons.findIndex(e => e.name === name);
    this.arrPersons.splice(index, 1);
  }


}
