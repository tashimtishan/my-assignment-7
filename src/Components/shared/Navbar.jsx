import { NavLink } from "react-router";
import { FaHome } from "react-icons/fa";
import { RiTimeLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const [menuOpen,setMenuOpen]=useState(false);
    return (
       <nav className="shadow">
       <div className="flex justify-between container mx-auto py-4 items-center ">
         <h1><span className="font-bold text-2xl">Keen</span><span className="font-bold text-xl text-[#244D3F]">Keeper</span></h1>

        <ul className="hidden md:flex gap-5">
            <li className="text-[#64748B]"><NavLink to={"/"} className={({isActive})=>{return`flex items-center gap-1 py-2 px-4 ${isActive?"bg-[#244D3F] text-white rounded-sm":"bg-transparent"}`}}><FaHome />Home</NavLink></li>
            <li className="text-[#64748B]"><NavLink to={"/Timeline"}  className={({isActive})=>{return`flex items-center gap-1 py-2 px-4 ${isActive?"bg-[#244D3F] text-white rounded-sm":"bg-transparent"}`}}><RiTimeLine />Timeline</NavLink></li>
            <li className="text-[#64748B]"><NavLink to={"/FriendsAnalyticspage"}  className={({isActive})=>{return`flex items-center gap-1 py-2 px-4 ${isActive?"bg-[#244D3F] text-white rounded-sm":"bg-transparent"}`}}><TfiStatsUp />Stats</NavLink></li>
        </ul>

         <button className="md:hidden text-2xl" onClick={()=>setMenuOpen(!menuOpen)}>
          {menuOpen ?<IoClose /> : <RxHamburgerMenu />}
        </button>
       </div>


       {menuOpen&&(
        <ul className="md:hidden flex flex-col bg-white px-4 pb-4 gap-2">
          <li>
            <NavLink to={"/"} onClick={()=>setMenuOpen(false)} className={({isActive})=>`flex items-center gap-1 py-2 px-4 ${isActive ? "bg-[#244D3F] text-white rounded-sm" : "text-[#64748B]"}`}>
              <FaHome />Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/Timeline"} onClick={()=>setMenuOpen(false)} className={({isActive})=>`flex items-center gap-1 py-2 px-4 ${isActive ? "bg-[#244D3F] text-white rounded-sm" : "text-[#64748B]"}`}>
              <RiTimeLine />Timeline
            </NavLink>
          </li>
          <li>
            <NavLink to={"/FriendsAnalyticspage"} onClick={() => setMenuOpen(false)} className={({isActive})=>`flex items-center gap-1 py-2 px-4 ${isActive ? "bg-[#244D3F] text-white rounded-sm" : "text-[#64748B]"}`}>
              <TfiStatsUp />Stats
            </NavLink>
          </li>
        </ul>
      )}
       </nav>
    );
};

export default Navbar;