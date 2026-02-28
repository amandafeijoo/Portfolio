import React from "react";
import {
  TrustWrap,
  TrustTitle,
  TrustGrid,
  TrustCard,
  TrustKicker,
  TrustText,
} from "./Contact.styles";

export default function ContactTrust() {
  return (
    <TrustWrap>
      <TrustTitle>What you can expect</TrustTitle>

      <TrustGrid>
        <TrustCard>
          <TrustKicker>Clarity</TrustKicker>
          <TrustText>
            We start with a clear direction. You’ll always know what we’re
            building and why.
          </TrustText>
        </TrustCard>

        <TrustCard>
          <TrustKicker>Thoughtful work</TrustKicker>
          <TrustText>
            I care about how things look and how they work. Design and
            development go hand in hand.
          </TrustText>
        </TrustCard>

        <TrustCard>
          <TrustKicker>Performance</TrustKicker>
          <TrustText>
            Your website should feel fast and smooth — especially on mobile.
          </TrustText>
        </TrustCard>

        <TrustCard>
          <TrustKicker>Communication</TrustKicker>
          <TrustText>
            I keep things transparent. You’ll always know the next step.
          </TrustText>
        </TrustCard>
      </TrustGrid>
    </TrustWrap>
  );
}
