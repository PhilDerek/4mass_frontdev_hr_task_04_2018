import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { Planet } from '../dummy';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public list:Planet[] = [];
  public filteredList:Planet[] = [];

  constructor(private _service: MainService) { }

  ngOnInit() {
   this.list = this._service.list;
   this.filteredList = this.list;
  }

  // filter search values
  onSearchValueChanges(inputElement:HTMLInputElement){
    this.filteredList = this.list.filter(planet => {
      return planet.name.toLowerCase().includes(inputElement.value.toLowerCase())
    })
  }

}
