import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-umundorowanie',
  templateUrl: './umundorowanie.component.html',
  styleUrls: ['./umundorowanie.component.css'],
  imports: [ CommonModule ],
  standalone: true
})

export class UmundorowanieComponent {
  showForm: boolean = false;

  toggleForm() {
    this.showForm = !this.showForm;
    }

    submitForm() {
      // Tutaj dodaj logikę obsługi wysłania zgłoszenia (np. HTTP request)
      console.log('Zgłoszenie wysłane');

      // Po wysłaniu zgłoszenia, możesz ukryć formularz
      this.showForm = false;
    }
}
