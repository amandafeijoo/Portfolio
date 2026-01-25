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
            A clean plan, priorities, and structure — no chaos, no vague steps.
          </TrustText>
        </TrustCard>

        <TrustCard>
          <TrustKicker>Craft</TrustKicker>
          <TrustText>
            Design + code aligned. Premium UI, micro-interactions and strong UX.
          </TrustText>
        </TrustCard>

        <TrustCard>
          <TrustKicker>Performance</TrustKicker>
          <TrustText>
            Fast loading, optimized media, and careful choices (especially on
            mobile).
          </TrustText>
        </TrustCard>

        <TrustCard>
          <TrustKicker>Delivery</TrustKicker>
          <TrustText>
            Real deadlines, real progress. You’ll always know what’s next.
          </TrustText>
        </TrustCard>
      </TrustGrid>
    </TrustWrap>
  );
}
