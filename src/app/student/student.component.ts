import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

    public students = [
    { id: 1 ,  name: 'Hoang Phong' , age: 23 , address: 'Bac Giang' , gender: 'Nam'},
    { id: 2 , name: 'Minh Trang' , age: 6 , address: 'Bac Giang' , gender: 'Nu'},
    { id: 3 , name: 'Minh Thu ' , age: 2 , address: 'Bac Giang' , gender: 'Nu'},
    { id: 4 , name: 'Huong Giang' , age: 20 , address: 'Nam Dinh' , gender: 'Nu'},
    ];

  constructor() { }

  ngOnInit() {
  }

}
