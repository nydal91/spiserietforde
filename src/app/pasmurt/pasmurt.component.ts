import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-pasmurt',
  templateUrl: './pasmurt.component.html',
  styleUrls: ['./pasmurt.component.css']
})
export class PasmurtComponent implements OnInit {

  searchString: string;

  
 items: FirebaseListObservable<any[]>;
   constructor(af: AngularFire) {
	       
		             this.items = af.database.list('pasmurt');
	       
	         }

  ngOnInit() {
  }

}
