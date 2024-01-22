import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import jsPDF from 'jspdf';
import { CommonModule } from '@angular/common';
import { NgForOf } from '@angular/common';
;

export interface Bron {
  id: number;
  nazwa: string;
  typ: string;
  nrMagazynu: number;
  rodzajAmunicji: string;
  status: string;
  numerSerii: string;
  nrLegitymacji: number;
  awarie: string[];
  historiaEwidencji: string[];
}

@Component({
  selector: 'app-bron',
  templateUrl: './bron.component.html',
  styleUrls: ['./bron.component.css'],
  imports: [CommonModule, ReactiveFormsModule],
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
      nrLegitymacji: 1,
      awarie: ['Brak awarii'],
      historiaEwidencji: ['2023-01-01: Wprowadzono do magazynu', '2023-01-15: Przegląd techniczny']
    },
    {
      id: 2,
      nazwa: 'M4A1',
      typ: 'Karabin',
      nrMagazynu: 3,
      rodzajAmunicji: "5,56 x 45 mm",
      status: 'W naprawie',
      numerSerii: "4321",
      nrLegitymacji: 2,
      awarie: ['2023-03-12: Usterka spustu'],
      historiaEwidencji: ['2023-01-10: Wprowadzono do magazynu']
    }
  ];

  bronForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bronForm = this.fb.group({
      nazwa: ['', Validators.required],
      typ: ['', Validators.required],
      nrMagazynu: ['', Validators.required],
      rodzajAmunicji: ['', Validators.required],
      status: ['', Validators.required],
      numerSerii: ['', Validators.required],
      nrLegitymacji: ['', Validators.required],
      awarie: [''],
      historiaEwidencji: ['']
    });
  }

  generujRaport() {
    const doc = new jsPDF();
    const pageHeight = doc.internal.pageSize.height;
    let y = 10;

    const addText = (text: string, x: number, maxY: number) => {
      const lines = doc.splitTextToSize(text, 180);
      lines.forEach((line: string) => {
        if (y > maxY) {
          doc.addPage();
          y = 10;
        }
        doc.text(line, x, y);
        y += 10;
      });
    };

    this.bronie.forEach((bron, index) => {
      addText(`Bron ${index + 1}`, 10, pageHeight);
      addText(`Nazwa: ${bron.nazwa}`, 10, pageHeight);
      addText(`Typ: ${bron.typ}`, 10, pageHeight);
      addText(`Numer Serii: ${bron.numerSerii}`, 10, pageHeight);
      addText(`Nr Magazynu: ${bron.nrMagazynu}`, 10, pageHeight);
      addText(`Rodzaj Amunicji: ${bron.rodzajAmunicji}`, 10, pageHeight);
      addText(`Status: ${bron.status}`, 10, pageHeight);
      addText(`Nr Legitymacji: ${bron.nrLegitymacji}`, 10, pageHeight);
      addText(`Awarie: ${bron.awarie.join(', ')}`, 10, pageHeight);
      addText(`Historia ewidencji: ${bron.historiaEwidencji.join(', ')}`, 10, pageHeight);
      y += 10;
    });

    doc.save('raport.pdf');
  }

  dodajBron() {
    const nowaBron = {
      ...this.bronForm.value,
      id: this.bronie.length > 0 ? Math.max(...this.bronie.map(bron => bron.id)) + 1 : 1,
      awarie: this.bronForm.value.awarie.split(',').map((s: string) => s.trim()),
      historiaEwidencji: this.bronForm.value.historiaEwidencji.split(',').map((s: string) => s.trim())
    };
    this.bronie.push(nowaBron);
    this.bronForm.reset();
  }

  usunBron(id: number) {
    this.bronie = this.bronie.filter(bron => bron.id !== id);
  }
}
