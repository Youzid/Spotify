import { useSelector } from 'react-redux';
import { Route ,useLocation , Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Searchbar, Sidebar, MusicPlayer, TopPlay } from './components';
import { ArtistDetails, TopArtists, AroundYou, Discover, Search, SongDetails, TopCharts } from './pages';
import PreLoader from './components/PreLoader';
import { useEffect, useState } from 'react';

const App = () => {

  const { activeSong } = useSelector((state) => state.player);
const [musicWindow, setMusicWindow] = useState(false)
const [arrow, setArrow] = useState(true)


  return (
    <div>
          <div className="sm:hidden md:flex      " >
                <PreLoader  />
          </div>
   
    <div className="relative flex">
  
      <Sidebar />
      <div className="flex-1 flex flex-col bg-black ">
        <Searchbar />
        <span className='fixed -bottom-20 -right-40 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] bg-slate-300 rounded-full blur-[200px] opacity-90'></span>
        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
          <AnimatePresence  exitBeforeEnter>
            <Routes key={location.pathname} location={location}>
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
            </AnimatePresence>
          </div>
          <div className="xl:sticky relative top-0  xl:w-[40%] 2xl:w-[30%] ">
            <TopPlay />
          </div>
        </div>
      </div>

      {activeSong?.title && (
        <div className={`   fixed h-28 bottom-[${musicWindow ? "-10%" : "0%"}] duration-700 left-0 right-0 flex  animate-slideup bg-gradient-to-br from-black via-white/10 to-white/10 backdrop-blur-lg rounded-t-3xl z-10`}>
          <MusicPlayer />
          <div className='w-4 h-4'>
           <div className='relative w-[40px] h-[20px] bottom-[-75%] right-[200%] group flex justify-center items-center cursor-pointer ' onClick={()=>{setArrow(!arrow) ; setMusicWindow(!musicWindow)}}>
          <span className={`absolute w-[20px] h-1 bg-white group-hover:bg-main group-hover:brightness-110    left-[4px] duration-300 z-10 ${arrow ? "rotate-45" :"-rotate-45" }`}  ></span>
          <span className={`absolute w-[20px] h-1 bg-white group-hover:bg-main group-hover:brightness-110  right-[4px] duration-300 z-10 ${arrow ? "-rotate-45" :"rotate-45" }`}    ></span>
            </div> 
          </div>
        </div>
      )}
     
    </div>
  </div>
  );
};

export default App;
