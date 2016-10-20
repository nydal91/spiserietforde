import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseObjectObservable} from 'angularfire2';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
zoom: number = 9;
 title: string = 'My first angular2-google-maps project';
   lat: number = 	61.4525442;
     lng: number = 	5.8505375;


frams: FirebaseObjectObservable<any>;
    constructor(af: AngularFire) {
                this.frams = af.database.object('/frams');
                 
    
    }


  ngOnInit() {
  }

}
