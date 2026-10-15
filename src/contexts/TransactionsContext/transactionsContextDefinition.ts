import { createContext } from "react";

import type { TransactionType } from "../../types/transaction";

export type TransactionsContextType = {
  transactions: TransactionType[];
  addTransaction: (transaction: TransactionType) => void;
  updateTransaction: (transaction: TransactionType) => void;
  deleteTransaction: (id: number) => void;
};

export const TransactionsContext = createContext<
  TransactionsContextType | undefined
>(undefined);
