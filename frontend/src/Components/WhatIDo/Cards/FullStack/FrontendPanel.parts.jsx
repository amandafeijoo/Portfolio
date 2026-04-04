import { Box, Typography } from "@mui/material";
import { palette } from "./FullStackPreview.constants";
import { images } from "./FullStackPreview.images";

export function SiteTopBar() {
  return (
    <Box
      sx={{
        height: 18,
        px: 0.8,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: palette.siteNavBg,
        borderBottom: `1px solid ${palette.siteNavBorder}`,
      }}
    >
      <Box
        sx={{
          width: 18,
          height: 4,
          borderRadius: "999px",
          background: palette.siteNavLogo,
        }}
      />

      <Box sx={{ display: "flex", gap: 0.4 }}>
        {["Home", "Work", "Contact"].map((item) => (
          <Typography
            key={item}
            sx={{
              fontSize: "0.26rem",
              color: palette.siteNavItem,
              fontWeight: 700,
            }}
          >
            {item}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

export function FrontHero() {
  return (
    <Box
      sx={{
        borderRadius: "10px",
        background: palette.heroBg,
        border: `1px solid ${palette.heroBorder}`,
        mb: 0.7,
        p: 0.7,
        display: "flex",
        justifyContent: "space-between",
        gap: 0.7,
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography
          sx={{
            fontSize: "0.42rem",
            fontWeight: 700,
            color: palette.heroTitle,
            lineHeight: 1.2,
          }}
        >
          Elegant digital experiences
        </Typography>

        <Typography
          sx={{
            mt: 0.28,
            fontSize: "0.28rem",
            color: palette.heroText,
            lineHeight: 1.3,
          }}
        >
          Design and functionality working together.
        </Typography>

        <Box
          sx={{
            mt: 0.6,
            px: 0.55,
            py: 0.22,
            borderRadius: "999px",
            background: palette.buttonBg,
            color: palette.buttonText,
            fontSize: "0.26rem",
            fontWeight: 700,
            width: "fit-content",
          }}
        >
          Get started
        </Box>
      </Box>

      <Box
        sx={{
          width: 26,
          minWidth: 26,
          height: 26,
          borderRadius: "8px",
          overflow: "hidden",
          border: `1px solid ${palette.heroImageBorder}`,
        }}
      >
        <Box
          component="img"
          src={images.hero}
          alt="Hero preview"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>
    </Box>
  );
}

export function FrontCard({ title, text, image, tone = "a" }) {
  return (
    <Box
      sx={{
        borderRadius: "8px",
        overflow: "hidden",
        background: tone === "a" ? palette.cardA : palette.cardB,
        border: `1px solid ${
          tone === "a" ? palette.cardBorderA : palette.cardBorderB
        }`,
      }}
    >
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: "100%",
          height: 20,
          objectFit: "cover",
          display: "block",
        }}
      />

      <Box sx={{ p: 0.4 }}>
        <Typography
          sx={{
            fontSize: "0.28rem",
            fontWeight: 700,
            color: palette.heroTitle,
            lineHeight: 1.2,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            mt: 0.2,
            fontSize: "0.24rem",
            color: palette.heroText,
            lineHeight: 1.3,
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
}

export function FrontCardGrid() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 0.55,
      }}
    >
      <FrontCard
        title="Booking flow"
        text="Simple journey for your client."
        image={images.card1}
        tone="a"
      />
      <FrontCard
        title="Secure payments"
        text="Clear and trusted checkout."
        image={images.card2}
        tone="b"
      />
    </Box>
  );
}
