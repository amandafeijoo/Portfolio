import { Box } from "@mui/material";

export default function WorkProgress({ count, active, onChange }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1.5,
        justifyContent: "center",
        mt: 3,
      }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <Box
          key={i}
          onClick={() => onChange(i)}
          sx={{
            width: i === active ? 28 : 10,
            height: 4,
            borderRadius: 999,
            cursor: "pointer",
            transition: "all 0.4s ease",
            backgroundColor:
              i === active ? "rgba(200,164,106,0.9)" : "rgba(200,164,106,0.35)",
          }}
        />
      ))}
    </Box>
  );
}
