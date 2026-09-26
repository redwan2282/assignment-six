import Image from "next/image";
import workoutImage from "@/app/assets/banner.png"
import CallCard from "./components/callCard";

export default function Home() {
  return (
    <div>

      <div className="bg-[#15171d] flex gap-6 mx-[20px] my-[40px] px-[40px] py-[30px] justify-around items-center border-0 rounded-[20px]">
          <div>
            <p className="text-[#c2f800] text-[10px] mb-[10px]">WORKOUT LIBRARY</p>
            <p className="text-[44px] font-bold mb-[10px] mt-[10px]">TRAIN WITH INTENT. LOG<br/>EVERY SET.</p>
            <p className="text-[#9ca3af] text-[14px] mb-[10px]">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it<br/>into today{"'"}s plan, and watch the week{"'"}s work add up.</p>
            <div className="mt-[10px]">
              <button className="bg-[#c2f800] text-[#000000] text-[12px] px-[15px] py-[7px] border rounded-[5px]">BROWSE WORKOUTS</button>
            </div>
          </div>
          <div>
            <Image src={workoutImage} alt="workout logo"/>
          </div>
      </div>

      <div className="mx-[20px] my-[40px]">
        <h2 className="text-[20px] font-bold">THE LIBRARY</h2>
        <p className="text-[14px] text-[#9ca3af]">Twelve lifts covering every major muscle group.</p>
        <CallCard/>

      </div>

    </div>
  );
}
