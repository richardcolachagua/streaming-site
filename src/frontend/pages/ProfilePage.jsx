import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import locations from "../../backend/Locations";
// Avatar
// Add an input element to the ProfilePage component to allow the user to select an image file.
// The sx prop is used to set the width and height of the Avatar component.
// The src prop is set to the URL of the selected image file using the URL.createObjectURL() method.

// State City Dropdown
// we import the locations array from locations.js and use the map method to generate the options for the
// Select components. The find method is used to filter the locations array based on the selected
// state and country.

//Language
// The handleLanguageChange function updates the selected language value when the user selects a new option
//from the dropdown menu. The Select element is populated with options for languages, which you can customize
// according to your requirements.

const ProfilePage = () => {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [image, setImage] = useState("");
  const [language, setLanguage] = useState("");

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
  }
  const languages = [
    "Mandarin Chinese",
    "Spanish",
    "English",
    "Hindi",
    "Arabic",
    "Bengali",
    "Portuguese",
    "Russian",
    "Japanese",
    "Punjabi",
    "German",
    "Javanese",
    "Wu Chinese",
    "Malay/Indonesian",
    "Telugu",
    "Vietnamese",
    "Korean",
    "French",
    "Marathi",
    "Tamil",
    "Urdu",
    "Turkish",
    "Italian",
    "Yue Chinese",
    "Thai",
    "Gujarati",
    "Jin Chinese",
    "Southern Min",
    "Persian",
    "Polish",
    "Pashto",
    "Kannada",
    "Xiang Chinese",
    "Malayalam",
    "Sundanese",
    "Hausa",
    "Odia",
    "Burmese",
    "Hakka Chinese",
    "Ukrainian",
    "Bhojpuri",
    "Tagalog",
    "Yoruba",
    "Maithili",
    "Uzbek",
    "Sindhi",
    "Amharic",
    "Fula",
    "Romanian",
    "Oromo",
    "Igbo",
  ];

  return (
    <Box>
      <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
        Customize Your Profile
      </Typography>
      <Box>
        <Typography>What type of content are you uploading?</Typography>
        <Box>
          <Typography>Add A Bio</Typography>
          <TextField alt="Bio">Enter Bio Here</TextField>
        </Box>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />

        <Avatar
          alt=""
          sx={{ width: 100, height: 100 }}
          src={image ? URL.createObjectURL(image) : ""}
        ></Avatar>
        <Typography>Add a Photo</Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <FormControl fullWidth>
            <InputLabel id="state-select-label">State</InputLabel>
            <Select
              labelId="state-select-kabek"
              value={state}
              onChange={handleStateChange}
              label="State"
            >
              <MenuItem value="">
                <em>Select State</em>
              </MenuItem>
              {locations.map((country) =>
                country.children.map((state) => (
                  <MenuItem key={state.name} value={state.name}>
                    {state.name}
                  </MenuItem>
                ))
              )}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="city-select-label">City</InputLabel>
            <Select
              labelId="city-select-label"
              value={city}
              onChange={handleCityChange}
              label="City"
            >
              <MenuItem value="">
                <em>Select City</em>
              </MenuItem>
              {locations
                .find((country) =>
                  country.children.find((state) => state.name === state)
                )
                .children.find((state) => state.name === state)
                .children.map((city) => (
                  <MenuItem key={city.name} value={city.name}>
                    {city.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Box>
        <Box>
          <Typography>Add a language</Typography>
          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <InputLabel id="language-select-label"> Language</InputLabel>
            <Select
              labelId="language-select-label"
              value={language}
              onChange={handleLanguageChange}
              label="Language"
            >
              <MenuItem value="">
                <em>Select Language</em>
              </MenuItem>
              {languages.map((language) => (
                <MenuItem key={language} value={language}>
                  {language}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Button color="primary" type="submit" onClick={handleSubmit}>
          Submit Profile
        </Button>
      </Box>
    </Box>
  );
};

export default ProfilePage;
