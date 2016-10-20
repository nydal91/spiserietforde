import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-drikke',
  templateUrl: './drikke.component.html',
  styleUrls: ['./drikke.component.css']
})
export class DrikkeComponent implements OnInit {

  searchString: string;

  
 items: FirebaseListObservable<any[]>;
   constructor(af: AngularFire) {
	       
		             this.items = af.database.list('drikke');
	       
	         }

  ngOnInit() {
  }

}
