import React from "react";
import ReactDOM from "react-dom";

import HeaderContainer from "./MainContainer";
import { HashRouter, Routes, Route } from 'react-router-dom';
import routes from "./routes";
import { Container, createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";

function App(){
  const [dark, setDark] = React.useState(false)
  const theme = createMuiTheme({
    palette: {
      type: dark ? 'dark' : 'light',
    },
  });
  return <ThemeProvider theme={theme}>
    <CssBaseline />
    <HashRouter>
    <HeaderContainer>
      <Container fluid>
          <br />
          <br />
          <br />
          <br />
          
          <Routes>
              { routes.map((route) => {
                  return  <Route {...route}/>
              }) }
          </Routes>
      </Container>
    </HeaderContainer>
    </HashRouter>
  </ThemeProvider>
}

ReactDOM.render(<App />, document.getElementById("root"));