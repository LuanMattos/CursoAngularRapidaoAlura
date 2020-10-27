import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Photo} from "./photo";

const API = 'http://localhost:3000/';

/**Com Injectable TODA a aplicação vai poder usar o servço de Fotos*/
@Injectable({providedIn:'root'})
export class PhotoService {

  /**
   * Usando private/public http... não precisamos criar o atributo e construir no construtor,
   * Ou seja, ele se torna AUTOMATICAMENTE propriedade da classe
   **/
  constructor(private http: HttpClient) {}

  listFromUser(userName : string){
    /**
     * Precisamos tipar o dado, pois o Angular não sabe o tipo que estará vindo do Back
     * Também não colocamos Subscribe, quem usar o método que vai chamar
     * Precisamos tipar o dado, pois o Angular não sabe o tipo que vai vir do Back
     **/

    return this.http.get<Photo[]>(API + userName +'/photos');
  }
}