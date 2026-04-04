import React from "react";
import { CardImg } from "./WhatIDo.styles";
import BookingFlowPreview from "./Cards/BookingFlowPreview";
import ResponsivePreview from "./Cards/Responsive/ResponsivePreview";
import FullStackPreview from "./Cards/FullStack/FullStackPreview";

export default function WhatIDoCardMedia({ item, mediaRef = null }) {
  if (item.title === "Bookings & payments") {
    return (
      <CardImg ref={mediaRef}>
        <BookingFlowPreview />
      </CardImg>
    );
  }

  if (item.title === "Responsive experiences") {
    return (
      <CardImg ref={mediaRef}>
        <ResponsivePreview />
      </CardImg>
    );
  }

  if (item.title === "Full-stack systems") {
    return (
      <CardImg ref={mediaRef}>
        <FullStackPreview />
      </CardImg>
    );
  }

  return (
    <CardImg ref={mediaRef}>
      <img src={item.src} alt={item.title} />
    </CardImg>
  );
}
