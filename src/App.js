import AboutAuthor from "./AboutAuthor/index";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Container from "./common/Container/index";
import { theme } from "./theme";
import Section from "./common/Section";
import { currentSkillset, futureSkillset } from "./skillsetData";
import Portfolio from "./Portfolio";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <AboutAuthor />
        <Section header={"My skillset includes"} body={currentSkillset} />
        <Section header={"What I want to learn next"} body={futureSkillset} />
        <Portfolio />
      </Container>
    </ThemeProvider>
  );
}

export default App;
