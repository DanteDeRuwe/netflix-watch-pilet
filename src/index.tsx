import * as React from 'react';
import { PiletApi } from 'piral-tryout';
import MovieTile from './components/MovieTile';
import { ToggleProps } from './models/proptypes';
import './style.scss';

export function setup(app: PiletApi) {
  const Toggle: React.FC<ToggleProps> = props => <app.Extension name="ListToggle" params={props}></app.Extension>;
  app.registerExtension('MovieTile', props => <MovieTile {...props.params} Toggle={Toggle}></MovieTile>);

  const WatchPage = React.lazy(() => import('./components/WatchPage'));
  app.registerPage('/watch/:media_type/:video_id', WatchPage);
}
