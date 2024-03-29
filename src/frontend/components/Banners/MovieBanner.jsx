import React, { useState } from "react";
import { Box, Typography, Button, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

const MovieBanner = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [isMuted, setIsMuted] = useState(true);

    const handleMuteToggle = () => {
        setIsMuted((prev) => !prev);
    };

    return (
        <Box sx={{ position: "absolute" }}>
            <Typography>Movies</Typography>
            <Button
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
            >
                Genres
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <Link to="/movies-drama">
                    <MenuItem onClick={handleClose}>Drama</MenuItem>
                </Link>

                <Link to="/movies-romance">
                    <MenuItem onClick={handleClose}>Romance</MenuItem>
                </Link>
                <Link to="/movies-comedy">
                    <MenuItem onClick={handleClose}>Comedy</MenuItem>
                </Link>
                <Link to="/movies-ci-fi">
                    <MenuItem onClick={handleClose}>Sci-Fi</MenuItem>
                </Link>

                <Link to="/movies-animation">
                    <MenuItem onClick={handleClose}>Animation</MenuItem>
                </Link>
                <Link to="movies-action">
                    <MenuItem onClick={handleClose}>Action</MenuItem>
                </Link>
            </Menu>
            <Button
                variant="contained"
                color="grey"
                sx={{ borderRadius: 3 }}
                onClick={handleMuteToggle}
            >
                {isMuted ? "Unmute" : "Mute"}
            </Button>
            <Button variant="contained" color="white" sx={{ borderRadius: 3 }}>
                Play
            </Button>
            <Button variant="contained" color="white" sx={{ borderRadius: 3 }}>
                More Info
            </Button>
            <video
                controls
                autoPlay
                muted={isMuted}
                style={{ width: "100%", height: "auto" }}
                src="path/to/video-preview.mp4" // Replace with the actual video URL from the backend
            />
        </Box>
    );
};

export default MovieBanner;
