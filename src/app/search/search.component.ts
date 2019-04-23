import { Component, OnInit } from '@angular/core';

// js function SEARCH
declare function search(): any;
// end

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    search();
  }

}
