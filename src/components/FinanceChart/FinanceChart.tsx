import { formatCurrency } from "../../utils/formatCurrency";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { ChartContainer, ChartHeader, ChartContent } from "./styles";

type FinanceChartProps = {
  totalIncome: number;
  totalExpenses: number;
};

function FinanceChart({ totalIncome, totalExpenses }: FinanceChartProps) {
  const data = [
    {
      name: "Receitas",
      valor: totalIncome,
      color: "#16a34a",
    },
    {
      name: "Despesas",
      valor: totalExpenses,
      color: "#dc2626",
    },
  ];

  return (
    <ChartContainer>
      <ChartHeader>
        <div>
          <h2>Resumo financeiro</h2>
          <p>Comparativo entre receitas e despesas.</p>
        </div>
      </ChartHeader>

      <ChartContent>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />

            <XAxis dataKey="name" axisLine={false} tickLine={false} />

            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) =>
                `R$ ${Number(value).toLocaleString("pt-BR")}`
              }
            />

            <Tooltip formatter={(value) => formatCurrency(Number(value))} />

            <Bar dataKey="valor" radius={[8, 8, 0, 0]}>
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartContent>
    </ChartContainer>
  );
}

export default FinanceChart;
