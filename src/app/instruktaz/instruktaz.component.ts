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
      dzien: '01-01-2022',
      godzina: '17:00',
      nazwa: 'Instruktaż na kompanię',
      uwagi: 'brak',
    },
    {
      dzien: 'a',
      godzina: 'a',
      nazwa: 'a',
      uwagi: 'a',
    }];

  addInstruktaz(newInstruktaz: Instruktaz) {
    this.instruktaze.push(newInstruktaz);
  }
}
