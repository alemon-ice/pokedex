import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

type PokemonList = any;

@Injectable({
  providedIn: 'root',
})
export class PokeAPIService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10';

  constructor(private http: HttpClient) {}

  get listPokemons(): Observable<PokemonList> {
    return this.http.get<PokemonList>(this.url).pipe(
      tap((res) => res),
      tap((res) => {
        res.results.map((pokemon: any) => {
          this.getPokemonDetails(pokemon.url).subscribe(
            (res) => (pokemon.status = res)
          );
        });
      })
    );
  }

  public getPokemonDetails(pokemonUrl: string): Observable<any> {
    return this.http.get<any>(pokemonUrl).pipe(map((res) => res));
  }
}
