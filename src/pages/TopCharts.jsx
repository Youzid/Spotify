import React from 'react';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard  } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';


const TopCharts = () => {
    const { data, isFetching, error } = useGetTopChartsQuery();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
  return (
    <div >
      <h2 className="font-bold py-6 text-3xl text-white text-left">Discover </h2>
    <div className='flex flex-wrap pt-2 sm:justify-start justify-center gap-10'>
        {data?.map((song,i)=>(
            <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
    </div>
    </div>
  )
}

export default TopCharts