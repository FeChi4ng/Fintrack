import { useContext } from "react";

import { ThemeContext } from "./themeContextDefinition";

export function useAppTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useAppTheme deve ser utilizado dentro de AppThemeProvider"
    );
  }

  return context;
}
