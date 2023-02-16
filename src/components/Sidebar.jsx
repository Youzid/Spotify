import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { HiOutlineHashtag, HiOutlineHome, HiOutlineMenu, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { logo } from '../assets';

const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
];

const NavLinkss = ({ handleClick }) => {
const [active,setActive]=useState(0)
    const {pathname}= useLocation()


useEffect(() => {
  if ( pathname === "/" ){
    setActive(0)
   
  }else if (pathname === "/around-you"){
    setActive(1)
  
  }else if (pathname === "/top-artists"){
    setActive(2)
  
  }
  else if (pathname === "/top-charts"){
    setActive(3)
   
  }


}, [pathname])




  return (
  <div className="mt-10">
    {links.map((item,key) => (
      <NavLink
        key={item.name}
        to={item.to}
        className={`flex flex-row justify-start items-center my-8 text-sm font-medium duration-300  hover:text-main hover:brightness-125  ${active === key ?  "text-main" : "text-gray-400" }  ` }
   
        onClick={() => {handleClick && handleClick() ; setActive(key)}}
      >
        <item.icon className="w-6 h-6 mr-2 " />
        {item.name}
      </NavLink>
    ))}
  </div>
  )
};

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    
    <>
    
      <div className="md:flex hidden flex-col w-[240px] py-16 px-4 bg-black relative group">
        <Link to="/" className=' '>
        {/* <img src={logo} alt="logo" className="w-full h-14 object-contain" /> */}
        <div>
        <svg  className="w-full h-32 object-contain PreLoader z-[10]  relative   "  color='#1DB954' fill="#1DB954" xmlns="http://www.w3.org/2000/svg"  viewBox="0 -1 25 35" width="500px" height="500px"><path d="M 13 0 C 5.800781 0 0 5.800781 0 13 C 0 20.199219 5.800781 26 13 26 C 20.199219 26 26 20.199219 26 13 C 26 5.800781 20.199219 0 13 0 Z M 18.300781 19.101563 C 18.101563 19.101563 17.898438 19 17.699219 18.898438 C 15.800781 17.800781 13.5 17.199219 11 17.199219 C 9.601563 17.199219 8.199219 17.398438 6.898438 17.699219 C 6.699219 17.699219 6.398438 17.800781 6.300781 17.800781 C 5.800781 17.800781 5.5 17.398438 5.5 17 C 5.5 16.5 5.800781 16.199219 6.199219 16.101563 C 7.800781 15.699219 9.398438 15.5 11.101563 15.5 C 13.898438 15.5 16.5 16.199219 18.699219 17.5 C 19 17.699219 19.199219 17.898438 19.199219 18.398438 C 19.101563 18.800781 18.699219 19.101563 18.300781 19.101563 Z M 19.699219 15.699219 C 19.398438 15.699219 19.199219 15.601563 19 15.5 C 16.898438 14.199219 14 13.398438 10.699219 13.398438 C 9.101563 13.398438 7.601563 13.601563 6.5 13.898438 C 6.199219 14 6.101563 14 5.898438 14 C 5.300781 14 4.898438 13.5 4.898438 13 C 4.898438 12.398438 5.199219 12.101563 5.699219 11.898438 C 7.199219 11.5 8.699219 11.199219 10.800781 11.199219 C 14.199219 11.199219 17.5 12 20.101563 13.601563 C 20.5 13.800781 20.699219 14.199219 20.699219 14.601563 C 20.699219 15.199219 20.300781 15.699219 19.699219 15.699219 Z M 21.300781 11.699219 C 21 11.699219 20.898438 11.601563 20.601563 11.5 C 18.199219 10.101563 14.601563 9.300781 11.101563 9.300781 C 9.300781 9.300781 7.5 9.5 5.898438 9.898438 C 5.699219 9.898438 5.5 10 5.199219 10 C 4.5 10.101563 4 9.5 4 8.800781 C 4 8.101563 4.398438 7.699219 4.898438 7.601563 C 6.800781 7 8.800781 6.800781 11.101563 6.800781 C 14.898438 6.800781 18.898438 7.601563 21.898438 9.300781 C 22.300781 9.5 22.601563 9.898438 22.601563 10.5 C 22.5 11.199219 22 11.699219 21.300781 11.699219 Z"/> </svg>
                <div className=" left-[120px] top-[100px] w-[0px] z-[0]  opacity-80 group-hover:opacity-100  duration-300    h-[0px] bg-red-600 absolute   rounded-full   " style={   {boxShadow:`0px 5px 85px 50px #1DB954` }}></div>
        </div>
        </Link>
        <NavLinkss />

      </div>

      {/* Mobile sidebar */}
      <div className="absolute md:hidden block top-6 right-3 z-10">
        {!mobileMenuOpen ? (
          <HiOutlineMenu className="w-6 h-6 mr-2 cursor-pointer text-white" onClick={() => setMobileMenuOpen(true)} />
        ) : (
          <RiCloseLine className="w-6 h-6 mr-2 cursor-pointer text-white" onClick={() => setMobileMenuOpen(false)} />
        )}
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-black backdrop-blur-lg z-10 p-6 md:hidden smooth-transition  ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <Link to="/">
        <svg  className="w-full h-32 object-contain PreLoader z-[10]  relative  "  color='#1DB954' fill="#1DB954" xmlns="http://www.w3.org/2000/svg"  viewBox="0 -1 25 35" width="500px" height="500px"><path d="M 13 0 C 5.800781 0 0 5.800781 0 13 C 0 20.199219 5.800781 26 13 26 C 20.199219 26 26 20.199219 26 13 C 26 5.800781 20.199219 0 13 0 Z M 18.300781 19.101563 C 18.101563 19.101563 17.898438 19 17.699219 18.898438 C 15.800781 17.800781 13.5 17.199219 11 17.199219 C 9.601563 17.199219 8.199219 17.398438 6.898438 17.699219 C 6.699219 17.699219 6.398438 17.800781 6.300781 17.800781 C 5.800781 17.800781 5.5 17.398438 5.5 17 C 5.5 16.5 5.800781 16.199219 6.199219 16.101563 C 7.800781 15.699219 9.398438 15.5 11.101563 15.5 C 13.898438 15.5 16.5 16.199219 18.699219 17.5 C 19 17.699219 19.199219 17.898438 19.199219 18.398438 C 19.101563 18.800781 18.699219 19.101563 18.300781 19.101563 Z M 19.699219 15.699219 C 19.398438 15.699219 19.199219 15.601563 19 15.5 C 16.898438 14.199219 14 13.398438 10.699219 13.398438 C 9.101563 13.398438 7.601563 13.601563 6.5 13.898438 C 6.199219 14 6.101563 14 5.898438 14 C 5.300781 14 4.898438 13.5 4.898438 13 C 4.898438 12.398438 5.199219 12.101563 5.699219 11.898438 C 7.199219 11.5 8.699219 11.199219 10.800781 11.199219 C 14.199219 11.199219 17.5 12 20.101563 13.601563 C 20.5 13.800781 20.699219 14.199219 20.699219 14.601563 C 20.699219 15.199219 20.300781 15.699219 19.699219 15.699219 Z M 21.300781 11.699219 C 21 11.699219 20.898438 11.601563 20.601563 11.5 C 18.199219 10.101563 14.601563 9.300781 11.101563 9.300781 C 9.300781 9.300781 7.5 9.5 5.898438 9.898438 C 5.699219 9.898438 5.5 10 5.199219 10 C 4.5 10.101563 4 9.5 4 8.800781 C 4 8.101563 4.398438 7.699219 4.898438 7.601563 C 6.800781 7 8.800781 6.800781 11.101563 6.800781 C 14.898438 6.800781 18.898438 7.601563 21.898438 9.300781 C 22.300781 9.5 22.601563 9.898438 22.601563 10.5 C 22.5 11.199219 22 11.699219 21.300781 11.699219 Z"/> </svg>
                <div className=" left-[120px] top-[100px] w-[0px] z-[0]  opacity-80 group-hover:opacity-100  duration-300    h-[0px] bg-red-600 absolute   rounded-full   " style={   {boxShadow:`0px 5px 85px 50px #1DB954` }}></div>
        
      </Link>
        <NavLinkss handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;