import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { ComingsoonComponent } from './components/pages/comingsoon/comingsoon.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { EventComponent } from './components/pages/event/event.component';
import { EventdetailsComponent } from './components/pages/eventdetails/eventdetails.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { GallerytwoComponent } from './components/pages/gallerytwo/gallerytwo.component';
import { HomeComponent } from './components/pages/home/hometwo.component';

import { SchedulesComponent } from './components/pages/schedules/schedules.component';
import { SpeakersComponent } from './components/pages/speakers/speakers.component';
import { SpeakersdetailsComponent } from './components/pages/speakersdetails/speakersdetails.component';
import { SponsorsComponent } from './components/pages/sponsors/sponsors.component';

const routes: Routes = [

  {path:'',component:HomeComponent,data:{breadcrumb:'Homepage'}},

  {path:'about',component:AboutComponent,data:{breadcrumb:'About Us'}},
  {path:'coming-soon',component:ComingsoonComponent,data:{breadcrumb:'Coming Soon'}},
  {path:'contact',component:ContactComponent,data:{breadcrumb:'Contact Us'}},
  {path:'event',component:EventComponent,data:{breadcrumb:'Event'}},
  {path:'event-details',component:EventdetailsComponent,data:{breadcrumb:'Event Details'}},
  {path:'gallery',component:GalleryComponent,data:{breadcrumb:'Gallery'}},
  {path:'gallery-v2',component:GallerytwoComponent,data:{breadcrumb:'Gallery'}},
  {path:'shedules',component:SchedulesComponent,data:{breadcrumb:'Schedules'}},
  {path:'speakers',component:SpeakersComponent,data:{breadcrumb:'Speakers'}},
  {path:'speaker-details',component:SpeakersdetailsComponent,data:{breadcrumb:'Speaker Details'}},
  {path:'sponsors',component:SponsorsComponent,data:{breadcrumb:'Sponsors'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
