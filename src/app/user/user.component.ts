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

  public newGender: string = '';

  users = [
    { name: 'Hoang Phong', age: 23, address: 'Bac Giang', gender: 'Nam' }
  ];

  constructor() { }

  ngOnInit() {
  }

  addUser() {
    this.users.push({
      name: this.newName,
      age: this.newAge,
      address: this.newAddress,
      gender: this.newGender
    });
  }
  deleteUser(id: number) {
    this.users.splice(id, 1);
    console.log(id);
    
  }

  editUser(id: number) {
    this.users.forEach((user, index) => {
      if (id === index) {
        this.newName = user.name;
        this.newAge = user.age;
        this.newAddress = user.address;
        this.newGender = user.gender;
      }
    });
  }

  updateUser(id: number){
    this.users.forEach((user, index) => {
      if (id === index) {
        user.name = this.newName;
        user.age = this.newAge;
        user.address = this.newAddress;
        user.gender = this.newGender;
      }
    });
  }
}
