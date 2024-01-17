import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface Zolnierz {
  ranga: string;
  imie: string;
  nazwisko: string;
  numer_sluzbowy: string;
  numer_legitymacji: string;
  stanowisko: string;
}


@Component({
  selector: 'app-dodaj-zolnierza',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './dodaj-zolnierza.component.html',
  styleUrl: './dodaj-zolnierza.component.css'
})
export class DodajZolnierzaComponent {

  zolnierzForm = new FormGroup({
    ranga: new FormControl(''),
    imie: new FormControl(''),
    nazwisko: new FormControl(''),
    numer_sluzbowy: new FormControl(''),
    numer_legitymacji: new FormControl(''),
    stanowisko: new FormControl('')
  });

  onSubmit(newZolnierz : Zolnierz) {
    console.log(newZolnierz)
  }

}
