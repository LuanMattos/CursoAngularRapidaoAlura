/**
 * BrowserModule => Onde ficam todas as diretivas (NgFor,NgIf...)
 * Portanto, BrowserModule está disponível apenas para seus componentes, neste caso aqui AppComponent
 * Porem NÃO PODEMOS importar BrowserModule em lugar algum, que não seja o modulo principal (AppComponent)
 * Para resolver isso, devemos importar no Module FILHO, os CommonModule
 **/
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PhotosModule} from "./photos/photos.module";


@NgModule({
  /** Apenas components **/
  declarations: [
    AppComponent
  ],
  /** Os Modules **/
  imports: [
    /** BrowserModule importa automaticamente quando importamos um module **/
    BrowserModule,
    AppRoutingModule,
    PhotosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
