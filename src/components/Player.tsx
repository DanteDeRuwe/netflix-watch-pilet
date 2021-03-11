import * as React from 'react';

const Player: React.FC = () => (
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
