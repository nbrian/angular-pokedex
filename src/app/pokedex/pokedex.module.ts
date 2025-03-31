import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { BasicSearchComponent } from './components/search/basic-search/basic-search.component';
import { AdvancedSearchComponent } from './components/search/advanced-search/advanced-search.component';


@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent,
    BasicSearchComponent,
    AdvancedSearchComponent
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule
  ]
})
export class PokedexModule { }
