import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Pelicula {
  id: number;
  titulo: string;
  duracion: number;
}

@Component({
  selector: 'app-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  peliculas: Pelicula[] = [
    { id: 1, titulo: 'La Gran Aventura', duracion: 120 },
    { id: 2, titulo: 'Comedia Nocturna', duracion: 95 }
  ];
}
