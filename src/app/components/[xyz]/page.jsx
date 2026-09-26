import React from 'react';
import ActionButtons from '@/app/components/ActionButtons';

const detail = async({params}) => {
    const dumy = await params;
    const id = dumy.xyz;
    
    let abc = null;

    // নতুন API থেকে ডাটা ফেচ করে নির্দিষ্ট আইডি বের করা হচ্ছে
    try {
        const response = await fetch("https://api.api-store.workers.dev/api/fitlog");
        const data = await response.json();
        abc = data.find((x) => x.id.toString() === id.toString());
    } catch (error) {
        console.error("API Fetch Error:", error);
    }

    return (
        <>
            {
                abc ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 my-[20px] mx-auto items-start text-white max-w-6xl">
                        
                        <div className="rounded-[20px] overflow-hidden">
                            <img className="w-full h-auto rounded-[20px] object-cover" src={abc.image} alt={abc.name} />
                        </div>

                        <div className="flex flex-col gap-6">
                            
                            <div>
                                <h1 className="text-white font-black text-[28px] uppercase">
                                    {abc.name}
                                </h1>
                                <p className="text-[#9ca3af] text-[13px] mt-2">
                                    {abc.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {abc.muscleGroups?.map((element, i) => (
                                    <span key={i} className="bg-[#ccff00] text-black text-[11px] font-extrabold uppercase px-[10px] py-[3px] rounded-[10px] inline-block">
                                        {element}
                                    </span>
                                ))}
                            </div>

                            <div className="bg-[#15171d] rounded-[16px] p-4 text-[12px] flex flex-col">
                                <div className="flex justify-between py-2.5">
                                    <span className="text-[#9ca3af] uppercase font-bold">EQUIPMENT</span>
                                    <span className="text-white font-medium capitalize">{abc.equipment}</span>
                                </div>
                                <div className="flex justify-between py-2.5">
                                    <span className="text-[#9ca3af] uppercase font-bold">DIFFICULTY</span>
                                    <span className="text-white font-medium capitalize">{abc.difficulty}</span>
                                </div>
                                <div className="flex justify-between py-2.5">
                                    <span className="text-[#9ca3af] uppercase font-bold">SETS</span>
                                    <span className="text-white font-medium">{abc.sets}</span>
                                </div>
                                <div className="flex justify-between py-2.5">
                                    <span className="text-[#9ca3af] uppercase font-bold">REPS</span>
                                    <span className="text-white font-medium">{abc.reps}</span>
                                </div>
                                <div className="flex justify-between py-2.5">
                                    <span className="text-[#9ca3af] uppercase font-bold">DURATION</span>
                                    <span className="text-white font-medium">{abc.duration} min</span>
                                </div>
                                <div className="flex justify-between py-2.5">
                                    <span className="text-[#9ca3af] uppercase font-bold">CALORIES</span>
                                    <span className="text-white font-medium">{abc.caloriesBurned} kcal</span>
                                </div>
                                <div className="flex justify-between py-2.5">
                                    <span className="text-[#9ca3af] uppercase font-bold">RATING</span>
                                    <span className="text-white font-medium">{abc.rating}</span>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-white font-black text-[14px] uppercase mb-2">
                                    INSTRUCTIONS
                                </h3>
                                <ol className="space-y-1.5 text-[#9ca3af] text-[12px] list-decimal list-inside">
                                    {abc.instructions?.map((step, idx) => (
                                        <li key={idx}>
                                            <span>{step}</span>
                                        </li>
                                    ))}
                                </ol>
                            </div>

                            {/* Client বাটন কম্পোনেন্ট */}
                            <ActionButtons item={abc} />

                        </div>

                    </div>
                ) : (
                    <div className="flex justify-center w-full mt-10">
                         <span className="loading loading-spinner loading-lg text-[#ccff00]"></span>
                    </div>
                )
            }
        </>
    );
};

export default detail;