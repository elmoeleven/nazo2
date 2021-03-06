import { bootstrap } from 'angular2/angular2';
import { RootRouter } from 'angular2/src/router/router';
import { Pipeline } from 'angular2/src/router/pipeline';
import { bind } from 'angular2/di';
import { Router } from 'angular2/router';

import { Nazo } from './app/nazo';

bootstrap(Nazo, [
  bind(Router).toValue(new RootRouter(new Pipeline()))
]);
