import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Szkolenie {
  id: number;
  nazwa: string;
  jednostka: string;
  data: string;
}

@Component({
  selector: 'app-szkolenia',
  templateUrl: './szkolenia.component.html',
  styleUrls: ['./szkolenia.component.css'],
  imports: [CommonModule],
  standalone: true
})

export class SzkoleniaComponent {
  szkolenia: Szkolenie[] = [
    { id: 1, nazwa: 'Regulaminy', jednostka: '2', data: '2024-05-10' },
    { id: 2, nazwa: 'Ćwiczenia Poligonowe', jednostka: '3', data: '2024-03-01' },
    { id: 3, nazwa: 'Rzut Granatem', jednostka: '2', data: '2024-10-26' }
  ];

  dodajSzkolenie() {
    // Tutaj powinna być logika dodania nowego szkolenia
    // Może to być otwarcie nowego dialogu/formularza dla użytkownika do wprowadzenia danych
    alert('Dodawanie nowego szkolenia...');
  }

  usunSzkolenie(id: number) {
    this.szkolenia = this.szkolenia.filter(szkolenie => szkolenie.id !== id);
    alert('Usuwanie szkolenia o id: ' + id);
  }
}

