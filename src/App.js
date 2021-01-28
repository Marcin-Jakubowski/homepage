import AboutAuthor from "./AboutAuthor/index";
import { ThemeProvider } from "styled-components";
import Container from "./common/Container/index";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <Container>
        <AboutAuthor />
      </Container>
    </ThemeProvider>
  );
}

export default App;
