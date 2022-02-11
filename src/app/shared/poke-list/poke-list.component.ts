import { Component, OnInit } from '@angular/core';
import { PokeAPIService } from 'src/app/service/poke-api.service';

type PokemonsList = any;

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  public pokemonsList: PokemonsList = [];

  constructor(private pokeAPIService: PokeAPIService) {}

  ngOnInit(): void {
    this.pokeAPIService.listPokemons.subscribe((responseListPokemons) => {
      this.pokemonsList = responseListPokemons.results;
    });
  }
}
