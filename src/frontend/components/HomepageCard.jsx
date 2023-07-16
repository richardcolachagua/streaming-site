import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const HomepageCard = () => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        marginBottom: "20px",
        padding: "20px",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        sx={{ height: 300, width: 200 }}
        image="/public/assets/ironman.png"
        title="ironman"
      />
      <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography>
    </Card>
  );
};

export default HomepageCard;
