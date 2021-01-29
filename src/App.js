import AboutAuthor from "./AboutAuthor/index";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Container from "./common/Container/index";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <GlobalStyle />
      <Container>
        <AboutAuthor />
      </Container>
    </ThemeProvider>
  );
}

export default App;
