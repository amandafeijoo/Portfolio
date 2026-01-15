import ProcessStones from "./ProcessStones";
import ProcessCards from "./ProcessCards";

export default function ProcessSection() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "clamp(900px, 120vh, 1200px)",
        background: "#000",
        overflow: "hidden",
        width: "100%",
        marginTop: "clamp(-150px, -10vw, -80px)",
      }}
    >
      <ProcessStones imageUrl="https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767569759/piedra___ynxdvx.png" />

      {/* CONTENIDO */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          pointerEvents: "none",
          maxWidth: "1200px",
          margin: "0 auto",
          paddingTop: "clamp(220px, 35vw, 390px)",
          paddingBottom: "clamp(80px, 18vw, 120px)",
          textAlign: "center",
          paddingInline: "16px",
        }}
      >
        {/* LABEL */}
        <span
          style={{
            color: "rgba(240, 201, 123, 0.95)",
            letterSpacing: "2px",
            fontSize: "clamp(0.75rem, 2.5vw, 0.9rem)",
            fontWeight: "600",
            display: "block",
          }}
        >
          PROCESS
        </span>

        {/* TITLE */}
        <h2
          style={{
            color: "rgba(237, 231, 217, 0.95)",
            fontSize: "clamp(2rem, 6vw, 3rem)",
            marginTop: "14px",
            marginBottom: "clamp(48px, 10vw, 80px)",
          }}
        >
          How I work
        </h2>

        {/* CARDS */}
        <div style={{ pointerEvents: "auto" }}>
          <ProcessCards />
        </div>
      </div>
    </section>
  );
}
