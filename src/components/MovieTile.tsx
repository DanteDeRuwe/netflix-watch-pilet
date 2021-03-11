import * as React from 'react';
import { MovieTileProps } from '../models/proptypes';

const MovieTile: React.FC<MovieTileProps> = props => {
  const backDrop = props.backdrop.match(/.*(null|undefined)$/) ? 'https://i.imgur.com/QVaMho2.png' : props.backdrop;

  return (
    <div
      className="MovieTile"
      id={props.movieId}
      data-mediatype={props.media_type}
      style={{ backgroundImage: `url(${backDrop})` }}
    >
      <div className="overlay">
        <div className="title">{props.title}</div>
        <div className="rating">{props.score} / 10</div>
        <div className="plot">{props.overview}</div>
        <props.Toggle {...props}></props.Toggle>
      </div>
    </div>
  );
};

export default MovieTile;
