import { createContext, useEffect, useState, type ReactNode } from "react";

import type { TransactionType } from "../../types/transaction";

type TransactionsContextType = {
  transactions: TransactionType[];
  addTransaction: (transaction: TransactionType) => void;
  updateTransaction: (transaction: TransactionType) => void;
  deleteTransaction: (id: number) => void;
};

type TransactionsProviderProps = {
  children: ReactNode;
};

export const TransactionsContext = createContext<
  TransactionsContextType | undefined
>(undefined);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionType[]>(() => {
    const savedTransactions = localStorage.getItem("fintrack-transactions");

    if (savedTransactions) {
      return JSON.parse(savedTransactions);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem("fintrack-transactions", JSON.stringify(transactions));
  }, [transactions]);

  function addTransaction(transaction: TransactionType) {
    setTransactions((currentTransactions) => [
      transaction,
      ...currentTransactions,
    ]);
  }

  function updateTransaction(updatedTransaction: TransactionType) {
    setTransactions((currentTransactions) =>
      currentTransactions.map((transaction) =>
        transaction.id === updatedTransaction.id
          ? updatedTransaction
          : transaction
      )
    );
  }

  function deleteTransaction(id: number) {
    setTransactions((currentTransactions) =>
      currentTransactions.filter((transaction) => transaction.id !== id)
    );
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        addTransaction,
        updateTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
