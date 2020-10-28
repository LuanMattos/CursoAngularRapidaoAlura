/** Aqui criamos um Feature, para não encher o app.module de declarações a medida que o App cresce **/
import {NgModule, Pipe} from "@angular/core";
/**
 * Nossa classe de Http, lembrando que a mesma se repete no componente,
 *  vamos instancia-la apenas nos Module dos Services, por questões de performance e
 *  porque vamos precisar dela apenas nos Modules dos Services mesmo
 **/
import {PhotoListModule} from "./photo-list/photo-list.module";
import {PhotoFormModule} from "./photo-form/photo-form.module";
import {PhotoModule} from "./photo/photo.module";

@NgModule({
  /**
   * Como no C#, o declaration representaria um Private, ou seja
   *  se eu declaro uma biblioteca neste módulo, o mesmo NÃO instancia para seus filhos
   * Perceba que em TODOS os módulos FILHOS precisamos importar o CommonModule
   **/
  declarations:[],
  /** Sem o exports, o Module não funciona **/
  imports:[
    PhotoListModule,
    PhotoFormModule,
    PhotoModule
  ],
})
export class PhotosModule{

}
