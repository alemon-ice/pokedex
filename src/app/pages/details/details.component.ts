import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeAPIService } from 'src/app/service/poke-api.service';

type Pokemon = any;

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  private pokemonURL: string = 'https://pokeapi.co/api/v2/pokemon';
  private nameURL: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemon: Pokemon;
  public isLoaded = false;
  public apiError = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeService: PokeAPIService
  ) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  public getPokemon() {
    const pokemonId = this.activatedRoute.snapshot.params['id'];
    const pokemon = this.pokeService.getPokemonDetails(
      `${this.pokemonURL}/${pokemonId}`
    );
    const name = this.pokeService.getPokemonDetails(
      `${this.nameURL}/${pokemonId}`
    );

    forkJoin([pokemon, name]).subscribe(
      (res) => {
        this.pokemon = res;
        this.isLoaded = true;
      },
      (err) => {
        this.apiError = true;
      }
    );
  }
}
