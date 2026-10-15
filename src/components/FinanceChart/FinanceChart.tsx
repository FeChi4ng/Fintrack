import { formatCurrency } from "../../utils/formatCurrency";
import { useTheme } from "styled-components";

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

  const theme = useTheme();

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
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke={theme.colors.border}
            />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: theme.colors.textSecondary, fontSize: 12 }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: theme.colors.textSecondary, fontSize: 12 }}
              tickFormatter={(value) =>
                `R$ ${Number(value).toLocaleString("pt-BR")}`
              }
            />

            <Tooltip
              formatter={(value) => formatCurrency(Number(value))}
              contentStyle={{
                backgroundColor: theme.colors.background,
                border: `1px solid ${theme.colors.border}`,
                borderRadius: "10px",
                color: theme.colors.text,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
              }}
              labelStyle={{
                color: theme.colors.text,
                fontWeight: 600,
              }}
              itemStyle={{
                color: theme.colors.text,
                fontSize: "13px",
              }}
              cursor={{ fill: "transparent" }}
            />

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
