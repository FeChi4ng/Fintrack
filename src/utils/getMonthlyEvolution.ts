import type { TransactionType } from "../types/transaction";

export type MonthlyEvolutionData = {
  month: string;
  income: number;
  expenses: number;
};

export function getMonthlyEvolution(
  transactions: TransactionType[]
): MonthlyEvolutionData[] {
  const monthlyTotals = new Map<string, MonthlyEvolutionData>();

  transactions.forEach((transaction) => {
    const rawDate = transaction.date.trim();

    let day: number;
    let month: number;
    let year: number;

    if (rawDate.includes("/")) {
      const parts = rawDate.split("/");

      if (parts.length !== 3) return;
      [day, month, year] = parts.map(Number);
    } else {
      const parts = rawDate.split(/\s+/);

      if (parts.length !== 3) return;

      const monthNames: Record<string, number> = {
        jan: 1,
        fev: 2,
        mar: 3,
        abr: 4,
        mai: 5,
        jun: 6,
        jul: 7,
        ago: 8,
        set: 9,
        out: 10,
        nov: 11,
        dez: 12,
      };

      day = Number(parts[0]);
      month = monthNames[parts[1].toLowerCase().replace(".", "")];
      year = Number(parts[2]);
    }

    if (!month) return;

    const date = new Date(year, month - 1, day);

    if (
      !Number.isInteger(day) ||
      !Number.isInteger(month) ||
      !Number.isInteger(year) ||
      date.getFullYear() !== year ||
      date.getMonth() !== month - 1 ||
      date.getDate() !== day
    ) {
      return;
    }

    const key = `${year}-${String(month).padStart(2, "0")}`;

    if (!monthlyTotals.has(key)) {
      const monthName = date.toLocaleDateString("pt-BR", {
        month: "short",
        year: "numeric",
      });

      monthlyTotals.set(key, {
        month: monthName,
        income: 0,
        expenses: 0,
      });
    }

    const currentMonth = monthlyTotals.get(key)!;

    if (transaction.type === "income") {
      currentMonth.income += transaction.value;
    } else {
      currentMonth.expenses += transaction.value;
    }
  });

  return Array.from(monthlyTotals.entries())
    .sort(([firstMonth], [secondMonth]) =>
      firstMonth.localeCompare(secondMonth)
    )
    .map(([, totals]) => totals);
}
