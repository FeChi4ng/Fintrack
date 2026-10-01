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
};

function SummaryCards({
  balance,
  totalIncome,
  totalExpenses,
}: SummaryCardsProps) {
  return (
    <CardsContainer>
      <Card>
        <CardHeader>
          <span>Saldo total</span>

          <CardIcon $variant="balance">
            <Wallet size={20} />
          </CardIcon>
        </CardHeader>

        <CardValue>{formatCurrency(balance)}</CardValue>
        <small>Saldo disponível</small>
      </Card>

      <Card>
        <CardHeader>
          <span>Receitas</span>

          <CardIcon $variant="income">
            <TrendingUp size={20} />
          </CardIcon>
        </CardHeader>

        <CardValue>{formatCurrency(totalIncome)}</CardValue>
        <small>Este mês</small>
      </Card>

      <Card>
        <CardHeader>
          <span>Despesas</span>

          <CardIcon $variant="expense">
            <TrendingDown size={20} />
          </CardIcon>
        </CardHeader>

        <CardValue>{formatCurrency(totalExpenses)}</CardValue>
        <small>Este mês</small>
      </Card>
    </CardsContainer>
  );
}

export default SummaryCards;
