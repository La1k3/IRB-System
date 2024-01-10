import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Bron {
  id: number;
  nazwa: string;
  typ: string;
  nrMagazynu: number;
  rodzajAmunicji: string;
  status: string;
  numerSerii: string;
  awarie: string[];
  historiaEwidencji: string[];
}

@Component({
  selector: 'app-bron',
  templateUrl: './bron.component.html',
  styleUrls: ['./bron.component.css'],
  imports: [CommonModule],
  standalone: true
})

export class BronComponent {
  bronie: Bron[] = [
    {
      id: 1,
      nazwa: 'AK-47',
      typ: 'Karabin',
      nrMagazynu: 1,
      rodzajAmunicji: "7,62 x 39 mm",
      status: 'Sprawny',
      numerSerii: "1234",
      awarie: ['Brak awarii'],
      historiaEwidencji: ['2023-01-01: Wprowadzono do magazynu','2023-01-15: Przegląd techniczny']
    },
    {
      id: 2,
      nazwa: 'M4A1',
      typ: 'Karabin',
      nrMagazynu: 3,
      rodzajAmunicji: "5,56 x 45 mm",
      status: 'W naprawie',
      numerSerii: "4321",
      awarie: ['2023-03-12: Usterka spustu'],
      historiaEwidencji: ['2023-01-10: Wprowadzono do magazynu']
    }
  ];

  generujRaport() {


    alert('Generowanie raportu...');
  }
  dodajBron() {


    alert('Dodawanie broni...');
  }
  usunBron() {


    alert('Usuwanie broni...');
  }
}
