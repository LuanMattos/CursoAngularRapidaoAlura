import {Component} from "@angular/core";
import {Observable} from "rxjs";

import {UserService} from "../user/user.service";
import {User} from "../user/user";
/**
 * Quando implementamos um Observale sozinho (sem o ), nosso Observable emite apenas uma Vez ao carregar o App,
 *    com isso, ao recarregar a página, o nome de usuário  SOME para nosso DESESPERO
 * A diferença do Subject e BehaviorSubject:
 *
 *    BehaviorSubject =>  -Precisa de um valor inicial e retorna um valor mesmo que não tenha recebido um next()
 *                        -RETORNA O ULTIMO VALOR DO ASSUNTO
 *
 *    Observable =>       -Dispara os valores apenas quando recebe o next()
 *
 *    Detalhe: Ainda precisamos usar o Observable no header.component, pois ele fica escutando os valores.
 *      Mudamos no user.service apenas, para que o BehaviorSubject envie os valores constantemente
 *
 *    Resumindo:
 *      Observable não guardo o valor, apenas emite uma vez.
 *      Behavior guarda o ULTIMO valor (armazena a última emissão até que alguém apareça para consumi-la. <Alura>)
 *
 **/
@Component({
  selector:'app-header',
  templateUrl:'./header.component.html'
})
export class HeaderComponent{
  /** user$ => Boa prática user para descrever um Observable **/
  user$:Observable<User>;
  user:User;
  constructor(userService:UserService) {
    this.user$ = userService.getUser();
    /** Novamente, pegamos o objeto observável(user$) e populamos this.user, porque não podemos usar um Observable no UI (Mentira, podemos sim - olhe no header.component) **/
    /** Lembrando, podemos usar async no nosso template e não precisamo do subscrice ;)  (ver no header.component) **/
    /** IMPORTANTE/LEMBRANDO => async faz destroy automaticamente **/

    //descomentar se não for usar async
    //this.user$.subscribe(user => this.user = user);
  }
}
