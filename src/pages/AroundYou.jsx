
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {motion} from 'framer-motion'
import { Error, Loader, SongCard } from '../components';
import { selectGenreListId } from '../redux/features/playerSlice';
import axios, {isCancel, AxiosError} from 'axios';

import { useGetTopChartsQuery } from '../redux/services/shazamCore';
import { useGetAroundYouQuery } from '../redux/services/shazamCore';




const CountryTracks = () => {
  const [country, setCountry] = useState("")
  const containerVariants = { 
    
    hidden:  { opacity: 0  },

    visible: {  opacity: 1  , transition:{ duration: 1.5, delay:0.2 } },

    exit: {

      opacity:0,
      transition:{ease:"easeInOut" , duration:0.8}
    }


  }


    const {data,isFetching, error} = useGetAroundYouQuery(country) // Getting the init data from  RTK Query 
    const {isPlaying,activeSong} = useSelector((state)=>state.player) // Selecting the State from store



useEffect(() => {
  axios.get("https://geo.ipify.org/api/v2/country?apiKey=at_qFJBljfFpIYDTaHrPSgKfRC34ERDz")
  .then((res)=>  setCountry(res?.data?.location?.country))
  .catch((err)=> console.log(err))
 
  
}, [country])


  

    if(error) return <Error/>
  
      return (
      
      <motion.div className="flex flex-col" variants={containerVariants}   initial="hidden" animate="visible"  exit="exit">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left flex ">Around You <span className='pl-4 text-main text'>{country}</span> </h2>
  
       
      </div>
  
      <div className="flex flex-wrap sm:justify-start justify-center gap-10  " variants={containerVariants}   initial="hidden" animate="visible"  exit="exit">
        
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

export default CountryTracks;
