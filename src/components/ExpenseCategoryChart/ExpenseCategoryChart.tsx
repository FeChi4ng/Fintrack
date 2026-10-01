import {
  PieChart,
  Pie,
  Cell,
  Label,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import type { TransactionType } from "../../types/transaction";
import { formatCurrency } from "../../utils/formatCurrency";

import {
  ChartContainer,
  ChartHeader,
  ChartContent,
  Legend,
  LegendItem,
  LegendColor,
} from "./styles";

type ExpenseCategoryChartProps = {
  transactions: TransactionType[];
};

const chartColors = [
  "#2563eb",
  "#16a34a",
  "#f59e0b",
  "#dc2626",
  "#8b5cf6",
  "#06b6d4",
];

function ExpenseCategoryChart({ transactions }: ExpenseCategoryChartProps) {
  const expenses = transactions.filter(
    (transaction) => transaction.type === "expense"
  );

  const totalExpenses = expenses.reduce(
    (total, transaction) => total + transaction.value,
    0
  );

  const categoryTotals = expenses.reduce<Record<string, number>>(
    (totals, transaction) => {
      totals[transaction.category] =
        (totals[transaction.category] || 0) + transaction.value;

      return totals;
    },
    {}
  );

  const data = Object.entries(categoryTotals).map(
    ([category, value], index) => ({
      name: category,
      value,
      color: chartColors[index % chartColors.length],
    })
  );

  return (
    <ChartContainer>
      <ChartHeader>
        <h2>Despesas por categoria</h2>
        <p>Veja onde seu dinheiro está sendo gasto.</p>
      </ChartHeader>

      <ChartContent>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={65}
              outerRadius={95}
              paddingAngle={4}
            >
              <Label
                position="center"
                content={({ viewBox }) => {
                  if (!viewBox || !("cx" in viewBox) || !("cy" in viewBox)) {
                    return null;
                  }

                  const { cx, cy } = viewBox;

                  return (
                    <g>
                      <text
                        x={cx}
                        y={Number(cy) - 6}
                        textAnchor="middle"
                        fill="#9ca3af"
                        fontSize="12"
                      >
                        Total
                      </text>

                      <text
                        x={cx}
                        y={Number(cy) + 14}
                        textAnchor="middle"
                        fill="#111827"
                        fontSize="14"
                        fontWeight="700"
                      >
                        {formatCurrency(totalExpenses)}
                      </text>
                    </g>
                  );
                }}
              />
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>

            <Tooltip formatter={(value) => formatCurrency(Number(value))} />
          </PieChart>
        </ResponsiveContainer>
      </ChartContent>

      <Legend>
        {data.map((item) => (
          <LegendItem key={item.name}>
            <LegendColor $color={item.color} />

            <span>{item.name}</span>

            <strong>{formatCurrency(item.value)}</strong>
          </LegendItem>
        ))}
      </Legend>
    </ChartContainer>
  );
}

export default ExpenseCategoryChart;
