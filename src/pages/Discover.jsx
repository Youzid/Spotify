
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Error, Loader, SongCard , ArtistLoader} from '../components';
import { selectGenreListId } from '../redux/features/playerSlice';
import {motion} from 'framer-motion'
import { genres } from '../assets/constants';
import {useGetSongsByGenreQuery} from '../redux/services/shazamCore';

 

const Discover = () => {
  const containerVariants = { 
    
    hidden:  { opacity: 0  },

    visible: {  opacity: 1  , transition:{ duration: 1.5, delay:0.2 } },

    exit: {

      opacity:0,
      transition:{ease:"easeInOut" , duration:0.8}
    }


  }


  const dispatch = useDispatch()
  const { genreListId } = useSelector((state) => state.player);
  const {data,isFetching, error} = useGetSongsByGenreQuery(genreListId || "POP") // Getting the init data from  RTK Query 
  const {isPlaying,activeSong} = useSelector((state)=>state.player) // Selecting the State from store

  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;
  if(error) return <Error/>



    
    return (
    
    <motion.div className="flex flex-col" variants={containerVariants}   initial="hidden" animate="visible"  exit="exit">
    <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
      <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>

      <select
        onChange={(e) => dispatch(selectGenreListId(e.target.value))}
        value={genreListId || "POP"}
        className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5 cursor-pointer"
      >
        {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
      </select>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center gap-10  "  >
      
      {/* Sending init data to Cards */}
      
      {isFetching ?<Loader /> : data?.map((song, i) => (
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
  )
}

export default Discover