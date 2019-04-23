import { Component, OnInit } from '@angular/core';

// js function SEARCH
declare function search(): any;
// end

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mass-test';
}

@Component({
})
export class MyComponent implements OnInit {
  ngOnInit() {
    search();
  }
}
