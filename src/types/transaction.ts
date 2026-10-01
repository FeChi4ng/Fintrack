export type TransactionType = {
  id: number;
  title: string;
  category: string;
  date: string;
  value: number;
  type: "income" | "expense";
};
