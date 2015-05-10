import { View, Component } from 'angular2/angular2';
import { Router } from 'angular2/router';

@Component({
  selector: 'home'
})
@View({
  templateUrl: 'home/home.html'
})
export class Home {
  constructor(router: Router) {
    this.router = router;
  }

  play() {
    this.router.parent.navigate('/play');
  }
}
