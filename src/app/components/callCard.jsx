import React from 'react';

const CallCard = async() => {
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await response.json();
    console.log(data);

    return (
        /* মোবাইলে ১ কলাম, ট্যাবলেটে ২ কলাম, পিসিতে ৩ কলাম */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-[20px]">
            {
                data.map((info) => {
                    return (
                        <div key={info.id} className='bg-[#15171d] border-0 rounded-[16px] overflow-hidden flex flex-col justify-between'>

                            <div>
                                <img className='w-full object-cover' src={info.image} alt={info.name} />
                            </div>


                            <div className='p-[20px] flex flex-col gap-3'>

                                <div className='flex flex-wrap gap-2'>
                                    {info.muscleGroups?.map((element, i) => {
                                        return (
                                            <div key={i}>
                                                <span className='bg-[#ccff00] text-black text-[10px] font-extrabold uppercase px-[8px] py-[3px] rounded-[10px] inline-block tracking-wider'>
                                                    {element}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>


                                <div>
                                    <h3 className='text-white font-black text-[18px] uppercase tracking-wide leading-tight'>
                                        {info.name}
                                    </h3>
                                    <p className='text-[#9ca3af] text-[12px] mt-[2px] capitalize'>
                                        {info.equipment}
                                    </p>
                                </div>


                                <div className='flex items-center gap-[12px] text-[#9ca3af] text-[12px] font-medium mt-[2px]'>
                                    <div className='flex items-center gap-1'>
                                        <span>🕒</span>
                                        <span>{info.duration} min</span>
                                    </div>
                                    <span>•</span>
                                    <div className='flex items-center gap-1'>
                                        <span>🔥</span>
                                        <span>{info.caloriesBurned} kcal</span>
                                    </div>
                                    <span>•</span>
                                    <div className='flex items-center gap-1'>
                                        <span>⭐</span>
                                        <span>{info.rating}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default CallCard;