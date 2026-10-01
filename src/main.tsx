import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyles } from "./styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";

import { TransactionsProvider } from "./contexts/TransactionsContext/TransactionsContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <TransactionsProvider>
        <GlobalStyles />
        <App />
      </TransactionsProvider>
    </BrowserRouter>
  </StrictMode>
);
