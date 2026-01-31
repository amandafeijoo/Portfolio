import { TextField } from "@mui/material";

const inputSx = {
  fontFamily: "'Inter', sans-serif",

  "& .MuiInputBase-root": {
    color: "rgba(255,255,255,0.9)",
    fontFamily: "'Inter', sans-serif",
  },

  "& .MuiOutlinedInput-root": {
    borderRadius: "14px",
    backgroundColor: "rgba(255,255,255,0.02)",
    fontFamily: "'Inter', sans-serif",


    "& fieldset": {
      borderColor: "rgba(255,255,255,0.25)",


    },

    "&:hover fieldset": {
      borderColor: "rgba(201,169,106,0.7)",
        boxShadow: "0 0 0 1px rgba(201,169,106,0.15)",
    },

    "&.Mui-focused fieldset": {
      borderColor: "rgba(201,169,106,0.9)", 
      boxShadow: "0 0 0 1px rgba(201,169,106,0.25)",
      fontFamily: "'Inter', sans-serif",

    },
  },

  "& .MuiInputLabel-root": {
    color: "rgba(255,255,255,0.55)",
    fontFamily: "'Inter', sans-serif",

  },

  "& .MuiInputLabel-root.Mui-focused": {
    color: "rgba(201,169,106,0.9)",
    fontFamily: "'Inter', sans-serif",
  },

  "& input::placeholder, & textarea::placeholder": {
    color: "rgba(255,255,255,0.35)",
    opacity: 1,
    fontFamily: "'Inter', sans-serif",
  },
};

export default function ContactInputs({ formData, handleChange }) {
  return (
    <>
      <TextField
        fullWidth
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        sx={inputSx}
      />

      <TextField
        fullWidth
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        sx={inputSx}
      />

      <TextField
        fullWidth
        name="message"
        placeholder="Message"
        multiline
        rows={4}
        value={formData.message}
        onChange={handleChange}
        sx={inputSx}
      />
    </>
  );
}
