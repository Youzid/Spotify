import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {motion} from "framer-motion"
import { Error, Loader, SongCard } from '../components';
import { useGetSongsBySearchQuery } from '../redux/services/shazamCore';

const Search = () => {
  const { searchTerm } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm);

  const songs = data?.tracks?.hits.map((song) => song.track);


  const containerVariants = { 
    
    hidden:  { opacity: 0  },

    visible: {  opacity: 1  , transition:{ duration: 1.5, delay:1 } },

    exit: {

      opacity:0,
      transition:{ease:"easeInOut" , duration:0.8}
    }


  }



  if (isFetching) return <Loader title={`Searching ${searchTerm}...`} />;

  if (error) return <Error />;

  return (
    <motion.div className="flex flex-col" variants={containerVariants}   initial="hidden" animate="visible"  exit="exit">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Showing results for <span className="font-black">{searchTerm}</span></h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
      {isFetching ?<Loader /> : songs?.map((song, i) => (
        <SongCard
        isPlaying={isPlaying}
        activeSong={activeSong}
          key={song.key}
          song={song}
          data={data}
          i={i}
        />
      ))}
      </div>
    </motion.div>
  );
};

export default Search;