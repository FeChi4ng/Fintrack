import type { TransactionType } from "../types/transaction";

export function exportTransactionsToCSV(transactions: TransactionType[]) {
  const headers = ["Descrição", "Categoria", "Data", "Tipo", "Valor"];

  const rows = transactions.map((transaction) => [
    transaction.title,
    transaction.category,
    transaction.date,
    transaction.type === "income" ? "Receita" : "Despesa",
    transaction.value.toFixed(2).replace(".", ","),
  ]);

  const escapeCSV = (value: string) => `"${value.replace(/"/g, '""')}"`;

  const csvContent = [headers, ...rows]
    .map((row) => row.map(escapeCSV).join(";"))
    .join("\r\n");

  const blob = new Blob(["\uFEFF", csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "fintrack-transacoes.csv";

  document.body.appendChild(link);
  link.click();
  link.remove();

  URL.revokeObjectURL(url);
}
