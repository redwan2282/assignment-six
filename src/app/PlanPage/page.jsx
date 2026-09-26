"use client";
import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { items } from "@/context/itemProvider";

const PlanPage=()=>{
    const {plan,setPlan,savedPlan,setSavedPlan}=useContext(items);
    const [activeTab,setActiveTab]=useState("today");
    const [sortBy,setSortBy]=useState("duration");


    const currentList = activeTab === "today" ? plan : savedPlan;


    const totalMinutes = currentList.reduce((sum, item) => sum + (Number(item.duration) || 0), 0);
    const totalCalories = currentList.reduce((sum, item) => sum + (Number(item.caloriesBurned) || 0), 0);


    const sortedList = [...currentList].sort((a, b) => {
        if (sortBy === "duration") return b.duration - a.duration;
        if (sortBy === "caloriesBurned") return b.caloriesBurned - a.caloriesBurned;
        if (sortBy === "rating") return b.rating - a.rating;
        return 0;
    });

    const handleRemovePlan = (id) => {
        setPlan(plan.filter((item) => item.id !== id));
    };


    const handleRemoveSaved = (id) => {
        setSavedPlan(savedPlan.filter((item) => item.id !== id));
    };

    return (
        <div className="max-w-6xl mx-auto p-6 text-white my-4">
            

            <div className="mb-6">
                <h1 className="text-2xl font-black uppercase tracking-wide">MY PLAN</h1>
                <p className="text-[#9ca3af] text-xs mt-1">Cap of five lifts for today. Finish them, then load more.</p>
            </div>


            <div className="bg-[#15171d] rounded-[16px] p-6 grid grid-cols-3 gap-4 mb-6 border border-zinc-800/60">
                <div>
                    <span className="text-[#9ca3af] text-xs font-semibold">Exercises</span>
                    <h2 className="text-2xl font-black text-[#ccff00] mt-1">{currentList.length}</h2>
                </div>
                <div>
                    <span className="text-[#9ca3af] text-xs font-semibold">Minutes</span>
                    <h2 className="text-2xl font-black text-white mt-1">{totalMinutes}</h2>
                </div>
                <div>
                    <span className="text-[#9ca3af] text-xs font-semibold">Calories</span>
                    <h2 className="text-2xl font-black text-white mt-1">{totalCalories}</h2>
                </div>
            </div>


            <div className="flex items-center justify-between mb-6">
                <div className="bg-[#15171d] p-1 rounded-xl flex gap-1 border border-zinc-800">
                    <button 
                        onClick={() => setActiveTab("today")}
                        className={`px-4 py-2 text-xs font-bold rounded-lg transition cursor-pointer ${
                            activeTab === "today" ? "bg-[#22252e] text-white" : "text-[#9ca3af] hover:text-white"
                        }`}
                    >
                        Today{"'"}s Plan
                    </button>
                    <button 
                        onClick={() => setActiveTab("saved")}
                        className={`px-4 py-2 text-xs font-bold rounded-lg transition cursor-pointer ${
                            activeTab === "saved" ? "bg-[#22252e] text-white" : "text-[#9ca3af] hover:text-white"
                        }`}
                    >
                        Saved
                    </button>
                </div>

                <div className="text-xs text-[#9ca3af] flex items-center gap-2">
                    <span>Sort By</span>

                    <select 
                        value={sortBy} 
                        onChange={(e) => setSortBy(e.target.value)}
                        className="bg-[#15171d] border border-zinc-800 px-3 py-1.5 rounded-lg text-white font-medium outline-none cursor-pointer focus:border-[#ccff00]"
                    >
                        <option value="duration">Duration</option>
                        <option value="caloriesBurned">Calories</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>
            </div>

            {sortedList.length === 0 ? (
                <div className="border border-dashed border-zinc-800 rounded-[20px] p-16 flex flex-col items-center justify-center text-center">
                    <h3 className="text-base font-black uppercase text-white mb-1">NOTHING HERE YET</h3>
                    <p className="text-[#9ca3af] text-xs mb-6">Browse the library and add a lift to get today moving.</p>
                    <Link href="/" className="bg-[#ccff00] text-black font-extrabold text-xs px-6 py-3 rounded-full hover:bg-[#b5e600] transition">
                        Go to workouts
                    </Link>
                </div>
            ) : (
                <div className="flex flex-col gap-4">

                    {sortedList.map((item) => (
                        <div key={item.id} className="bg-[#15171d] rounded-[16px] p-4 flex items-center justify-between border border-zinc-800/80">
                            
                            <div className="flex items-center gap-4">
                                <img src={item.image} alt={item.name} className="w-20 h-16 rounded-xl object-cover" />
                                <div>
                                    <h4 className="text-sm font-black uppercase text-white">{item.name}</h4>
                                    <p className="text-xs text-[#9ca3af]">{item.equipment}</p>
                                    <div className="flex items-center gap-3 text-[11px] text-[#9ca3af] mt-1">
                                        <span>⏱ {item.duration} min</span>
                                        <span>🔥 {item.caloriesBurned} kcal</span>
                                        <span>★ {item.rating}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Link 
                                    href={`/components/${item.id}`} 
                                    className="bg-[#20232c] text-white text-xs font-bold px-4 py-2.5 rounded-xl border border-zinc-700 hover:bg-[#2a2e3a] transition"
                                >
                                    View Details
                                </Link>


                                {activeTab === "today" && (
                                    <>
                                        <button 
                                            onClick={() => handleRemovePlan(item.id)}
                                            className="bg-[#ccff00] text-black text-xs font-extrabold px-4 py-2.5 rounded-xl hover:bg-[#b5e600] transition cursor-pointer"
                                        >
                                            Mark as Done
                                        </button>
                                        <button 
                                            onClick={() => handleRemovePlan(item.id)}
                                            className="bg-red-500/10 text-red-500 text-xs font-bold px-4 py-2.5 rounded-xl border border-red-500/20 hover:bg-red-500/20 transition cursor-pointer"
                                        >
                                            Remove
                                        </button>
                                    </>
                                )}

                                {activeTab === "saved" && (
                                    <button 
                                        onClick={() => handleRemoveSaved(item.id)}
                                        className="bg-red-500/10 text-red-500 text-xs font-bold px-4 py-2.5 rounded-xl border border-red-500/20 hover:bg-red-500/20 transition cursor-pointer"
                                    >
                                        Remove
                                    </button>
                                )}
                            </div>

                        </div>
                    ))}
                </div>
            )}

        </div>
    );
};

export default PlanPage;