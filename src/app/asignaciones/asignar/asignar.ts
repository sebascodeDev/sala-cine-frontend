import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-asignar',
  imports: [FormsModule, CommonModule],
  templateUrl: './asignar.html',
  styleUrl: './asignar.css',
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
