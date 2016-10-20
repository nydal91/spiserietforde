import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseObjectObservable} from 'angularfire2';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  items: FirebaseObjectObservable<any>;
    constructor(af: AngularFire) {
                this.items = af.database.object('/items');
            
    
    }
      

  ngOnInit() {
  }

}
