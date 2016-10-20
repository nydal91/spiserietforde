import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AgmCoreModule } from 'angular2-google-maps/core';


import { AngularFireModule } from 'angularfire2';
import { NgSemanticModule } from 'ng-semantic';

import { AppRoutingModule } from './app.routing';


  

import { AppComponent } from './app.component';
import { PicComponent } from './pic/pic.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { BarnComponent } from './barn/barn.component';
import { ForComponent } from './for/for.component';

import { SalatarComponent } from './salatar/salatar.component';
import { SmaretterComponent } from './smaretter/smaretter.component';
import { PasmurtComponent } from './pasmurt/pasmurt.component';
import { PaleggComponent } from './palegg/palegg.component';
import { BurgermenyComponent } from './burgermeny/burgermeny.component';
import { KakerComponent } from './kaker/kaker.component';
import { DrikkeComponent } from './drikke/drikke.component';
import { KaffiComponent } from './kaffi/kaffi.component';
import { VarmeComponent } from './varme/varme.component';


export const firebaseConfig = {
	     
          apiKey: "AIzaSyAakq_aXF-IYrpLgV6bQoxcLHIkyeYTRrc",
    authDomain: "spiserietforde.firebaseapp.com",
    databaseURL: "https://spiserietforde.firebaseio.com",
    storageBucket: "spiserietforde.appspot.com"
       


       //spiseriet førde
         ///apiKey: "AIzaSyAakq_aXF-IYrpLgV6bQoxcLHIkyeYTRrc",
    //authDomain: "spiserietforde.firebaseapp.com",
    ///databaseURL: "https://spiserietforde.firebaseio.com",
    ///storageBucket: "spiserietforde.appspot.com"
};


@NgModule({
  declarations: [
    AppComponent,
    PicComponent,
    FooterComponent,
    AboutComponent,
    MenuComponent,
    BarnComponent,
    ForComponent,

    SalatarComponent,
    SmaretterComponent,
    PasmurtComponent,
    PaleggComponent,
    BurgermenyComponent,
    KakerComponent,
    DrikkeComponent,
    KaffiComponent,
    VarmeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpModule,
	  AppRoutingModule,
  
	  NgSemanticModule,
	      AngularFireModule.initializeApp(firebaseConfig),
	      AgmCoreModule.forRoot({
		            apiKey: 'AIzaSyANAJTzA_ARuQQ7nW6FJMhXEnLT8sVXnSk'
			        })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
