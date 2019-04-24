import { Component, OnInit } from '@angular/core';

// js function SEARCH
declare function search(): any;
// end

@Component({
  selector: 'app-search',
  template: ``,
  styles: [`p{color: red}`]
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    search();
  }

}
