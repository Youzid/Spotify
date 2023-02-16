import React from "react";

import { loader } from "../assets";

const ArtistLoader = ({ title }) =>

    <div className="pt-20 flex-wrap sm:justify-start justify-center  sm:gap-6 gap-10  w-full  flex  flex-col pr-[150px]  pl-2  md:pr-[70px]  animate-pulse ">
      <div className="flex items-center gap-4 w-full bg-gradient-to-l from-transparent pb-36 ">
        <div class=" bg-slate-700  col-span-2 w-[200px] h-[200px] rounded-full "></div>
        <div className=" gap-2 flex flex-col">
          <div class=" bg-slate-700  col-span-2 w-[200px] h-2 rounded "></div>
          <div class=" bg-slate-700  col-span-2 w-[70px] h-2 rounded "></div>
        </div>
      </div>
  
      {[
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ].map((item, i) => (
        <div class=" shadow rounded-md    mx-auto flex  h-[120px] w-full ml-[-20px] p-4 bg-white/5 bg-opacity-10 backdrop-blur-sm  cursor-pointer">
          <div class=" flex  items-center gap-4 overflow-hidden ">
            <div class=" bg-slate-700 w-[100px] h-[100px]  rounded-[10px] "></div>
            <div class="grid grid-cols- gap-4 ">
              <div class="h-3 bg-slate-700 rounded col-span-8"></div>
              <div class="h-3 bg-slate-700 rounded col-span-6"></div>
            
            </div>
          </div>
        </div>
      ))}
    </div>
  

export default ArtistLoader;

