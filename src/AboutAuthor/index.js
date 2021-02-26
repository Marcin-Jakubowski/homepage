import React from "react";
import mailIcon from "./mailIcon.svg";
import {
  AuthorName,
  ContentBox,
  ContentContainer,
  Description,
  HireBox,
  MailIcon,
  Photo,
  SmallContent,
  ThemeBox,
} from "./styled";
import { mail } from "../personalInfo";

const AboutAuthor = () => (
  <ContentContainer>
    <Photo />
    <ContentBox>
      <ThemeBox>theme</ThemeBox>
      <SmallContent>this is</SmallContent>
      <AuthorName>marcin jakubowski</AuthorName>
      <Description>
        👨💻 I'm Front-end Developer, who's motivated to start based on my
        passion work!
      </Description>
      <HireBox href={`mailto:${mail}`}>
        <MailIcon src={mailIcon} alt="Mail Icon" />
        hire me
      </HireBox>
    </ContentBox>
  </ContentContainer>
);

export default AboutAuthor;
