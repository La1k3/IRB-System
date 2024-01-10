import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { CommonModule } from '@angular/common';

export interface Soldier {
  rank: string;
  firstName: string;
  lastName: string;
  exclusionDate: string;
  foodNorm: string;
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
    CommonModule
  ],
  styleUrls: ['./wyprowiantowanie.component.css']
})

export class WyprowiantowanieComponent implements OnInit{
  soldiers: Soldier[] = [];
  foodNorms: FoodNorm[] = [
    { label: 'Żołnierska – 22,81 zł - 010', value: '010' },
    { label: 'Szkolna – 24,32 zł - 020', value: '020' },
    { label: 'Specjalna – 29,80 zł - 030', value: '030' },
    { label: 'Operacyjna – 32,32 zł - 040', value: '040' }
  ];
  ngOnInit(): void {
    // Inicjalizacja danych żołnierzy
    this.soldiers = [
      { rank: 'Szeregowy', firstName: 'Adam', lastName: 'Kowalski', exclusionDate: '2024-01-10', foodNorm: '010' },
      { rank: 'Kapral', firstName: 'Ewa', lastName: 'Nowak', exclusionDate: '2024-01-12', foodNorm: '020' },
      { rank: 'Porucznik', firstName: 'Jan', lastName: 'Wiśniewski', exclusionDate: '2024-01-14', foodNorm: '030' },
      { rank: 'Major', firstName: 'Anna', lastName: 'Zielińska', exclusionDate: '2024-01-16', foodNorm: '040' }
    ];
  }
  addSoldier(soldier: Soldier) {
    this.soldiers.push(soldier);
  }
  removeSoldier(index: number): void {
    this.soldiers.splice(index, 1);
  }

}
