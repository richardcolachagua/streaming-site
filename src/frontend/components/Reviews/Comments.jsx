import React from 'react'
import { TextField, Button, Box } from "@mui/material"


const Comments = () => {
    return (
        <Box>
            <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                defaultValue="Default Value" />
            <Button variant='contained'>
                Submit
            </Button>
        </Box>
    )
}

export default Comments