import React from "react";
import { Container, Header, Logo, SubHeader } from "./styled";
import portfolioLogo from "./portfolioLogo.svg";

const Portfolio = () => (
<Container>
    <Logo src={portfolioLogo} alt="Portfolio Logo" />
    <Header>portfolio</Header>
    <SubHeader>My recent projects</SubHeader>
</Container>
);

export default Portfolio;
