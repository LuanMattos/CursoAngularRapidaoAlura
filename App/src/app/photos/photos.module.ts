/** Aqui criamos um Feature, para não encher o app.module de declarações a medida que o App cresce **/
import {NgModule, Pipe} from "@angular/core";
import {CommonModule} from "@angular/common";
/**
 * Nossa classe de Http, lembrando que a mesma se repete no componente,
 *  vamos instancia-la apenas nos Module dos Services, por questões de performance e
 *  porque vamos precisar dela apenas nos Modules dos Services mesmo
 **/
import {HttpClientModule} from "@angular/common/http";
import {PhotoComponent} from "./photo/photo.component";
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import {FilterByDescription} from "./photo-list/filter-by-description.pipe";
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';

@NgModule({
  /** Como no C#, o declaration representaria um Private **/
  declarations:[
    PhotoComponent,
    PhotoListComponent,
    PhotoFormComponent,
    PhotosComponent,
    FilterByDescription,
    LoadButtonComponent
  ],
  /** Sem o exports, o Module não funciona **/
  imports:[
    HttpClientModule,
    /** Lembra da "treta" do BrowserModule? (explicação em app.module)*/
    CommonModule
  ]
})
export class PhotosModule{

}
