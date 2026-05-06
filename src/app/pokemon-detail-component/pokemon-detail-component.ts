import {Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { CommonModule, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-pokemon-detail-component',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './pokemon-detail-component.html',
  styleUrl: './pokemon-detail-component.css',
})
export class PokemonDetailComponent implements OnInit {
  nombrePokemon: string | null = '';
  imagenPokemon: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // 1. Capturamos el nombre de la ruta (:nombre)
    this.nombrePokemon = this.route.snapshot.paramMap.get('nombre');

    // 2. Construimos la URL de la imagen (usando la estructura oficial de la PokéAPI)
    // Nota: Esto es un ejemplo, si tienes tu propia API usa la URL de tu servidor
    if (this.nombrePokemon) {
      this.imagenPokemon = `https://img.pokemondb.net/artwork/large/${this.nombrePokemon.toLowerCase()}.jpg`;
    }
  }
}
