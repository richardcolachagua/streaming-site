import React, { useState } from 'react'
import { Box, Typography, Button, Menu, MenuItem } from "@mui/material";

const TvShowBanner = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    }

    const [isMuted, setIsMuted] = useState(true);

    const handleMuteToggle = () => {
        setIsMuted((prev) => !prev)
    };

    return (
        <Box sx={{ position: "absolute" }}>
            <Typography variant='h4' sx={{ fontWeight: "bold" }}>
                TV Shows
            </Typography>
            <Button
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Genres
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Drama</MenuItem>
                <MenuItem onClick={handleClose}>Romance</MenuItem>
                <MenuItem onClick={handleClose}>Comedy</MenuItem>
                <MenuItem onClick={handleClose}>Sci-Fi</MenuItem>
                <MenuItem onClick={handleClose}>Animation</MenuItem>
            </Menu>
            <Button variant="contained"
                color="grey"
                sx={{ borderRadius: 3 }}
                onClick={handleMuteToggle}>
                {isMuted ? 'Unmute' : 'Mute'}
            </Button>
            <Button variant='contained' color='white' sx={{ borderRadius: 3, }}>
                Play
            </Button>
            <Button variant='contained' color='grey' sx={{ borderRadius: 3, }}>
                More Info
            </Button>
            <video
                controls
                autoPlay
                muted={isMuted}
                style={{ width: '100%', height: 'auto' }}
                src="path/to/video-preview.mp4" // Replace with the actual video URL from the backend
            />
        </Box>
    )
}

export default TvShowBanner