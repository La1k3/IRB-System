import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { SplitterModule } from 'primeng/splitter';

export interface Osoby {
  number: number;
  name: string;
  surname: string;
  rang: string;
  presence: boolean;
}

@Component({
  selector: 'app-lista-obecnosci',
  standalone: true,
  imports: [ CommonModule, TableModule, TagModule, SplitterModule ],
  templateUrl: './lista-obecnosci.component.html',
  styleUrl: './lista-obecnosci.component.css'
})

export class ListaObecnosciComponent {
  osoba: Osoby[] = [
    {
      number: 1,
      name: 'Jan',
      surname: 'Kowalski',
      rang: 'Plutonowy',
      presence: true
    },
    {
      number: 2,
      name: 'Zygmunt',
      surname: 'Nowak',
      rang: 'Sierżant',
      presence: true
    },
    {
      number: 3,
      name: 'Mateusz',
      surname: 'Wiórson',
      rang: 'Szeregowy',
      presence: true
    },
    {
      number: 4,
      name: 'Paweł',
      surname: 'Wojdak',
      rang: 'Kapral',
      presence: false
    }
  ];

  getPresence(presence: boolean) {
    switch (presence) {
      case true:
        return 'Obecny';
      case false:
        return 'Nieobecny';
    }
  }

  getCurrentDate(): string {
    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return currentDate.toLocaleDateString('pl-PL', options);
  }
}
