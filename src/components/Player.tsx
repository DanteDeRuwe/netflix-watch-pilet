import * as React from 'react';

// This is obviously a dummy player.
// More info on https://bit.ly/3rETEro
const Player: React.FC<any> = _ => (
  <iframe
    className="Player"
    width="560"
    height="315"
    src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
);

export default Player;
