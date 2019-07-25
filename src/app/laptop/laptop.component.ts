import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.scss']
})
export class LaptopComponent implements OnInit {

  @Input('name') userName : string;

  constructor() { }

  ngOnInit() {
  }

}
