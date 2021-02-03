import React from "react";
import {
  Container,
  Header,
  Logo,
  ProjectsContainer,
  ProjectTile,
  SubHeader,
} from "./styled";
import portfolioLogo from "./portfolioLogo.svg";

const Portfolio = () => (
  <Container>
    <Logo src={portfolioLogo} alt="Portfolio Logo" />
    <Header>portfolio</Header>
    <SubHeader>My recent projects</SubHeader>
    <ProjectsContainer>
      <ProjectTile></ProjectTile>
      <ProjectTile></ProjectTile>
      <ProjectTile></ProjectTile>
      <ProjectTile></ProjectTile>
    </ProjectsContainer>
  </Container>
);

export default Portfolio;
