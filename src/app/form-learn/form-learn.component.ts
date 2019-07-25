import { Component, OnInit, Input } from '@angular/core';
import { FormGroup , FormControl, Validators , FormBuilder, AbstractControl } from '@angular/forms';

export function isNumber(c: AbstractControl){

}

@Component({
  selector: 'app-form-learn',
  templateUrl: './form-learn.component.html',
  styleUrls: ['./form-learn.component.scss']
})
export class FormLearnComponent implements OnInit {

  @Input('isNumber') isNumber: boolean = true;

  formUsers : FormGroup;

  constructor(private builder : FormBuilder) { }

  public Users = [{
    name: '',
    age: null , 
    address: '',
    phone: null
  }];

  public isNumberPattern : string = "^[0-9]*$";

  ngOnInit() {
    this.formUsers = this.builder.group({
      userName : ['',Validators.required],
      userAge : ['',Validators.required],
      userAddress : ['',[Validators.required , Validators.email]],
      userPhone: ['',[Validators.required , Validators.minLength(9) , Validators.pattern(this.isNumberPattern)]]
    });
  }

  onSubmit(form) {
    console.log(this.formUsers.value);
    form.reset();  
  }
}
