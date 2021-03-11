import * as React from 'react';
import { PiletApi } from 'piral-tryout';
import MovieTile from './components/MovieTile';
import { ToggleProps } from './models/proptypes';
import './style.scss';
import WatchPage from './components/WatchPage';

export function setup(app: PiletApi) {
  const Toggle: React.FC<ToggleProps> = props => <app.Extension name="ListToggle" params={props}></app.Extension>;
  app.registerExtension('MovieTile', props => <MovieTile {...props.params} Toggle={Toggle}></MovieTile>);

  app.registerPage('/watch', WatchPage);
}
