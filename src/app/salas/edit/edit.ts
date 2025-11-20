import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './edit.html',
  styleUrl: './edit.css',
})
export class Edit {
  nombre = '';
  capacidad = 0;

  guardar() {
    alert(`Sala guardada: ${this.nombre} (Capacidad: ${this.capacidad})`);
  }
}
