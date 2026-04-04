import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";

const MotionBox = motion(Box);

const steps = [
  {
    icon: <CalendarMonthOutlinedIcon sx={{ fontSize: 18 }} />,
    label: "Select date",
    value: "24 Apr",
  },
  {
    icon: <AccessTimeOutlinedIcon sx={{ fontSize: 18 }} />,
    label: "Choose time",
    value: "18:30",
  },
  {
    icon: <CreditCardOutlinedIcon sx={{ fontSize: 18 }} />,
    label: "Payment",
    value: "Stripe",
  },
  {
    icon: <CheckCircleOutlineRoundedIcon sx={{ fontSize: 18 }} />,
    label: "Confirmed",
    value: "Booked",
  },
];

export default function BookingFlowPreview() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        borderRadius: "26px",
        overflow: "hidden",

        opacity: 1,
        filter: "none",
        backdropFilter: "none",

        background: "#cbbda6",
        border: "1px solid rgba(201,176,122,0.25)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
      }}
    >
      {/* TOP BAR */}
      <Box
        sx={{
          px: 4,
          py: 1.2,
          borderBottom: "1px solid rgba(0, 0, 0, 0.28)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "0.7rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#3a2f1f",
          }}
        >
          Booking Flow
        </Typography>

        <Box sx={{ display: "flex", gap: 0.7 }}>
          {[0, 1, 2].map((dot) => (
            <Box
              key={dot}
              sx={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: dot === 0 ? "#d8bb82" : "rgba(0, 0, 0, 0.48)",
              }}
            />
          ))}
        </Box>
      </Box>

      {/* CONTENT */}
      <Box
        sx={{
          px: 2,
          py: 2,
          display: "flex",
          flexDirection: "column",
          gap: 1.2,
        }}
      >
        {steps.map((step, index) => (
          <MotionBox
            key={step.label}
            initial={{ y: 8 }}
            animate={{
              y: [8, 0, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: index * 0.4,
            }}
            sx={{
              minHeight: 58,
              borderRadius: "18px",
              px: 1.5,
              py: 1.2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",

              background: "#f4efe6",
              border: "1px solid rgba(0,0,0,0.06)",
              boxShadow: "0 4px 10px rgba(0,0,0,0.04)",

              opacity: 1,
              filter: "none",
              backdropFilter: "none",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
              <Box
                sx={{
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                  color: "#5a4525",
                  background: "#efe2c5",
                  border: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                {step.icon}
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: "0.78rem",
                    color: "#6b5634",
                  }}
                >
                  {step.label}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "#2a2115",
                  }}
                >
                  {step.value}
                </Typography>
              </Box>
            </Box>

            <MotionBox
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3,
              }}
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: index === 3 ? "#7abf8c" : "#c9a96a",
              }}
            />
          </MotionBox>
        ))}

        {/* BOTTOM */}
        <Box
          sx={{
            mt: 1,
            px: 1.6,
            py: 1.2,
            borderRadius: "16px",
            background: "#b89562",
            border: "1px solid rgba(0,0,0,0.06)",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "0.72rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#e7d8c3",
            }}
          >
            Smart booking journey
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
