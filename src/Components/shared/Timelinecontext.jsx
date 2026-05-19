import { createContext,useContext,useState } from "react";
export const TimelineContext=createContext();

export const TimelineProvider=({children})=>{
    const [entries,setEntries]=useState([]);
    const addEntry=(type,friendname)=>{
        const newEntry={
             type: type,
             name: friendname,
             date: new Date().toLocaleDateString("en-US", {
             year: "numeric",
             month: "long",
             day: "numeric",
      }),
        }
        setEntries([newEntry, ...entries]);
    }
    return (
    <TimelineContext.Provider value={{ entries, addEntry }}>
      {children}
    </TimelineContext.Provider>
  );
}
 export const useTimeline = () => useContext(TimelineContext);