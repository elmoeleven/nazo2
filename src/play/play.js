import { View, Component } from 'angular2/angular2';
import { Router } from 'angular2/router';

@Component({
  selector: 'play'
})
@View({
  templateUrl: 'play/play.html'
})

export class Play {
  constructor(router: Router) {
    this.router = router;
  }

  home() {
    this.router.parent.navigate('/home');
  }
}
