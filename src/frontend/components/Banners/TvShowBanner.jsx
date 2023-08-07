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
            <Button color='white'>
                Play
            </Button>
            <Button color='grey'>
                More Info
            </Button>
        </Box>
    )
}

export default TvShowBanner