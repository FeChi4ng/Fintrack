import { Palette, Database } from "lucide-react";

import { useAppTheme } from "../../contexts/ThemeContext/useAppTheme";

import { useTransactions } from "../../contexts/TransactionsContext/useTransactions";
import { exportTransactionsToCSV } from "../../utils/exportTransactionsToCSV";

import {
  Container,
  Header,
  SettingsGrid,
  SettingsCard,
  CardHeader,
  SettingItem,
} from "./styles";

function Settings() {
  const { transactions } = useTransactions();

  const { themeMode, toggleTheme } = useAppTheme();

  return (
    <Container>
      <Header>
        <span>Configurações</span>
        <h1>Preferências do FinTrack</h1>
        <p>
          Personalize sua experiência e gerencie as configurações do aplicativo.
        </p>
      </Header>

      <SettingsGrid>
        <SettingsCard>
          <CardHeader>
            <Palette size={22} />

            <div>
              <h2>Aparência</h2>
              <p>Personalize a aparência do aplicativo.</p>
            </div>
          </CardHeader>

          <SettingItem>
            <div>
              <h3>Tema do aplicativo</h3>
              <p>Escolha como deseja visualizar o FinTrack.</p>
            </div>

            <button type="button" onClick={toggleTheme}>
              {themeMode === "light" ? "Claro ☀️" : "Escuro 🌙"}
            </button>
          </SettingItem>
        </SettingsCard>

        <SettingsCard>
          <CardHeader>
            <Database size={22} />

            <div>
              <h2>Dados financeiros</h2>
              <p>Gerencie suas informações financeiras.</p>
            </div>
          </CardHeader>

          <SettingItem>
            <div>
              <h3>Exportação de dados</h3>
              <p>Exporte suas transações para um arquivo CSV.</p>
            </div>

            <button
              type="button"
              onClick={() => exportTransactionsToCSV(transactions)}
              disabled={transactions.length === 0}
            >
              Exportar CSV
            </button>
          </SettingItem>
        </SettingsCard>
      </SettingsGrid>
    </Container>
  );
}

export default Settings;
