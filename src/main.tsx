import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { AppThemeProvider } from "./contexts/ThemeContext/ThemeContext";
import { ThemeContent } from "./ThemeContent";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppThemeProvider>
        <ThemeContent />
      </AppThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
