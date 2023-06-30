import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const MemberSettings = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Box>
      <Typography>Settings</Typography>
      <Box>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <TextField
          label="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ alignSelf: "flex-start", mt: 2 }}
          onClick={handleSubmit}
        >
          Update
        </Button>
      </Box>
    </Box>
  );
};

export default MemberSettings;
