import { use } from "react";
import { Link } from "react-router-dom";

const FriendsData=fetch("/data.json").then((res)=>res.json());


const Friendsection = () => {
  const Friends=use(FriendsData);
  console.log(Friends)
    return (
        <section className="max-w-277.5 mx-auto px-4">
           <div>
             <h2 className="mt-5 font-semibold text-2xl mb-4">Your Friends</h2>
           </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-5 mb-14">
         {Friends.map(friend=>
        <Link to={`/friends/${friend.id}`} key={friend.id}>
         <div className="shadow-md flex flex-col items-center justify-center p-4 rounded-lg space-y-3 bg-white">
          <div>
            <img src={friend.picture} alt="" />
          </div>
            <div>
              <p className="font-semibold text-xl">{friend.name}</p>
            </div>
            <div>
             <p className="text-[#64748B]">{friend.days_since_contact}d ago</p>
            </div>
            <div className="flex gap-3">
             {friend.tags.map((tag, index) => (
             <span className="bg-[#cbfadb] px-2 py-1 text-[#244D3F] rounded-full text-sm font-medium" key={index}>{tag}</span>
             ))}
            </div>
            <div>
              <p className={friend.status==="almost due"?"bg-[#EFAD44] px-2 text-white rounded-full":friend.status==="overdue"?"bg-[#EF4444] px-2 text-white rounded-full":friend.status==="on-track"?"bg-[#244D3F] px-2 text-white rounded-full":""}>{friend.status}</p>
            </div>
        </div>
        </Link>
      )}
       </div>
           
        </section>
    );
};

export default Friendsection;