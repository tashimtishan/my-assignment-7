
import { FaPlus } from "react-icons/fa6";
const Banner = () => {
    return (
        <section className="max-w-277.5 mx-auto text-center">
            <div className="mt-20">
            <h2 className="font-bold text-5xl mb-5">Friends to keep close in your life</h2>
            <p className="text-[#64748B] mb-6">Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> relationships that matter most.</p>
            <button className="btn bg-[#244D3F] text-white mb-6"><FaPlus className="relative top-px" /><span>Add a Friend</span></button>
            </div>
            <div className="parent-div flex items-center justify-center gap-5">
            <div className="w-56 h-28 p-8 shadow-lg rounded-lg">
            <span className="text-[#244D3F] font-semibold text-3xl">10</span>
            <p className="text-[#64748B]">Total Friends</p>
            </div>
            <div className="w-56 h-28 p-8 shadow-lg rounded-lg">
            <span className="text-[#244D3F] font-semibold text-3xl">3</span>
            <p className="text-[#64748B]">On Track</p>
            </div>
            <div className="w-56 h-28 p-8 shadow-lg rounded-lg">
            <span className="text-[#244D3F] font-semibold text-3xl">6</span>
            <p className="text-[#64748B]">Need Attention</p>
            </div>
            <div className="w-56 h-28 p-8 shadow-lg rounded-lg flex flex-col justify-center">
            <span className="text-[#244D3F] font-semibold text-3xl">12</span>
            <p className="text-[#64748B] whitespace-nowrap">Interactions This Month</p>
            </div>
            </div>
            <hr className="mt-8 text-[#E9E9E9]"/>
        </section>
    );
};

export default Banner;