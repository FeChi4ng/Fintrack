import { useState } from "react";
import { useTransactions } from "../../contexts/TransactionsContext/useTransactions";
import {
  Container,
  Header,
  PeriodFilter,
  ChartsGrid,
  ChartsSection,
  ReportsHeader,
} from "./styles";
import SummaryCards from "../../components/SummaryCards/SummaryCards";
import FinanceChart from "../../components/FinanceChart/FinanceChart";
import ExpenseCategoryChart from "../../components/ExpenseCategoryChart/ExpenseCategoryChart";

import MonthlyEvolutionChart from "../../components/MonthlyEvolutionChart/MonthlyEvolutionChart";
import { getMonthlyEvolution } from "../../utils/getMonthlyEvolution";

function getTransactionPeriod(date: string) {
  if (date.includes("/")) {
    const [, month, year] = date.split("/");

    return `${month}/${year}`;
  }

  const [, monthName, year] = date.split(" ");

  const months: Record<string, string> = {
    Jan: "01",
    Fev: "02",
    Mar: "03",
    Abr: "04",
    Mai: "05",
    Jun: "06",
    Jul: "07",
    Ago: "08",
    Set: "09",
    Out: "10",
    Nov: "11",
    Dez: "12",
  };

  const month = months[monthName];

  return month ? `${month}/${year}` : null;
}

export function Reports() {
  const { transactions } = useTransactions();
  const [selectedPeriod, setSelectedPeriod] = useState("all");

  const availableMonths = Array.from(
    new Set(
      transactions
        .map((transaction) => getTransactionPeriod(transaction.date))
        .filter((period): period is string => period !== null)
    )
  );

  const filteredTransactions =
    selectedPeriod === "all"
      ? transactions
      : transactions.filter(
          (transaction) =>
            getTransactionPeriod(transaction.date) === selectedPeriod
        );

  const totalIncome = filteredTransactions
    .filter((transaction) => transaction.type === "income")
    .reduce((total, transaction) => total + transaction.value, 0);

  const totalExpenses = filteredTransactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((total, transaction) => total + transaction.value, 0);

  const balance = totalIncome - totalExpenses;

  const periodLabel =
    selectedPeriod === "all"
      ? "Todos os períodos"
      : `Período: ${selectedPeriod}`;

  const monthlyEvolutionData = getMonthlyEvolution(transactions);

  return (
    <Container>
      <ReportsHeader>
        <Header>
          <span>Relatórios</span>

          <h1>Análise financeira</h1>

          <p>
            Acompanhe a evolução das suas receitas, despesas e gastos por
            categoria.
          </p>
        </Header>

        <PeriodFilter>
          <label htmlFor="period">Período</label>

          <select
            id="period"
            value={selectedPeriod}
            onChange={(event) => setSelectedPeriod(event.target.value)}
          >
            <option value="all">Todos os períodos</option>

            {availableMonths.map((period) => (
              <option key={period} value={period}>
                {period}
              </option>
            ))}
          </select>
        </PeriodFilter>
      </ReportsHeader>

      <SummaryCards
        balance={balance}
        totalIncome={totalIncome}
        totalExpenses={totalExpenses}
        periodLabel={periodLabel}
      />

      <ChartsSection>
        <ChartsGrid>
          <FinanceChart
            totalIncome={totalIncome}
            totalExpenses={totalExpenses}
          />

          <ExpenseCategoryChart transactions={filteredTransactions} />
        </ChartsGrid>
      </ChartsSection>

      <MonthlyEvolutionChart data={monthlyEvolutionData} />
    </Container>
  );
}
