import * as React from 'react';
import { useLocation } from 'react-router';
import * as qs from 'query-string';
import Player from './Player';

const WatchPage: React.FC<any> = () => {
  const { search } = useLocation();
  const { id, media_type } = qs.parse(search);

  return (
    <div className="WatchPage">
      <Player video_id={id} media_type={media_type} />
    </div>
  );
};

export default WatchPage;
