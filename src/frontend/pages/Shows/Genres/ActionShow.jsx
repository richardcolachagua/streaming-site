import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import Footer from "../../../components/Footer";
import VideoPreviewBox from "./components/VideoPreviewBox";

const ActionShow = () => {
  const videoSrc1 = "video1.mp4";
  const videoSrc2 = "video1.mp4";
  const videoSrc3 = "video1.mp4";

  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "left" }}>
        Trending Shows
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        marginBottom="48px"
      >
        <VideoPreviewBox videoSrc={videoSrc1} />
        <VideoPreviewBox videoSrc={videoSrc2} />
        <VideoPreviewBox videoSrc={videoSrc3} />
      </Stack>
      <Footer />
    </Box>
  );
};

export default ActionShow;
