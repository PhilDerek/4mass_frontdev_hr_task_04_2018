import { Component, OnInit, Input } from '@angular/core';
import { Planet } from '../dummy';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
@Input() planetsList: Planet[] = [];
  // to display as columns' titles in the table
  displayedColumns:string[] = ['name','climate', 'terrain', 'diameter', 'gravity'];

  constructor() { 
  }

  ngOnInit() {
  }
}

