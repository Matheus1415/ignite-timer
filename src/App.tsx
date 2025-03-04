import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { CyclesContextProvaider } from "./context/cyclesContext";

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
        <CyclesContextProvaider>
          <Router/> 
        </CyclesContextProvaider>
        </BrowserRouter>
        <GlobalStyle/>
      </ThemeProvider>
    </>
  );
}
