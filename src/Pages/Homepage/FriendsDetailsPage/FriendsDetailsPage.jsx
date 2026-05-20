import { useParams } from "react-router-dom";
import { use } from "react";
const FriendsData=fetch("/data.json").then((res)=>res.json());
import { IoIosCall } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";
import { IoMdVideocam } from "react-icons/io";
import { useTimeline } from "../../../Components/shared/Timelinecontext";
import { toast } from 'react-toastify';
const FriendsDetailsPage = () => {
  const Friends=use(FriendsData);
  const { id } = useParams();
  const friend=Friends.find(f=>f.id===Number(id));
  const { addEntry } = useTimeline();
    return (
        <section className="max-w-277.5 mx-auto mt-20 mb-20 p-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-4">
              <div className="p-10 shadow-md flex flex-col items-center justify-center text-center bg-white rounded-md">
                <img src={friend.picture} className="mb-2" alt="" />
                <p className="font-bold">{friend.name}</p>
                <p className={friend.status==="almost due"?"bg-[#EFAD44] px-2 text-white rounded-full mb-2":friend.status==="overdue"?"bg-[#EF4444] px-2 text-white rounded-full mb-2":friend.status==="on-track"?"bg-[#244D3F] px-2 text-white rounded-full mb-2":""}>{friend.status}</p>
                  <div className="flex gap-3 mb-2">
                  {friend.tags.map((tag, index) => (
                  <span className="bg-[#cbfadb] px-2 py-1 text-[#244D3F] rounded-full text-sm font-medium" key={index}>{tag}</span>
                  ))}
                </div>
                <p className="text-sm text-[#64748B] w-full">"{friend.bio}"</p>
                <p className="text-[#64748B] mb-2">preferred:{friend.email}</p>
              </div>
              <div className="btn w-full">
                <h2>Snooze 2 weeks</h2>
              </div>
              <div className="btn w-full">
                <h1>Archive</h1>
              </div>
              <div className="btn w-full">
                <h2>Delete</h2>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2">
              <div className="grid grid-cols-3 gap-4">
                <div className="shadow-md bg-white rounded-md p-6 text-center">
               <p className="text-2xl font-bold text-[#244D3F]">{friend.days_since_contact}</p>
               <p className="text-[#64748B]">Days Since Contact</p>
               </div>
                 <div className="shadow-md bg-white rounded-md p-6 text-center">
                 <p className="text-2xl font-bold text-[#244D3F]">{friend.goal}</p>
                 <p className="text-[#64748B]">Goal (Days)</p>
                 </div>
                  <div className="shadow-md bg-white rounded-md p-6 text-center">
                  <p className="text-2xl font-bold text-[#244D3F]">{friend.next_due_date}</p>
                  <p className="text-[#64748B]">Next Due</p>
                  </div>
              </div>
              <div className="shadow-md bg-white rounded-md p-6 mt-12">
              <div className="flex justify-between items-center mb-2">
              <p className="font-semibold text-lg text-[#244D3F]">Relationship Goal</p>
              <button className="btn px-3 py-1 rounded text-sm">Edit</button>
              </div>
              <p className="text-[#64748B]">Connect every <span className="font-bold">{friend.goal} days</span></p>
              </div>
              <div className="shadow-md bg-white rounded-md p-6 mt-15">
              <p className="font-semibold text-lg mb-4 text-[#244D3F]">Quick Check-In</p>
              <div className="grid grid-cols-3 gap-4">
              <button onClick={() => {
               addEntry("Call", friend.name);toast.success(`Call with ${friend.name} logged!`);}}className="bg-[#F8FAFC] rounded-md p-4 flex flex-col items-center shadow gap-2">
              <span><IoIosCall className="text-2xl"/></span>
              <span>Call</span>
              </button>
              <button onClick={() => {addEntry("Text", friend.name);toast.success(`Text with ${friend.name} logged!`);}}className="bg-[#F8FAFC] rounded-md p-4 flex flex-col items-center gap-2 shadow">
              <span><FaMessage className="text-2xl"/></span>
              <span>Text</span>
              </button>
              <button onClick={() => {addEntry("Video", friend.name);toast.success(`Video with ${friend.name} logged!`);}}className="bg-[#F8FAFC] rounded-md p-4 flex flex-col items-center gap-2 shadow">
              <span><IoMdVideocam className="text-2xl"/></span>
              <span>Video</span>
              </button>
              </div>
              </div>
            </div>
          </div>
        </section>
    );
};

export default FriendsDetailsPage;