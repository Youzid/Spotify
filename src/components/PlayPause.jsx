import React from 'react';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => (
  

  
  isPlaying && activeSong?.title === (song.title || song.attributes.name) ? (
  
  
  <FaPauseCircle
    size={35}
    className="text-main hover:brightness-125 duration-300 "
    onClick={handlePause}
  >

  </FaPauseCircle>
) : (
  <FaPlayCircle
    size={35}
    className="text-main hover:brightness-125 duration-300 "
    onClick={handlePlay}
  >

  </FaPlayCircle>
));

export default PlayPause;