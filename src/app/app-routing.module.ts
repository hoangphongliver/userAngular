import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'

import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { PhoneComponent } from './phone/phone.component';
import { LaptopComponent } from './laptop/laptop.component';
import { TabletComponent } from './tablet/tablet.component';
import { TvComponent } from './tv/tv.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { FormLearnComponent } from './form-learn/form-learn.component';


const routes: Routes = [
  {
    path: '',
    component: PhoneComponent
  },
  {
    path: 'phone',
    component: PhoneComponent
  },
  {
    path: 'laptop',
    component: LaptopComponent
  },
  {
    path: 'tablet',
    component: TabletComponent
  },
  {
    path: 'tv',
    component: TvComponent
  },
  {
    path: 'phone-detail/:id',
    component: PhoneDetailComponent
  },
  {
    path: 'form-learn',
    component: FormLearnComponent
  },
  {
    path: '**',
    component: NotFoundComponentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
