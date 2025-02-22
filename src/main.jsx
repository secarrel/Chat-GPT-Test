import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import theme from "../theme";

import { BrowserRouter } from "react-router-dom";

import { CurrentUserProvider } from "./contexts/CurrentUserContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <CurrentUserProvider>
          <App />
        </CurrentUserProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
