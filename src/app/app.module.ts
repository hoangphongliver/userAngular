import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { StudentComponent } from './student/student.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { MenuComponent } from './menu/menu.component';
import { ListPhoneComponent } from './list-phone/list-phone.component';
import { PhoneComponent } from './phone/phone.component';
import { LaptopComponent } from './laptop/laptop.component';
import { AddPhoneComponent } from './add-phone/add-phone.component';
import { TabletComponent } from './tablet/tablet.component';
import { TvComponent } from './tv/tv.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { LoggingService } from './logging.service';
import { FormLearnComponent } from './form-learn/form-learn.component';

@NgModule({
   declarations: [
      AppComponent,
      UserComponent,
      StudentComponent,
      StudentDetailComponent,
      NotFoundComponentComponent,
      MenuComponent,
      ListPhoneComponent,
      PhoneComponent,
      LaptopComponent,
      AddPhoneComponent,
      TabletComponent,
      TvComponent,
      PhoneDetailComponent,
      FormLearnComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [LoggingService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
