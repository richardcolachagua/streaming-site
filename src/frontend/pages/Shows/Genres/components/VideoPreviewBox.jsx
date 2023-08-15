import React from "react";
import { Box } from "@mui/material";

const VideoPreviewBox = ({ videoSrc }) => {
  const handleMouseEnter = (event) => {
    const video = event.current.target.querySelector("video");
    video.play();
  };
  const handleMouseLeave = (event) => {
    const video = event.current.target.querySelector("video");
    video.pause();
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: "pointer" }}
    >
      <Box
        sx={{
          width: 700,
          height: 150,
          backgroundColor: "#FF1F33",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <video
          src={videoSrc}
          preload="metadata"
          muted
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
    </div>
  );
};

export default VideoPreviewBox;
