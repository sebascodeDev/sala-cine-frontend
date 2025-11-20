import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-asignar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './asignar.html',
  styleUrls: ['./asignar.css'],
})
export class Asignar {
  pelicula = '';
  sala = '';
  fecha = '';

  peliculas = ['La Gran Aventura', 'Comedia Nocturna'];
  salas = ['Sala A', 'Sala B'];

  asignar() {
    alert(`Película asignada: ${this.pelicula} en ${this.sala} el ${this.fecha}`);
  }
}
