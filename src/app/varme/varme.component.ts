import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
@Component({
  selector: 'app-varme',
  templateUrl: './varme.component.html',
  styleUrls: ['./varme.component.css']
})
export class VarmeComponent implements OnInit {
    searchString: string;

  
 items: FirebaseListObservable<any[]>;
   constructor(af: AngularFire) {
	       
		             this.items = af.database.list('hoved');
	       
	         }



  ngOnInit() {
  }

}
