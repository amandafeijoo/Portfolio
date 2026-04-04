import { Box, Typography } from "@mui/material";
import { palette } from "./ResponsivePreview.constants";
import { images } from "./ResponsivePreview.images";

/* =========================
   MINI TOP BAR
========================= */
function MiniTopBar({ mobile = false }) {
  return (
    <Box
      sx={{
        height: mobile ? 18 : 20,
        px: mobile ? 0.8 : 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: `2px solid ${palette.topBarBorder}`,
        background: palette.topBarBg,
      }}
    >
      <Box sx={{ display: "flex", gap: 0.45 }}>
        {[0, 1, 2].map((dot) => (
          <Box
            key={dot}
            sx={{
              width: 4,
              height: 4,
              borderRadius: "50%",
              background: dot === 0 ? palette.dotActive : palette.dotIdle,
            }}
          />
        ))}
      </Box>

      <Box sx={{ display: "flex", gap: 0.45 }}>
        {["Home", "Work", "Contact"].map((item) => (
          <Typography
            key={item}
            sx={{
              fontSize: mobile ? "0.26rem" : "0.30rem",
              color: palette.navItem,
              fontWeight: 600,
            }}
          >
            {item}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

/* =========================
   MINI HERO
========================= */
function MiniHero({ mobile = false }) {
  return (
    <Box
      sx={{
        borderRadius: "10px",
        background: palette.heroBg,
        border: `2px solid ${palette.heroBorder}`,
        p: mobile ? 0.7 : 0.8,
        mb: mobile ? 0.7 : 0.8,
        display: "flex",
        flexDirection: mobile ? "column" : "row",
        justifyContent: "space-between",
        gap: mobile ? 0.7 : 0.8,
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography
          sx={{
            fontSize: mobile ? "0.40rem" : "0.48rem",
            fontWeight: 700,
            color: palette.heroTitle,
            lineHeight: 1.2,
          }}
        >
          Modern websites
        </Typography>

        <Typography
          sx={{
            fontSize: mobile ? "0.30rem" : "0.34rem",
            color: palette.heroText,
            mt: 0.35,
            lineHeight: 1.35,
          }}
        >
          Design, development and smooth user experience.
        </Typography>

        <Box
          sx={{
            mt: 0.7,
            px: 0.8,
            py: 0.28,
            borderRadius: "999px",
            background: palette.buttonBg,
            color: palette.buttonText,
            fontSize: mobile ? "0.28rem" : "0.32rem",
            fontWeight: 700,
            width: "fit-content",
          }}
        >
          Get started
        </Box>
      </Box>

      <Box
        sx={{
          width: mobile ? "100%" : 42,
          minWidth: mobile ? "100%" : 42,
          height: mobile ? 32 : 42,
          borderRadius: "10px",
          overflow: "hidden",
          border: `2px solid ${palette.heroMediaBorder}`,
          background: palette.heroMedia,
        }}
      >
        <Box
          component="img"
          src={images.hero}
          alt="Website preview"
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

/* =========================
   MINI CONTENT CARD
========================= */
function MiniContentCard({ title, text, image, tone = "a" }) {
  return (
    <Box
      sx={{
        borderRadius: "8px",
        overflow: "hidden",
        background: tone === "a" ? palette.contentCardA : palette.contentCardB,
        border: `2px solid ${palette.contentBorder}`,
      }}
    >
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: "100%",
          height: 26,
          objectFit: "cover",
          display: "block",
          borderBottom: `2px solid ${palette.contentBorder}`,
        }}
      />

      <Box sx={{ p: 0.45 }}>
        <Typography
          sx={{
            fontSize: "0.30rem",
            fontWeight: 700,
            color: palette.heroTitle,
            lineHeight: 1.2,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontSize: "0.25rem",
            color: palette.heroText,
            mt: 0.2,
            lineHeight: 1.3,
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
}

/* =========================
   DESKTOP
========================= */
export function DesktopMiniSite() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: "14px",
        overflow: "hidden",
        background: palette.deviceBg,
        border: `3px solid ${palette.deviceBorder}`,
        boxShadow: `0 18px 44px ${palette.shadow}`,
      }}
    >
      <MiniTopBar />

      <Box sx={{ display: "flex", height: "calc(100% - 20px)" }}>
        <Box
          sx={{
            width: "24%",
            background: palette.navBg,
            borderRight: `2px solid ${palette.deviceBorder}`,
            p: 0.8,
            display: "flex",
            flexDirection: "column",
            gap: 0.55,
          }}
        >
          {["Services", "Projects", "About", "Contact"].map((item, i) => (
            <Box
              key={item}
              sx={{
                px: 0.5,
                py: 0.25,
                borderRadius: "999px",
                background: i === 0 ? palette.dotActive : palette.navItemSoft,
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.28rem",
                  color: i === 0 ? "#4d3720" : palette.navItem,
                  fontWeight: 700,
                }}
              >
                {item}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ flex: 1, p: 1 }}>
          <MiniHero />

          <Box
            sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0.7 }}
          >
            <MiniContentCard
              title="Booking flow"
              text="Easy appointments and clear steps."
              image={images.gallery1}
              tone="a"
            />
            <MiniContentCard
              title="Payments"
              text="Secure checkout and confirmation."
              image={images.gallery2}
              tone="b"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

/* =========================
   TABLET
========================= */
export function TabletMiniSite() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: "18px",
        overflow: "hidden",
        background: palette.deviceBg,
        border: `3px solid ${palette.deviceBorder}`,
        boxShadow: `0 14px 34px ${palette.shadow}`,
      }}
    >
      <MiniTopBar />

      <Box sx={{ p: 1 }}>
        <MiniHero />

        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0.7 }}>
          <MiniContentCard
            title="Custom design"
            text="A layout built around your brand."
            image={images.gallery3}
            tone="a"
          />
          <MiniContentCard
            title="Fast experience"
            text="Clear structure on every screen."
            image={images.gallery4}
            tone="b"
          />
        </Box>
      </Box>
    </Box>
  );
}

/* =========================
   MOBILE
========================= */
export function MobileMiniSite() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: "16px",
        overflow: "hidden",
        background: palette.deviceBg,
        border: `3px solid ${palette.deviceBorder}`,
        boxShadow: `0 14px 34px ${palette.shadow}`,
      }}
    >
      <MiniTopBar mobile />

      <Box sx={{ p: 0.8 }}>
        <MiniHero mobile />

        <MiniContentCard
          title="Responsive layout"
          text="Looks clear and balanced on mobile."
          image={images.gallery1}
          tone="a"
        />

        <Box sx={{ mt: 0.6 }}>
          <MiniContentCard
            title="Quick action"
            text="Simple navigation and strong CTA."
            image={images.gallery2}
            tone="b"
          />
        </Box>
      </Box>
    </Box>
  );
}
