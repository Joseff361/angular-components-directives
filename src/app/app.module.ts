//Imports 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //The js file = component


import { MatToolbarModule } from '@angular/material/toolbar'; 

//Decorator: Is a function that modifies js classes
@NgModule({ // Allow you spcify some details about the module
  //Metadata
  declarations: [ //components, directives and pipes
    AppComponent
  ],
  imports: [ //third party modules
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [], //services
  bootstrap: [AppComponent]
  //The root Module doesn't have exports
})
//Each module is a class
export class AppModule { }
