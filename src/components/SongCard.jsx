import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {motion} from "framer-motion"
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";





const SongCard = ({ song, isPlaying, activeSong, data, i }) => {

  
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <motion.div className="flex flex-col w-[250px] p-4 bg-white/5 hover:bg-white/10 duration-300 group bg-opacity-80 backdrop-blur-sm  rounded-lg cursor-pointer" > 
       {song?.hub?.actions || song?.id ? (
        <>
      <div className="relative w-full h-56 group">

      {/* <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50  group-hover:flex  ${
            activeSong?.title === song.title
              ? "flex bg-black bg-opacity-70 "
              : " flex"
          }`}
        > */}


        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50  flex opacity-0 group-hover:opacity-100 duration-300 `}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        

          <img
          alt="song_img not found sorry"
          src={song.images?.coverart}
          className="w-full h-full rounded-lg"
        />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate   ">
          <Link to={`/songs/${song?.key} `}>{song.title}</Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link
            to={
              song.artists
                ? `/artists/${song?.artists[0]?.adamid}`
                : "/top-artists"
            }
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
      </>
      ) : (
        <>
      <img
        className="rounded-lg group w-full"
        src="https://i1.sndcdn.com/avatars-000701937364-wb44x5-t500x500.jpg"
      />
      <div className="mt-4 flex flex-col space-y-6">
        <p className="font-semibold text-lg bg-slate-700 truncate hover:text-xl  w-[200px] rounded h-2 ">
          <div>.</div>
        </p>
        <p className="text-sm truncate bg-slate-700 mt-1 w-[70px] rounded h-2">
        <div>.</div>
        </p>
      </div>
      </>
    )}
    </motion.div>
  );
};

export default SongCard;
