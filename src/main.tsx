import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@fontsource-variable/plus-jakarta-sans";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Plus Jakarta Sans Variable, sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);