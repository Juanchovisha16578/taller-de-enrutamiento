import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { PokemonDetailComponent } from "./pokemon-detail-component/pokemon-detail-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PokemonDetailComponent, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('taller-de-enrutamiento');
}
