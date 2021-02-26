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
import {
  initiateFetchAPI,
  selectRepositories,
  selectStatus,
} from "../PortfolioSlice";
import portfolioLogo from "./portfolioLogo.svg";
import { useDispatch, useSelector } from "react-redux";

function Portfolio() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initiateFetchAPI());
  }, [dispatch]);

  const repositories = useSelector(selectRepositories);
  const status = useSelector(selectStatus);
  console.log(repositories, status);

  return (
    <Container>
      <Logo src={portfolioLogo} alt="Portfolio Logo" />
      <Header>portfolio</Header>
      <SubHeader>My recent projects</SubHeader>
      <ProjectsContainer>
        {repositories &&
          repositories.map((fragment) => (
            <ProjectTile key={fragment.id}>
              <Title>{fragment.name}</Title>
              <Content>{fragment.description}</Content>
              <Content>
                Demo:{" "}
                <Link>
                  https://marcin-jakubowski.github.io/{fragment.name}/
                </Link>
              </Content>
              <Content>
                Code: <Link>{fragment.html_url}</Link>
              </Content>
            </ProjectTile>
          ))}
      </ProjectsContainer>
    </Container>
  );
}

export default Portfolio;
