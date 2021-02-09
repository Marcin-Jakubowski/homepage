import React from "react";
import {
  Container,
  Content,
  ContentBox,
  Description,
  Header,
  Link,
  Logo,
  Mail,
  ProjectsContainer,
  ProjectTile,
  SmallContent,
  SubHeader,
  Title,
} from "./styled";
import portfolioLogo from "./portfolioLogo.svg";

const Portfolio = () => (
  <Container>
    <Logo src={portfolioLogo} alt="Portfolio Logo" />
    <Header>portfolio</Header>
    <SubHeader>My recent projects</SubHeader>
    <ProjectsContainer>
      <ProjectTile>
        <Title>Project</Title>
        <Content>description content</Content>
        <Content>
          Demo: <Link>link.com</Link>
        </Content>
        <Content>
          Code: <Link>link.com</Link>
        </Content>
      </ProjectTile>
      <ProjectTile></ProjectTile>
      <ProjectTile></ProjectTile>
      <ProjectTile></ProjectTile>
    </ProjectsContainer>
    <ContentBox>
      <SmallContent>let's talk</SmallContent>
      <Mail>marcin.jakubowski137@gmail.com</Mail>
      <Description>description content</Description>
    </ContentBox>
  </Container>
);

export default Portfolio;
