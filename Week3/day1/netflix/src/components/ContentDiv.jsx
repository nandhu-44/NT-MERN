import React from "react";

function ContentDiv(props) {
  return (
    <>
      <div className="h-[2px] w-screen bg-white"></div>
      <div
        className={`flex ${props?.flexType ?? "flex-row"} h-[500px] w-full items-center justify-${props?.flexType === "flex-row" ? "left": "right"} bg-black px-20`}
      >
        <div
          className={`flex flex-col ${props.flexType === "flex-row" ? "left" : "right"} ${props.flexType === "flex-row" ? "text-left" : "text-right"} w-1/2`}
        >
          <h3 className="text-3xl font-bold text-white">
            {props?.name ?? "Video"}
          </h3>
          <p className="text-2xl font-semibold text-white">
            {props?.description ?? "Description"}
          </p>
        </div>
        <div
          className={`${props.flexType === "flex-row" ? "right" : "left"} flex w-1/2 flex-col items-center justify-center`}
        >
          <div class="relative mx-auto mt-12 h-[172px] max-w-[301px] rounded-xl border-[8px] border-gray-800 bg-gray-800 md:h-[314px] md:max-w-[512px] dark:border-gray-800">
            <div class="h-[140px] overflow-hidden rounded-xl md:h-[350px]">
              <video
                autoPlay
                loop
                muted
                className=" h-[140px] w-full rounded-xl md:h-[300px]"
              >
                <source src={props?.videoSrc ?? ""} type="video/mp4" />
                Your browser does not support the video tag.         
              </video>
            </div>
          </div>
          <div className="flex h-24 w-6 bg-gray-800"></div>
        </div>
      </div>
      <div className="h-[2px] w-screen bg-white"></div>
    </>
  );
}

export default ContentDiv;
