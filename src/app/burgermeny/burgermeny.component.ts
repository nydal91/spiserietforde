import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-burgermeny',
  templateUrl: './burgermeny.component.html',
  styleUrls: ['./burgermeny.component.css']
})
export class BurgermenyComponent implements OnInit {

  searchString: string;

  
 items: FirebaseListObservable<any[]>;
   constructor(af: AngularFire) {
	       
		             this.items = af.database.list('burgermeny');
	       
	         }

  ngOnInit() {
  }

}
