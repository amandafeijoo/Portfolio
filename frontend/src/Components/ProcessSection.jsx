import ProcessStones from "./ProcessStones";
import ProcessCards from "./ProcessCards";

export default function ProcessSection() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "1100px",
        background: "#000",
        overflow: "hidden",
        width: "100%",
        marginTop: "-150px",
      }}
    >
      {/* 🪐 FONDO — piedras flotantes (canvas interactivo) */}
      <ProcessStones
        imageUrl="https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767569759/piedra___ynxdvx.png"
      />

      {/* 📝 CONTENIDO (NO bloquea el mouse) */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          pointerEvents: "none", // ⬅️ CLAVE: deja pasar el mouse al canvas
          maxWidth: "1200px",
          margin: "0 auto",
          paddingTop: "390px",
          paddingBottom: "120px",
          textAlign: "center",
        }}
      >
        {/* LABEL */}
        <span
          style={{
            color: "rgba(201, 169, 106, 0.75)",
            letterSpacing: "2px",
            fontSize: "0.9rem",
            fontWeight: "600",
            display: "block",
          }}
        >
          PROCESS
        </span>

        {/* TITLE */}
        <h2
          style={{
            color: "#fff",
            fontSize: "2.8rem",
            marginTop: "14px",
            marginBottom: "80px",
          }}
        >
          How I work
        </h2>

        {/* 🧩 CARDS (SÍ reciben mouse y clicks) */}
        <div style={{ pointerEvents: "auto" }}>
          <ProcessCards />
        </div>
      </div>
    </section>
  );
}

  
