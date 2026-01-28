import { Box } from "@mui/material";

export default function WorkMedia({ video }) {
  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: 28,
        overflow: "hidden",
        aspectRatio: "16 / 9",
        backgroundColor: "#000",
      }}
    >
      <Box
        component="video"
        src={video}
        autoPlay
        muted
        loop
        playsInline
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* overlay para legibilidad */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.75))",
        }}
      />
    </Box>
  );
}
