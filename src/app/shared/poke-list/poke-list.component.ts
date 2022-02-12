import { Component, OnInit } from '@angular/core';
import { PokeAPIService } from 'src/app/service/poke-api.service';

type PokemonsList = any;

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  public allPokemonsList: PokemonsList = [];
  public pokemonsList: PokemonsList = [];

  constructor(private pokeAPIService: PokeAPIService) {}

  ngOnInit(): void {
    this.pokeAPIService.listPokemons.subscribe((responseListPokemons) => {
      this.allPokemonsList = responseListPokemons.results;
      this.pokemonsList = responseListPokemons.results;
    });
  }

  public search(value: string) {
    const filteredPokemons = this.allPokemonsList.filter(
      (pokemon: any) => !pokemon.name.indexOf(value.toLowerCase())
    );

    this.pokemonsList = filteredPokemons;
  }
}
