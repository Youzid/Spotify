
import React from 'react'
import {motion} from "framer-motion"

const PreLoader = () => {

  const mainVariant = {
    hidden: {
     
      opacity: 1,

    },
    visible: {

      opacity: 0,
        transition:{
          duration:0.7,
          when: "afterChildren"
        }
    
      
    }
  };



    const svgVariants = {
        hidden: {
         
          
           
            
          opacity: 1,
          pathLength: 0,
          fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
            rotate:[-120,20,-2,0],
          opacity: 1,
          pathLength: 1,
          
        
          
        }
      };
      const svgBackground = {
        hidden: {
          position:"fixed",
          scale:"100%",
          top:"30%",
          left:"45%",
          width:"150px",
          height:"150px",
            
        },
        visible: {

             scale:"54.3%",
             top:"25.3px",
             left:"31px",
        padding: "10px",
        
        transition:{ duration:1.2 , delay:3 , ease: "easeInOut"}
        },
        
      };

  return (
    <motion.div  variants={mainVariant} initial="hidden" animate="visible" className="logo  bg-black z- flex justify-center  items-start pt-80 w-screen h-screen  z-20 fixed pointer-events-none opacity-100" >
              <motion.div variants={svgBackground}   >
              <motion.svg   className="  PreLoader" fill="rgba(9,121,56,1)" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="200px" height="200px">
              <g transform="translate(1.00, 1.00) scale(1, 1)">
                <motion.path  variants={svgVariants}    transition={{
          default: { duration: 3.5, delay:0.5, ease: "easeInOut" },
          fill: { duration: 0.1, ease: [1, -1, 0.5, 1] }}}  d="M 13 0 C 5.800781 0 0 5.800781 0 13 C 0 20.199219 5.800781 26 13 26 C 20.199219 26 26 20.199219 26 13 C 26 5.800781 20.199219 0 13 0 Z M 18.300781 19.101563 C 18.101563 19.101563 17.898438 19 17.699219 18.898438 C 15.800781 17.800781 13.5 17.199219 11 17.199219 C 9.601563 17.199219 8.199219 17.398438 6.898438 17.699219 C 6.699219 17.699219 6.398438 17.800781 6.300781 17.800781 C 5.800781 17.800781 5.5 17.398438 5.5 17 C 5.5 16.5 5.800781 16.199219 6.199219 16.101563 C 7.800781 15.699219 9.398438 15.5 11.101563 15.5 C 13.898438 15.5 16.5 16.199219 18.699219 17.5 C 19 17.699219 19.199219 17.898438 19.199219 18.398438 C 19.101563 18.800781 18.699219 19.101563 18.300781 19.101563 Z M 19.699219 15.699219 C 19.398438 15.699219 19.199219 15.601563 19 15.5 C 16.898438 14.199219 14 13.398438 10.699219 13.398438 C 9.101563 13.398438 7.601563 13.601563 6.5 13.898438 C 6.199219 14 6.101563 14 5.898438 14 C 5.300781 14 4.898438 13.5 4.898438 13 C 4.898438 12.398438 5.199219 12.101563 5.699219 11.898438 C 7.199219 11.5 8.699219 11.199219 10.800781 11.199219 C 14.199219 11.199219 17.5 12 20.101563 13.601563 C 20.5 13.800781 20.699219 14.199219 20.699219 14.601563 C 20.699219 15.199219 20.300781 15.699219 19.699219 15.699219 Z M 21.300781 11.699219 C 21 11.699219 20.898438 11.601563 20.601563 11.5 C 18.199219 10.101563 14.601563 9.300781 11.101563 9.300781 C 9.300781 9.300781 7.5 9.5 5.898438 9.898438 C 5.699219 9.898438 5.5 10 5.199219 10 C 4.5 10.101563 4 9.5 4 8.800781 C 4 8.101563 4.398438 7.699219 4.898438 7.601563 C 6.800781 7 8.800781 6.800781 11.101563 6.800781 C 14.898438 6.800781 18.898438 7.601563 21.898438 9.300781 C 22.300781 9.5 22.601563 9.898438 22.601563 10.5 C 22.5 11.199219 22 11.699219 21.300781 11.699219 Z"/>
           </g>
          </motion.svg >
        
                   </motion.div>
        </motion.div>
  )
}

export default PreLoader