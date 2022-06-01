import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,Injectable } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbModule } from 'angular-crumbs';
import { NgwWowModule } from 'ngx-wow';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { Ng5SliderModule } from 'ng5-slider';
import { NgMasonryGridModule } from 'ng-masonry-grid';
import { NiceSelectModule } from "ng-nice-select";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { HeadertwoComponent } from './components/layouts/headertwo/headertwo.component';
import { HeaderthreeComponent } from './components/layouts/headerthree/headerthree.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { BacktotopComponent } from './components/layouts/backtotop/backtotop.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { FootertwoComponent } from './components/layouts/footertwo/footertwo.component';
import { FooterthreeComponent } from './components/layouts/footerthree/footerthree.component';
import { FootercontentComponent } from './components/layouts/footercontent/footercontent.component';
import { BlogsidebarComponent } from './components/layouts/blogsidebar/blogsidebar.component';
import { HomeComponent } from './components/pages/home/hometwo.component';

import { AboutComponent } from './components/pages/about/about.component';
import { ComingsoonComponent } from './components/pages/comingsoon/comingsoon.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { EventComponent } from './components/pages/event/event.component';
import { EventdetailsComponent } from './components/pages/eventdetails/eventdetails.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { GallerytwoComponent } from './components/pages/gallerytwo/gallerytwo.component';
import { SchedulesComponent } from './components/pages/schedules/schedules.component';
import { SpeakersComponent } from './components/pages/speakers/speakers.component';
import { SpeakersdetailsComponent } from './components/pages/speakersdetails/speakersdetails.component';
import { SponsorsComponent } from './components/pages/sponsors/sponsors.component';
import { MenuComponent } from './components/layouts/menu/menu.component';
import { BreadcrumbComponent } from './components/layouts/breadcrumb/breadcrumb.component';
import { SponsersComponent } from './components/layouts/sponsers/sponsers.component';
import { CounterComponent } from './components/layouts/counter/counter.component';
import { FiltereventComponent } from './components/layouts/filterevent/filterevent.component';
import { SpeakerComponent } from './components/layouts/speaker/speaker.component';
import { PaginationComponent } from './components/layouts/pagination/pagination.component';
import { MasonaryblogComponent } from './components/layouts/masonaryblog/masonaryblog.component';
import { FiltereventtwoComponent } from './components/layouts/filtereventtwo/filtereventtwo.component';

@Injectable({
  providedIn:'root'
})

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeadertwoComponent,
    HeaderthreeComponent,
    PreloaderComponent,
    BacktotopComponent,
    FooterComponent,
    FootertwoComponent,
    FooterthreeComponent,
    FootercontentComponent,
    BlogsidebarComponent,
    HomeComponent,

    AboutComponent,
    ComingsoonComponent,
    ContactComponent,
    EventComponent,
    EventdetailsComponent,
    GalleryComponent,
    GallerytwoComponent,
    SchedulesComponent,
    SpeakersComponent,
    SpeakersdetailsComponent,
    SponsorsComponent,
    MenuComponent,
    BreadcrumbComponent,
    SponsersComponent,
    CounterComponent,
    FiltereventComponent,
    SpeakerComponent,
    PaginationComponent,
    MasonaryblogComponent,
    FiltereventtwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    BreadcrumbModule,
    NgwWowModule,
    NgbModule,
    Ng5SliderModule,
    NiceSelectModule,
    NgMasonryGridModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
