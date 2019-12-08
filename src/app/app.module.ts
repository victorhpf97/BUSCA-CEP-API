import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { ReactiveFormsModule } from '@angular/forms';
import {InputMaskModule} from 'primeng/inputmask';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutoCompleteModule,
    FormsModule,
    BrowserAnimationsModule,
    TableModule,
    TabViewModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    ToastModule,
    ButtonModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    CodeHighlighterModule,
    ReactiveFormsModule,
    InputMaskModule
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
