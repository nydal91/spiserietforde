import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-palegg',
  templateUrl: './palegg.component.html',
  styleUrls: ['./palegg.component.css']
})
export class PaleggComponent implements OnInit {
searchString: string;

  
 items: FirebaseListObservable<any[]>;
   constructor(af: AngularFire) {
	       
		             this.items = af.database.list('palegg');
	       
	         }


  ngOnInit() {
  }

}
