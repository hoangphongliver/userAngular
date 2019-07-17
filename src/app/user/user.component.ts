import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  
  public newName: string = '';

  public newAge: number;

  public newAddress: string = '';
  
  public newGender: string = 'Gender';

  users = [
    {id: 1 ,name : 'Hoang Phong' , age: 23 , address: 'Bac Giang' , gender: 'Nam' }
  ];

  constructor() { }

  ngOnInit() {
  }

  addUser(){
    this.users.push({
      id: this.users.length + 1,
      name: this.newName ,
      age: this.newAge,
      address: this.newAddress,
      gender: this.newGender
    });
  }
  deleteUser(id){
    const index = this.users.findIndex(user => user.id === id);
    this.users.splice(index , 1);
  }
}
