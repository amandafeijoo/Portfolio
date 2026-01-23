import OrbitSection from "./OrbitSection";

export default function OrbitPage() {
  return (
    <main
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginBottom: 0,
        paddingBottom: 0,
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
