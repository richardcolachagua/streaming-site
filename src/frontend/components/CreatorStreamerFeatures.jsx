import React, { useState } from "react";
import { Box, Typography, Container, Button } from "@mui/material";

// The FeatureCard component represents an individual Feature card, and it receives the FeatureOption prop to display the Feature name dynamically.
// The FeatureSection component manages the state of the selected Feature option using the useState hook.
// It provides a toggle functionality by changing the selected option between "Creator" and "Streamer" when the buttons are clicked.
// The rendering of Feature cards is conditionally done based on the selected Feature option.
// When "Creator" is selected, the Creator Feature cards are rendered, and when "Streamer" is selected, the Streamer Feature cards are rendered.
// The FeatureSection component is wrapped in a Box container with background color, padding, and typography styles to resemble the styling
//of the "Find Your Perfect Feature" section on the HBO Max website.

const FeatureCard = ({ featureOption }) => {
  return (
    <Box
      sx={{
        width: "300px",
        height: "300px",
        backgroundColor: "#0000D5",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        marginBottom: "16px",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center" }}>
        {featureOption}
      </Typography>
    </Box>
  );
};

const FeatureSection = () => {
  const [selectedOption, setSelectedOption] = useState("Creator");

  const handleToggle = () => {
    setSelectedOption(selectedOption === "Creator" ? "Streamer" : "Creator");
  };

  return (
    <Box sx={{ backgroundColor: "#000000", padding: "32px" }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", marginBottom: "16px" }}
      >
        Check Out Our Features
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}
      >
        <Button
          variant={selectedOption === "Creator" ? "contained" : "outlined"}
          onClick={handleToggle}
          sx={{ marginRight: "16px" }}
        >
          Creator
        </Button>
        <Button
          variant={selectedOption === "Streamer" ? "contained" : "outlined"}
          onClick={handleToggle}
        >
          Streamer
        </Button>
      </Box>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "16px",
          padding: "5px",
          marginBottom: "3px",
        }}
      >
        {selectedOption === "Creator" && (
          <React.Fragment>
            <FeatureCard
              featureOption="There is not a fee at this time. Please be aware that we will
              begin to charge for both streamers and creators as the site
              continues to expand."
            />
          </React.Fragment>
        )}
        {selectedOption === "Streamer" && (
          <React.Fragment>
            <FeatureCard
              featureOption="Tvrsgsgrwgwrglrwhu
              ifghurwihuwiue]
              hfuiheihwaoedmamers and 
              creators as the site
              continues to expand."
            />
          </React.Fragment>
        )}
      </Container>
    </Box>
  );
};

export default FeatureSection;
