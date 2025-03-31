import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonCardComponent } from './shared/components/pokemon-card/pokemon-card.component';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import { ExampleDirective } from './shared/directives/example.directive';
import { ExamplePipe } from './shared/pipes/example.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonCardComponent,
    LoadingSpinnerComponent,
    ExampleDirective,
    ExamplePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
