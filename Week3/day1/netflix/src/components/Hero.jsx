import React from "react";

function Hero() {
  return (
    <div className="mt-24 flex h-screen flex-col items-center justify-start text-white">
      <h1 className="text-2xl font-thin">Welcome Back to Netflix</h1>
      <h2 className="text-6xl font-bold">
        Unlimited movies, TV shows and more
      </h2>
      {/* TV - SCREEN */}
      <div class="relative mx-auto mt-12 h-[172px] max-w-[301px] rounded-xl border-[8px] border-gray-800 bg-gray-800 md:h-[314px] md:max-w-[512px] dark:border-gray-800">
        <div class="h-[140px] overflow-hidden rounded-xl md:h-[350px]">
          <video
            autoPlay
            loop
            muted
            className=" h-[140px] w-full rounded-xl md:h-[300px]"
          >
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.         
          </video>
        </div>
      </div>
      <div class="mt-8 md:mt-16 relative mx-auto h-[17px] max-w-[351px] rounded-b-xl rounded-t-sm bg-gray-900 md:h-[21px] md:max-w-[597px] dark:bg-gray-700">
        <div class="absolute left-1/2 top-0 h-[5px] w-[56px] -translate-x-1/2 rounded-b-xl bg-gray-800 md:h-[8px] md:w-[96px]"></div>
      </div>
    </div>
  );
}

export default Hero;
