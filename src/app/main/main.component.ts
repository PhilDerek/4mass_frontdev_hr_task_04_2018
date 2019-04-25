import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { Planet } from '../dummy';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public list: Planet[] = [];

  constructor(private _service: MainService) { }

  ngOnInit() {
   this.list = this._service.list;
  }

onSearchValueChanges(inputElement: HTMLInputElement){

  if (inputElement.value.length > 0) {
  alert('Teraz funkcja wywołana keyup powinna sprawdzić, czy to, co zostało wpisane do inputa znajduje się w [planetsList] i jeśli tak, to kasuje stary widok i wyświetla znalezioną wartość (wszystko, co jej dotyczy, czyli singlePlanet), opcjonalnie można dodać warunek, że jeśli wpisywana wartość będzie miała value.length > 3, a jeśli nie ma, to wyświetla komunikat "Nic nie znaleziono", żeby wpisujący wiedział, że wyszukiwarka działa. Niestety nie wiem jak to zrobić, bo nie udało mi się znaleźć informacji, jak dostać się do tej listy, żeby ją przeszukać oraz nie wiem jak istniejącą listę zastąpić w DOM wynikiem wyszukiwania :(')
  }
}

}
