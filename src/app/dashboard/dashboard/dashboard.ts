import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  totalSalas = 0;
  salasDisponibles = 0;
  totalPeliculas = 0;

  ngOnInit() {
    // Placeholder values - these will come from services when integrating with backend
    this.totalSalas = 5;
    this.salasDisponibles = 3;
    this.totalPeliculas = 12;
  }
}
