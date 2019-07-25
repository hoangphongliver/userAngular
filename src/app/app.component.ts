import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  isValue : boolean = true;

  public number : string = '0985612351';

  name : string = '';

  public Users: any[] = [
    { name:"Hoang Phong" , age:"23", address:"Yen Dung"},
    { name:"Minh Trang" , age:"6", address:"Yen Dung"},
    { name:"Minh Thu" , age:"2", address:"Yen Dung"}
  ];


  getName(value){
    this.name = value;
  }
}
