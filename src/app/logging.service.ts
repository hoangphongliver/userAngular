import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  phonenumber(control) {
    var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (control.value.match(phoneno)){
      return true;
    }
    else {
      alert("message");
      return false;
    }
  }

}
