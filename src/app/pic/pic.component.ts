import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseObjectObservable} from 'angularfire2';

@Component({
  selector: 'app-pic',
  templateUrl: './pic.component.html',
  styleUrls: ['./pic.component.css']
})
export class PicComponent implements OnInit {
 frams: FirebaseObjectObservable<any>;
    constructor(af: AngularFire) {
                this.frams = af.database.object('/frams');
                 
    
    }


  ngOnInit() {
  }

}
