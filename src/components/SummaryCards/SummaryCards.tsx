import { Wallet, TrendingUp, TrendingDown } from "lucide-react";
import { formatCurrency } from "../../utils/formatCurrency";

import {
  CardsContainer,
  Card,
  CardHeader,
  CardValue,
  CardIcon,
} from "./styles";

type SummaryCardsProps = {
  balance: number;
  totalIncome: number;
  totalExpenses: number;
  periodLabel?: string;
};

function SummaryCards({
  balance,
  totalIncome,
  totalExpenses,
  periodLabel,
}: SummaryCardsProps) {
  return (
    <CardsContainer>
      <Card>
        <CardHeader>
          <span>{periodLabel ? "Saldo do período" : "Saldo total"}</span>

          <CardIcon $variant="balance">
            <Wallet size={20} />
          </CardIcon>
        </CardHeader>

        <CardValue>{formatCurrency(balance)}</CardValue>

        <small>{periodLabel || "Saldo disponível"}</small>
      </Card>

      <Card>
        <CardHeader>
          <span>Receitas</span>

          <CardIcon $variant="income">
            <TrendingUp size={20} />
          </CardIcon>
        </CardHeader>

        <CardValue>{formatCurrency(totalIncome)}</CardValue>
        <small>{periodLabel || "Este mês"}</small>
      </Card>

      <Card>
        <CardHeader>
          <span>Despesas</span>

          <CardIcon $variant="expense">
            <TrendingDown size={20} />
          </CardIcon>
        </CardHeader>

        <CardValue>{formatCurrency(totalExpenses)}</CardValue>
        <small>{periodLabel || "Este mês"}</small>
      </Card>
    </CardsContainer>
  );
}

export default SummaryCards;
