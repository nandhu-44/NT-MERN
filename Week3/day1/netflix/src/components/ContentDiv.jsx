import React from "react";

function ContentDiv(props) {
  return (
    <div
      className={`flex ${props?.flexType ?? "flex-row"} h-[360px] w-full items-center justify-${props?.justifyType ?? "between"} px-20 bg-black`}
    >
      <div
        className={`flex flex-col ${props.flexType === "flex-row" ? "left" : "right"} w-1/2`}
      >
        <h3 className="text-3xl font-bold text-white">
          {props?.name ?? "Video"}
        </h3>
        <p className="text-2xl font-semibold text-white">
          {props?.description ?? "Description"}
        </p>
      </div>
      <div className={`${props.flexType === "flex-row" ? "right" : "left"} w-1/2`}>
        {/* TV Images */}
      </div>
      <hr className="h-2 bg-none" />
    </div>
  );
}

export default ContentDiv;
