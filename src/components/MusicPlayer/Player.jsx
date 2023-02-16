/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Player = ({ activeSong, isPlaying, volume, seekTime, onEnded, onTimeUpdate, onLoadedData, repeat, handleNextSong }) => {
  const ref = useRef(null);

    
  
  // eslint-disable-next-line no-unused-expressions
  if (ref.current) {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  




  useEffect(() => {
    ref.current.volume = volume;
      console.log(volume)
    
  }, [volume]);
  // updates audio element only on seekTime change (and not on each rerender):
  useEffect(() => {
    ref.current.currentTime = seekTime;
   
  }, [seekTime]);

  return (
    <audio
      src={ activeSong?.hub?.actions ?  activeSong?.hub?.actions[1]?.uri  : ""}
      ref={ref}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
      
    />
  );
};

export default Player;
