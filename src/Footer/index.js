import React from "react";
import {
  Container,
  Content,
  Logo,
  LogoLink,
  LogosBox,
  Mail,
  SmallContent,
} from "./styled";
import facebookLogo from "./facebookLogo.svg";
import githubLogo from "./githubLogo.svg";
// import linkedinLogo from "./linkedinLogo.svg";
import { mail } from "../personalInfo";

const Footer = () => (
  <Container>
    <SmallContent>let's talk!</SmallContent>
    <Mail href={`mailto:${mail}`}>{mail}</Mail>
    <Content>
      I’m always open to new projects whenever I have the time. If you need some
      help to make your ideas come to life or want to start new project, feel
      free to conatct me 🖐
    </Content>
    <LogosBox>
      <LogoLink href="https://github.com/Marcin-Jakubowski">
        <Logo src={githubLogo} alt="GitHub Logo" />
      </LogoLink>
      <LogoLink href="https://www.facebook.com/marcin.jakubowski.52643">
        <Logo src={facebookLogo} alt="Facebook Logo" />
      </LogoLink>
      {/* <LogoLink>
        <Logo src={linkedinLogo} alt="LinkedIn Logo" />
      </LogoLink> */}
    </LogosBox>
  </Container>
);

export default Footer;
