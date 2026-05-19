import { Pie, PieChart ,Cell, Legend } from 'recharts';
import { useTimeline } from "../../../Components/shared/Timelinecontext";

const FriendsAnalyticspage = () => {
      const { entries } = useTimeline();

      const callCount = entries.filter(e => e.type === "Call").length;
      const textCount = entries.filter(e => e.type === "Text").length;
      const videoCount = entries.filter(e => e.type === "Video").length;

       const data = [
      {name:"Text",value:textCount||1,fill:"#7C3AED" },
      { name: "Call", value: callCount||1,fill: "#244D3F" },
      { name: "Video", value: videoCount| 1, fill: "#4ADE80" },
     ];
    return (
      <section className="max-w-277.5 mx-auto mt-10 mb-20">
      <h2 className="text-4xl font-bold mb-6">Friendship Analytics</h2>
      <div className="bg-white shadow-md rounded-md p-6">
        <p className="text-lg text-[#244D3F] mb-4 font-bold">By Interaction Type</p>
        <div className="flex justify-center">
          <PieChart width={300} height={300}>
          <Pie data={data}innerRadius={80}outerRadius={120}paddingAngle={5}dataKey="value">
              {data.map((entry, index)=>(<Cell key={index} fill={entry.fill} />))}
            </Pie>
            <Legend />
          </PieChart>
        </div>
      </div>
    </section>
    );
};

export default FriendsAnalyticspage;