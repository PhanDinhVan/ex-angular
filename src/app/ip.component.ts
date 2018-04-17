import { Component, OnInit } from '@angular/core';
// import { Http } from '@angular/http';
// angular 5, k can inport cai duoi
// import 'rxjs/add/operator/toPromise';

import { IpService } from './ip.service';

@Component({
  selector: 'app-ip',
  template: `<h3>{{ ip }}</h3>`
})
export class IpComponent implements OnInit {
  ip: String;
  constructor(private temp: IpService) {
    
  }
  ngOnInit() : void {
    this.temp.getIp()
    .then(ip => this.ip = ip)
    .catch(err => console.log(err));
  }
}