import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-salatar',
  templateUrl: './salatar.component.html',
  styleUrls: ['./salatar.component.css']
})
export class SalatarComponent implements OnInit {
searchString: string;

  
 items: FirebaseListObservable<any[]>;
   constructor(af: AngularFire) {
	       
		             this.items = af.database.list('salatar');
	       
	         }


  ngOnInit() {
  }

}
