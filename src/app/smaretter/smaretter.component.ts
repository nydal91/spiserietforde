import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-smaretter',
  templateUrl: './smaretter.component.html',
  styleUrls: ['./smaretter.component.css']
})
export class SmaretterComponent implements OnInit {

  searchString: string;

  
 items: FirebaseListObservable<any[]>;
   constructor(af: AngularFire) {
	       
		             this.items = af.database.list('smaretter');
	       
	         }

  ngOnInit() {
  }

}
