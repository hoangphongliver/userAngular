import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router'
import { LISTPHONE } from '../../list-phone';
import { Phone } from '../phone-model';

@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.scss']
})
export class PhoneDetailComponent implements OnInit {

  phone: Phone = null;

  listPhone = LISTPHONE;

  constructor(private route: ActivatedRoute , private routeService : Router) { }

  ngOnInit() {
    this.listPhone.forEach((item , index)=>{
      parseInt(this.route.snapshot.params['id'],10) === index + 1 ? this.phone = item : '';
    })
  }

  backToProduct(){
    this.routeService.navigate(['phone']);
  }

}
