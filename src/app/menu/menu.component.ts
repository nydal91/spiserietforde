import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    searchString: string;


 ifTrue: boolean = false;

    change() {
        this.ifTrue = !this.ifTrue;
    }

  ngOnInit() {
  }

}
