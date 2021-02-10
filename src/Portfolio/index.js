import React, { useEffect } from "react";
import {
  Container,
  Content,
  Header,
  Link,
  Logo,
  ProjectsContainer,
  ProjectTile,
  SubHeader,
  Title,
} from "./styled";
import { initiateFetchAPI, selectRepositories } from '../PortfolioSlice';
import portfolioLogo from "./portfolioLogo.svg";
import { useDispatch, useSelector } from "react-redux";

function Portfolio() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initiateFetchAPI());
  },
    [dispatch]);

    const repositories = useSelector(selectRepositories);
    console.log(repositories);

  return (
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
    </Container>
  );
}

export default Portfolio;
