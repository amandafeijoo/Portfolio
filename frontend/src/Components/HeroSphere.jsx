import SphereScene from "./Sphere3D/SphereScene";
import HeroText from "./HeroText";
import { Box } from "@mui/material";

export default function HeroSphere() {
  return (
    <Box sx={{ position: "relative", width: "100%", height: 820 }}>
      <SphereScene />
      <HeroText />
    </Box>
  );
}



// import SphereCollage from "./SphereCollage";
// import HeroText from "./HeroText";
// import { Box } from "@mui/material";

// export default function HeroSphere() {
//   const imgs = [
//     "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767201787/Hero_1_fiic5l.png",
//     "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767202108/hero_2_hfir1v.png",
//     "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767202494/Hero_03_vvappf.png",
//     "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767202959/Hero_4_tqmkuy.png",
//     "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767203258/Hero_5_agyx4c.png",
//     "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767279970/Hero_6_m4li1l.png",
//   ];

//   return (
//     <Box sx={{ position: "relative", width: "100%", height: 820 }}>
//       {/* 🌍 ESFERA — NUNCA SE RE-RENDERIZA */}
//       <SphereCollage images={imgs} height={820} />

//       {/* ✨ TEXTO — COMPONENTE AISLADO */}
//       <HeroText />
//     </Box>
//   );
// }
