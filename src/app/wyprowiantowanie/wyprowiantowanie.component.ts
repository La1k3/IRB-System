import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { WyprowiantowanieService } from './wyprowiantowanie.service';

export interface Soldier {
  id: number;
  stopien: string;
  imie: string;
  nazwisko: string;
  data_wyprowiantowania: string;
  norma_zywienia: number;
}

export interface FoodNorm {
  label: string;
  value: string;
}

@Component({
  selector: 'app-wyprowiantowanie',
  templateUrl: './wyprowiantowanie.component.html',
  standalone: true,
  imports: [
    FormsModule,
    DatePipe,
    CommonModule,
    HttpClientModule
  ],
  styleUrls: ['./wyprowiantowanie.component.css'],
  providers: [ WyprowiantowanieService ]
})

export class WyprowiantowanieComponent implements OnInit{

  constructor(private wyprowiantowanieService : WyprowiantowanieService) {
  }

  soldiers: Soldier[] = [];

  foodNorms: FoodNorm[] = [
    { label: 'Żołnierska – 22,81 zł - 010', value: '010' },
    { label: 'Szkolna – 24,32 zł - 020', value: '020' },
    { label: 'Specjalna – 29,80 zł - 030', value: '030' },
    { label: 'Operacyjna – 32,32 zł - 040', value: '040' }
  ];

  ngOnInit(): void {
    // Inicjalizacja danych żołnierzy
    this.loadSoldiers();
  }

  loadSoldiers(): void {
    this.wyprowiantowanieService.getWyprowiantowanie().subscribe(data => {
      this.soldiers = data;
    });
  }

  addSoldier(soldier: Soldier) {
    this.wyprowiantowanieService.createWyprowiantowanie(soldier).subscribe( () => {
      this.loadSoldiers();
    });
  }
  removeSoldier(soldierId: number): void {
    this.wyprowiantowanieService.deleteWyprowiantowanie(soldierId).subscribe( () => {
      this.loadSoldiers();
    });
  }

}
