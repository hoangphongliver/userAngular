import { Component, OnInit , Input} from '@angular/core';
import { LISTPHONE } from '../../list-phone';
import { Phone } from '../phone-model';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {


  @Input() color: string = "red"; 

  phone: Phone = {
    name:'',
    img: '',
    price: null,
    des: ''
  };

  @Input('value') isValue: boolean;


  listPhone = LISTPHONE;
  

  constructor(private _LoggingService : LoggingService) { 

  }

  ngOnInit() {
  }



  addPhone(){
    this.listPhone.push(this.phone);
  }

  // onSubmit(form){
  //    form.reset();
  //  }

  deletePhone(id: number){
    this.listPhone.splice(id , 1);
  }
}
