import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Import Plugins
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AmChartsModule } from "@amcharts/amcharts3-angular";
import { UiSwitchModule } from 'ngx-ui-switch/src';
import { LaddaModule } from 'angular2-ladda';
import { SortablejsModule } from 'angular-sortablejs';
import { SweetAlert2Module } from '@toverux/ngsweetalert2';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CustomFormsModule } from 'ng2-validation';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MiniurlTableComponent } from './components/miniurl-table/miniurl-table.component';

//import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { provideRoutes} from '@angular/router';

import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MiniurlTableComponent
  ],
  imports: [
    BrowserModule,
		FormsModule,
		HttpModule,
        BsDropdownModule.forRoot(),
        CollapseModule.forRoot(),
        AccordionModule.forRoot(),
		ButtonsModule.forRoot(),
		ModalModule.forRoot(),
		CarouselModule.forRoot(),
		PopoverModule.forRoot(),
		TabsModule.forRoot(),
		TooltipModule.forRoot(),
        AmChartsModule,
		UiSwitchModule,
		LaddaModule,
		SortablejsModule,
		SweetAlert2Module,
		ConfirmationPopoverModule.forRoot({
	      confirmButtonType: 'danger' // set defaults here
	    }),
	    NgxDatatableModule,
		ReactiveFormsModule,
		CustomFormsModule
//    Ng2Charts

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
