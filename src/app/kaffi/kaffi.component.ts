import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-kaffi',
  templateUrl: './kaffi.component.html',
  styleUrls: ['./kaffi.component.css']
})
export class KaffiComponent implements OnInit {

 searchString: string;

  
 items: FirebaseListObservable<any[]>;
   constructor(af: AngularFire) {
	       
		             this.items = af.database.list('kaffi');
	       
	         }

  ngOnInit() {
  }

}
