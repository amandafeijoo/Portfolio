import ProcessHero from "./ProcessHero";
import ProcessCards from "./ProcessCards";

export default function ProcessSection() {
  return (
    <section style={{ background: "#000", overflow: "hidden" }}>
      <ProcessHero />
      <ProcessCards />
    </section>
  );
}
