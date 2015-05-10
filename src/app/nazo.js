import { View, Component } from 'angular2/angular2';
import { Router, RouterOutlet } from 'angular2/router';
import { Home } from '../home/home';
import { Play } from '../play/play';

@Component({
  selector: 'nazo'
})
@View({
  template: `<router-outlet></router-outlet>`,
  directives: [RouterOutlet]
})
export class Nazo {
  constructor(router: Router) {
    router
      .config('/home', Home)
      .then(() => router.config('/play', Play))
      .then(() => router.navigate('/home'));
  }
}
