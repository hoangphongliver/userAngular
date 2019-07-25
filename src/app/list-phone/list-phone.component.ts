import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-list-phone',
  templateUrl: './list-phone.component.html',
  styleUrls: ['./list-phone.component.scss']
})
export class ListPhoneComponent implements OnInit {

  constructor() { }

  @Input('number') phoneNumber: string;

  @Output('userName') handleClick = new EventEmitter<string>();

  @Input('user') Users: any[];

  name : string = '';

  ngOnInit() {
  }

  onSubmit(){
    this.handleClick.emit(this.name)
  }
}
