import React from "react";
import HomepageCard from "../components/HomepageCard";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Box, Typography, Button, Container } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FeatureSection from "../components/CreatorStreamerFeatures";

const LandingPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "#fff",
      }}
    >
      <Box
        sx={{ padding: "32px", display: "flex", justifyContent: "flex-end" }}
      >
        <Link to="/login">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FF1F33",
              marginRight: "16px",
              fontWeight: "bold",
              fontSize: "16px",
              borderRadius: "30px",
              Link: "/login",
            }}
          >
            Login
          </Button>
        </Link>
        <Link to="/signup">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FF1F33",
              marginRight: "16px",
              fontWeight: "bold",
              fontSize: "16px",
              borderRadius: "30px",
            }}
          >
            Sign Up
          </Button>
        </Link>
      </Box>
      <Box sx={{ padding: "32px" }}>
        <Typography fontSize={48} variant="h2" sx={{ fontWeight: "bold" }}>
          The New Age of Streaming
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "16px",
          padding: "5px",
          marginBottom: "3px",
        }}
      >
        <HomepageCard />
        <HomepageCard />
        <HomepageCard />
        <HomepageCard />
        <HomepageCard />
        <HomepageCard />
      </Box>
      <Box sx={{ padding: "32px" }}>
        <Typography fontSize={48} variant="h2" sx={{ fontWeight: "bold" }}>
          ABOUT US
        </Typography>
        <Typography fontSize={20} variant="h2" sx={{ fontWeight: "bold" }}>
          ____ is a site dedicated to streaming with the creative community and
          to the binge watchers. We take a consumer/creator mindset approach to
          give the best streaming expeience possible.
        </Typography>
      </Box>
      <Box sx={{ marginTop: "32px", padding: "32px" }}>
        <Typography fontSize={48} sx={{ fontWeight: "bold" }}>
          Coming Soon
        </Typography>
        <Box
          sx={{ display: "flex", justifyContent: "center", padding: "15px" }}
        >
          <Container
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: 300,
                height: 200,
                backgroundColor: "#FF1F33",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", textAlign: "center" }}
              >
                Movie
              </Typography>
            </Box>
            <Box
              sx={{
                width: 300,
                height: 200,
                backgroundColor: "#FF1F33",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", textAlign: "center" }}
              >
                Movie
              </Typography>
            </Box>
            <Box
              sx={{
                width: 300,
                height: 200,
                backgroundColor: "#FF1F33",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", textAlign: "center" }}
              >
                Movie
              </Typography>
            </Box>
            <Box
              sx={{
                width: 300,
                height: 200,
                backgroundColor: "#FF1F33",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", textAlign: "center" }}
              >
                Movie
              </Typography>
            </Box>
            <Box
              sx={{
                width: 300,
                height: 200,
                backgroundColor: "#FF1F33",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", textAlign: "center" }}
              >
                Movie
              </Typography>
            </Box>
            <Box
              sx={{
                width: 300,
                height: 200,
                backgroundColor: "#FF1F33",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", textAlign: "center" }}
              >
                Movie
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>
      <FeatureSection />
      <Box>
        <Typography fontSize={48} sx={{ fontWeight: "bold" }}>
          Still Have Questions?
        </Typography>
        <Accordion
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            "& .MuiAccordionSummary-root": {
              backgroundColor: "transparent",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              What is the difference between a Creator and a Streamer?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The difference between a Creator and a Streamer is that Creators
              provide the content you are viewing on the wesbite. Streamers do
              not.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Do I have to pay for ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              There is not a fee at this time. Please be aware that we will
              begin to charge for both streamers and creators as the site
              continues to expand.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              Are there any qualifications to upload content like Netflix?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, here are the minimum requirements for uploading content as a
              Creator:
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Can I go from Streamer to Creator?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, you can go from Streamer to Creator. Click here to find out
              how.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Footer />
    </Box>
  );
};

export default LandingPage;
