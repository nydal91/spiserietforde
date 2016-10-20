import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-kaker',
  templateUrl: './kaker.component.html',
  styleUrls: ['./kaker.component.css']
})
export class KakerComponent implements OnInit {

  searchString: string;

  
 items: FirebaseListObservable<any[]>;
   constructor(af: AngularFire) {
	       
		             this.items = af.database.list('kaker');
	       
	         }

  ngOnInit() {
  }

}
