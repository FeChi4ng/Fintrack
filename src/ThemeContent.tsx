import { ThemeProvider } from "styled-components";

import App from "./App";
import { GlobalStyles } from "./styles/GlobalStyles";
import { lightTheme, darkTheme } from "./styles/themes";

import { useAppTheme } from "./contexts/ThemeContext/useAppTheme";
import { TransactionsProvider } from "./contexts/TransactionsContext/TransactionsContext";

export function ThemeContent() {
  const { themeMode } = useAppTheme();

  const activeTheme = themeMode === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={activeTheme}>
      <TransactionsProvider>
        <GlobalStyles />
        <App />
      </TransactionsProvider>
    </ThemeProvider>
  );
}
