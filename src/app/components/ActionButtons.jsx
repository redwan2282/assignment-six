"use client";
import React, { useContext } from 'react';
import { items } from "@/context/itemProvider";

const ActionButtons=({item})=>{
    const {plan,setPlan,savedPlan,setSavedPlan}=useContext(items);
    const addToPlan=()=>{
        if (plan.some((x)=>x.id===item.id)){
            alert("Already added to today's plan!");
            return;
        }
        setPlan([...plan,item]);
        alert("Added to today's plan!");
    };
    const saveForLater=()=>{
        if(savedPlan.some((x)=>x.id===item.id)){
            alert("Already in saved lifts!");
            return;
        }
        setSavedPlan([...savedPlan, item]);
    };

    return (
        <div className="flex items-center gap-3 pt-2">
            <button 
                onClick={addToPlan}
                className="bg-[#ccff00] hover:bg-[#b5e600] text-black font-extrabold text-[12px] py-3 px-5 rounded-[12px] flex items-center gap-2 cursor-pointer transition"
            >
                <span>Add to today{"'"}s plan</span>
            </button>
            <button 
                onClick={saveForLater}
                className="bg-[#15171d] hover:bg-[#20232c] text-white font-bold text-[12px] py-3 px-5 rounded-[12px] flex items-center gap-2 border border-zinc-800 cursor-pointer transition"
            >
                <span>Save for later</span>
            </button>
        </div>
    );
};

export default ActionButtons;