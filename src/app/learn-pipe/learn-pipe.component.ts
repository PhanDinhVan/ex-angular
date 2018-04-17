import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-pipe',
  templateUrl: './learn-pipe.component.html',
  styleUrls: ['./learn-pipe.component.css']
})
export class LearnPipeComponent implements OnInit {

  birthday = new Date(2018, 4, 17);
  person = {name: 'Dinh Van', age: 27};

  // Chuoi address khi tren serve tra xuong se co kieu du lieu Promise
  // giong nhu kieu du lieu dang khai bao o duoi
  address = Promise.resolve("147-149 Vo Van Tan");

  constructor() { }

  ngOnInit() {
  }

}
