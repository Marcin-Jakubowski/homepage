import AboutAuthor from "./AboutAuthor/index";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Container from "./common/Container/index";
import { theme } from "./theme";
import Section from "./common/Section";

function App() {
  const bodyTest = [1, 2, 3];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <AboutAuthor />
        <Section header={"My skillset includes"} body={bodyTest} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
