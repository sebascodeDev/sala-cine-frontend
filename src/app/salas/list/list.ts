import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Sala {
  id: number;
  nombre: string;
  capacidad: number;
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list.html',
  styleUrls: ['./list.css'],
})
export class List {
  salas: Sala[] = [
    { id: 1, nombre: 'Sala A', capacidad: 100 },
    { id: 2, nombre: 'Sala B', capacidad: 80 }
  ];
}
