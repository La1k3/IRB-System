import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Instruktaz {
  dzien: string;
  godzina: string;
  nazwa: string;
  uwagi: string;
}

@Component({
  selector: 'app-instruktaz',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './instruktaz.component.html',
  styleUrls: ['./instruktaz.component.css']
})
export class InstruktazComponent {
  instruktaze: Instruktaz[] = [
    {
      dzien: '11-03-2024',
      godzina: '07:00',
      nazwa: 'Instruktaż na kompanię',
      uwagi: 'brak',
    },
    {
      dzien: '15-02-2024',
      godzina: '07:00',
      nazwa: 'Instruktaż na kompanię',
      uwagi: 'brak',
    },
    {
      dzien: '21-05-2024',
      godzina: '12:00',
      nazwa: 'Instruktaż na wyjazd na urlop',
      uwagi: 'brak',
    }];

  addInstruktaz(newInstruktaz: Instruktaz) {
    this.instruktaze.push(newInstruktaz);
  }
}
