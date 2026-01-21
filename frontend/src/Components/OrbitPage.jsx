// OrbitPage.jsx
import OrbitSection from "./OrbitSection";

export default function OrbitPage() {
  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
        }}
      >
        <OrbitSection />
      </div>
    </main>
  );
}
