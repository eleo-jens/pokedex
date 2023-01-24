import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { pokemonListItem } from 'src/app/models/pokemonListItem.model';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-liste-poke',
  templateUrl: './liste-poke.component.html',
  styleUrls: ['./liste-poke.component.scss']
})
export class ListePokeComponent implements OnInit {

  listeBrut : {name: string, url: string}[] = [];
  listeAfter : pokemonListItem[]= []; 
  item : pokemonListItem; 
  // pokemon : Pokemon;

  constructor(private _pokeApi : PokeApiService) { }

  ngOnInit(): void {
    this._pokeApi.getAll("0").subscribe({
      next : (data) => {
        // console.log(data)
        this.listeBrut = data.results; 
        // console.log(this.listeBrut)
      }, 
      error : (error) => {
        console.log("Erreur avec getAll() " + error);
      }, 
      complete : () => {
        console.log("L'appel à la méthode getAll est terminé");
        // declencher getbyId 
        this.listeBrut.forEach(element => {
          this._pokeApi.getOneByUrl(element.url).subscribe({
            next: (data) => {
              // console.log(data);
              console.log(data.id);
              console.log(data.sprites.other.dream_world.front_default)
              this.item = new pokemonListItem(data.id, element.name, data.sprites.other.dream_world.front_default);
              console.log(this.item);
              this.listeAfter.push(this.item);
            }
          })
        });
        console.log(this.listeAfter);
      }
    })
  }

}
