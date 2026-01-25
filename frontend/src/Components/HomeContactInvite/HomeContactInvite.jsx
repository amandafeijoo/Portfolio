import { useNavigate } from "react-router-dom";
import {
  InviteWrap,
  InviteContent,
  InviteKicker,
  InviteTitle,
  InviteLine,
  InviteCTA,
} from "./HomeContact.styles";
import ThreeContactBackground from "../Contact/ThreeContactBackground";

export default function HomeContactInvite() {
  const navigate = useNavigate();

  return (
    <InviteWrap>
      <ThreeContactBackground mode="ambient" />

      <InviteContent>
        <InviteKicker>Contact</InviteKicker>
        <InviteTitle>Ready to build something exceptional?</InviteTitle>
        <InviteLine />
        <InviteCTA onClick={() => navigate("/contactpage")}>
          Start a project →
        </InviteCTA>
      </InviteContent>
    </InviteWrap>
  );
}
