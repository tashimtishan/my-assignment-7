import { NavLink } from "react-router";
import { FaHome } from "react-icons/fa";
import { RiTimeLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";

const Navbar = () => {
    return (
       <nav className="shadow">
       <div className="flex justify-between container mx-auto py-4 items-center ">
         <h1><span className="font-bold text-2xl">Keen</span><span className="font-bold text-xl text-[#244D3F]">Keeper</span></h1>

        <ul className="flex gap-5">
            <li className="text-[#64748B]"><NavLink to={"/"} className={({isActive})=>{return`flex items-center gap-1 py-2 px-4 ${isActive?"bg-[#244D3F] text-white rounded-sm":"bg-transparent"}`}}><FaHome />Home</NavLink></li>
            <li className="text-[#64748B]"><NavLink to={"/Timeline"}  className={({isActive})=>{return`flex items-center gap-1 py-2 px-4 ${isActive?"bg-[#244D3F] text-white rounded-sm":"bg-transparent"}`}}><RiTimeLine />Timeline</NavLink></li>
            <li className="text-[#64748B]"><NavLink to={"/FriendsAnalyticspage"}  className={({isActive})=>{return`flex items-center gap-1 py-2 px-4 ${isActive?"bg-[#244D3F] text-white rounded-sm":"bg-transparent"}`}}><TfiStatsUp />Stats</NavLink></li>
        </ul>
       </div>
       </nav>
    );
};

export default Navbar;