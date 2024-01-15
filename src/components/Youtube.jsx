import React from "react";
import YouTube from "react-youtube";

function Youtube( { link } ) {
const videoId = link;

  const opts = {
    width: "340rem",
    height: "193rem",
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} onReady={onReady} />
    </div>
  );
}

export default Youtube;
