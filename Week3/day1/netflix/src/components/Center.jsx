import React from "react";
import ContentDiv from "./ContentDiv";

function Center() {
  return (
    <>
      <ContentDiv
        name="Video 1"
        description="Description 1"
        flexType="flex-row"
      />
      <hr />
      <ContentDiv
        name="Video 2"
        description="Description 2"
        flexType="flex-row-reverse"
      />
    </>
  );
}

export default Center;
