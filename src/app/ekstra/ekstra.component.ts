import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
@Component({
  selector: 'app-ekstra',
  templateUrl: './ekstra.component.html',
  styleUrls: ['./ekstra.component.css']
})
export class EkstraComponent implements OnInit {

   searchString: string;

  
 items: FirebaseListObservable<any[]>;
   constructor(af: AngularFire) {
	       
		             this.items = af.database.list('ekstra');
	       
	         }


  ngOnInit() {
  }

}
