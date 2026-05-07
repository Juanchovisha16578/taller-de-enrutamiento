import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-captura',
  imports: [],
  templateUrl: './captura.html',
  styleUrl: './captura.css',
})
export class Captura {
  // Inyectamos el Router en el constructor
  constructor(private router: Router) {}

  lanzarPokebola(nombrePokemon: string) {
    const suerte = Math.random() > 0.5;

    if (suerte) {
      // NAVEGACIÓN PROGRAMÁTICA: 
      // Si lo atrapa, lo enviamos directo a ver su detalle
      this.router.navigate(['/pokemon', nombrePokemon.toLowerCase()]);
    } else {
      alert('Se escapó...');
    }
  }
}
