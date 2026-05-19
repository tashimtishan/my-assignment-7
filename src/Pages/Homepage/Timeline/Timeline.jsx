import { useTimeline } from "../../../Components/shared/Timelinecontext";
import { IoIosCall } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";
import { IoMdVideocam } from "react-icons/io";
import { useState } from "react";
const Timeline = () => {
     const { entries } = useTimeline();
      const [filter, setFilter] = useState("All");
       const getIcon = (type) => {
    if (type === "Call") return <IoIosCall className="text-xl text-gray-600" />;
    if (type === "Text") return <FaMessage className="text-xl text-gray-600" />;
    if (type === "Video") return <IoMdVideocam className="text-xl text-gray-600" />;
  };
   const filtered = filter === "All" ? entries : entries.filter(e => e.type === filter);
    return (
       <section className="max-w-277.5 mx-auto mt-10 mb-20">
         <h2 className="text-3xl font-bold mb-6">Timeline</h2>
      <select className="w-86.75 rounded-lg px-4 py-2 mb-6 text-sm text-gray-600 bg-white" value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="All">Filter timeline</option>
        <option value="Call">Call</option>
        <option value="Text">Text</option>
        <option value="Video">Video</option>
      </select>

    {filtered.length === 0 && (
        <p className="text-[#64748B]">No interactions yet.</p>
    )}
      <div className="space-y-2">
      {filtered.map((entry, index) => (
          <div key={index} className="bg-white rounded-md px-6 py-4 flex items-center gap-4 shadow-sm">
            <div>{getIcon(entry.type)}</div>
            <div>
              <p className="text-sm text-[#244D3F]"><span className="font-bold">{entry.type}</span> with {entry.name}</p>
              <p className="text-sm text-[#64748B]">{entry.date}</p>
            </div>
          </div>
        ))}
      </div>
       </section>
    );
};

export default Timeline;