import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { useTheme } from "styled-components";

import { ChartContainer, ChartHeader, ChartContent } from "./styles";

type MonthlyData = {
  month: string;
  income: number;
  expenses: number;
};

type MonthlyEvolutionChartProps = {
  data: MonthlyData[];
};

function MonthlyEvolutionChart({ data }: MonthlyEvolutionChartProps) {
  const theme = useTheme();
  return (
    <ChartContainer>
      <ChartHeader>
        <h2>Evolução mensal</h2>
        <p>Acompanhe suas receitas e despesas ao longo dos meses.</p>
      </ChartHeader>

      <ChartContent>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke={theme.colors.border} />

            <XAxis
              dataKey="month"
              tick={{
                fontSize: 12,
                fill: theme.colors.textSecondary,
              }}
            />

            <YAxis
              tick={{ fontSize: 12, fill: theme.colors.textSecondary }}
              width={55}
              tickFormatter={(value: number) =>
                `R$ ${value.toLocaleString("pt-BR")}`
              }
            />

            <Tooltip
              contentStyle={{
                backgroundColor: theme.colors.surface,
                border: `1px solid ${theme.colors.border}`,
                borderRadius: "10px",
                color: theme.colors.text,
              }}
              labelStyle={{
                color: theme.colors.text,
                fontWeight: 600,
              }}
              itemStyle={{
                color: theme.colors.text,
              }}
              formatter={(value) =>
                `R$ ${Number(value).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}`
              }
            />

            <Legend
              formatter={(value) => (
                <span style={{ color: theme.colors.textSecondary }}>
                  {value}
                </span>
              )}
            />

            <Line
              type="monotone"
              dataKey="income"
              name="Receitas"
              stroke="#16a34a"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />

            <Line
              type="monotone"
              dataKey="expenses"
              name="Despesas"
              stroke="#dc2626"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContent>
    </ChartContainer>
  );
}

export default MonthlyEvolutionChart;
