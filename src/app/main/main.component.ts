import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { Planet } from '../dummy';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public list:Planet[] = []
  
  constructor(private _service: MainService) { }

  ngOnInit() {
   this.list = this._service.list
  }

  onSearchValueChanges(inputElement: HTMLInputElement) {
    const elementsarray = new Array()
    const getvalue = inputElement.value.toLowerCase().trim()
    
    if (!getvalue) {
        this.list = this._service.list
    }
      for (let i = 0; i < this._service.list.length; i++) {
        if (this._service.list[i].name.toLowerCase().includes(getvalue)) {
          elementsarray.push(this._service.list[i])
        }
      }
      return this.list = elementsarray
    }
}

