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
import linkedinLogo from "./linkedinLogo.svg";

const Footer = () => (
  <Container>
    <SmallContent>let's talk!</SmallContent>
    <Mail>marcin.jakubowski137@gmail.com</Mail>
    <Content>description</Content>
    <LogosBox>
      <LogoLink>
        <Logo src={githubLogo} alt="GitHub Logo" />
      </LogoLink>
      <LogoLink>
        <Logo src={facebookLogo} alt="Facebook Logo" />
      </LogoLink>
      <LogoLink>
        <Logo src={linkedinLogo} alt="LinkedIn Logo" />
      </LogoLink>
    </LogosBox>
  </Container>
);

export default Footer;
