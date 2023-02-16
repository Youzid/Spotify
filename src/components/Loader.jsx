import React from "react";

import { loader } from "../assets";

const Loader = ({ title }) =>
<div className="flex-wrap sm:justify-start justify-center  sm:gap-6 gap-10  flex pr-[150px]  pl-4  md:pr-[70px] ">
 { [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(
    (item, i) => (
      <div key={i} class="  shadow rounded-md  max-w-sm  mx-auto flex  w-[232px] ml-[-20px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm  pointer-events-none h-[258px]">
        <div class="animate-pulse flex  flex-col gap-4 overflow-hidden ">
          <div class=" bg-slate-700 w-[218px] h-[228px]  rounded "></div>
          <div class="grid grid-cols- gap-4 ">
            <div class="h-3 bg-slate-700 rounded col-span-2"></div>
            <div class="h-2 bg-slate-700 rounded col-span-1"></div>
          </div>
          
        </div>
      </div>
    )
  )}

  </div>

export default Loader;


