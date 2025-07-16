import React from "react";
import { TextField } from "@mui/material";

const inputStyles = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#e6d6e6",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#a3bffa",
    },
    "& input": {
      color: "#e6d6e6",
      fontFamily: "'Source Code Pro', monospace",
    },
    "& textarea": {
      color: "#e6d6e6",
      fontFamily: "'Source Code Pro', monospace",
    },
    "&:hover fieldset": {
      borderColor: "#ffc0cb",
    },
    "&:hover input, &:hover textarea": {
      color: "#ffc0cb",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#e6d6e6",
    fontFamily: "'Source Code Pro', monospace",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#a3bffa",
  },
};

const ContactInputs = ({ formData, handleChange }) => (
  <>
    <TextField
      label="Name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      variant="outlined"
      fullWidth
      sx={inputStyles}
    />
    <TextField
      label="Email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      variant="outlined"
      fullWidth
      sx={inputStyles}
    />
    <TextField
      label="Message"
      name="message"
      value={formData.message}
      onChange={handleChange}
      multiline
      rows={4}
      variant="outlined"
      fullWidth
      sx={inputStyles}
    />
  </>
);

export default ContactInputs;

