import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-barn',
  templateUrl: './barn.component.html',
  styleUrls: ['./barn.component.css']
})
export class BarnComponent implements OnInit {

   searchString: string;

  
 items: FirebaseListObservable<any[]>;
   constructor(af: AngularFire) {
	       
		             this.items = af.database.list('barn');
	       
	         }


  ngOnInit() {
  }
}
