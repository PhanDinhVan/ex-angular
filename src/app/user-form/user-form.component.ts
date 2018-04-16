import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  name = '';
  isHighlight = true;
  currentClass = {circle : !this.isHighlight, square: this.isHighlight};
  evenStyle = {color: 'red', fontSize: '40px'};
  oddStyle = {color: 'black', fontSize: '20px'};
  constructor() { }

  ngOnInit() {
  }

  // showEvent(event) {
  //   this.name = event.target.value;
  // }

}
