import React from "react";
import ContentDiv from "../components/ContentDiv";
import Hero from "../components/Hero";

function Center() {
  return (
    <>
      <Hero />
      <ContentDiv
        name="Video 1"
        description="Description 1"
        flexType="flex-row"
        videoSrc="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
      />
      <div className="h-[10px] w-screen bg-none"></div>
      <ContentDiv
        name="Video 2"
        description="Description 2"
        flexType="flex-row-reverse"
        videoSrc="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
      />
    </>
  );
}

export default Center;
