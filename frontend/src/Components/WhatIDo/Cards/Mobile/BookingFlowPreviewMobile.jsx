import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";

const MotionBox = motion(Box);

const steps = [
  {
    icon: <CalendarMonthOutlinedIcon sx={{ fontSize: 14 }} />,
    label: "Select date",
    value: "24 Apr",
  },
  {
    icon: <AccessTimeOutlinedIcon sx={{ fontSize: 14 }} />,
    label: "Choose time",
    value: "18:30",
  },
  {
    icon: <CreditCardOutlinedIcon sx={{ fontSize: 14 }} />,
    label: "Payment",
    value: "Stripe",
  },
  {
    icon: <CheckCircleOutlineRoundedIcon sx={{ fontSize: 14 }} />,
    label: "Confirmed",
    value: "Booked",
  },
];

export default function BookingFlowPreviewMobile() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: 220,
        borderRadius: "24px",
        overflow: "hidden",
        opacity: 1,
        filter: "none",
        backdropFilter: "none",
        background: "#cbbda6",
        border: "1px solid rgba(201,176,122,0.25)",
        boxShadow: "0 10px 24px rgba(0,0,0,0.12)",
      }}
    >
      {/* TOP BAR */}
      <Box
        sx={{
          px: 2,
          py: 0.9,
          borderBottom: "1px solid rgba(0, 0, 0, 0.24)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "0.58rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#3a2f1f",
            fontWeight: 700,
          }}
        >
          Booking Flow
        </Typography>

        <Box sx={{ display: "flex", gap: 0.45 }}>
          {[0, 1, 2].map((dot) => (
            <Box
              key={dot}
              sx={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: dot === 0 ? "#d8bb82" : "rgba(0, 0, 0, 0.45)",
              }}
            />
          ))}
        </Box>
      </Box>

      {/* CONTENT */}
      <Box
        sx={{
          px: 1.2,
          py: 1.2,
          display: "flex",
          flexDirection: "column",
          gap: 0.75,
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
              minHeight: 42,
              borderRadius: "14px",
              px: 1,
              py: 0.8,
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
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                  color: "#5a4525",
                  background: "#efe2c5",
                  border: "1px solid rgba(0,0,0,0.05)",
                  flexShrink: 0,
                }}
              >
                {step.icon}
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: "0.58rem",
                    color: "#6b5634",
                    lineHeight: 1.1,
                  }}
                >
                  {step.label}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    color: "#2a2115",
                    lineHeight: 1.15,
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
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: index === 3 ? "#7abf8c" : "#c9a96a",
                flexShrink: 0,
              }}
            />
          </MotionBox>
        ))}
      </Box>
    </Box>
  );
}
