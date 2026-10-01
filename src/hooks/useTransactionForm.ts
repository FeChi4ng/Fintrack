import { useState } from "react";

import type { TransactionType } from "../types/transaction";
import { useTransactions } from "../contexts/TransactionsContext/useTransactions";

export function useTransactionForm() {
  const { transactions, addTransaction, updateTransaction } = useTransactions();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const [transactionType, setTransactionType] = useState<"income" | "expense">(
    "expense"
  );

  const [editingTransactionId, setEditingTransactionId] = useState<
    number | null
  >(null);

  function resetForm() {
    setDescription("");
    setValue("");
    setCategory("");
    setTransactionType("expense");
    setEditingTransactionId(null);
    setIsModalOpen(false);
  }

  return {
    isModalOpen,
    description,
    value,
    category,
    transactionType,
    editingTransactionId,

    setIsModalOpen,
    setDescription,
    setValue,
    setCategory,
    setTransactionType,
    setEditingTransactionId,

    resetForm,
    openNewTransactionModal,
    closeModal,
    prepareTransactionForEdit,
    handleSubmit,
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (editingTransactionId !== null) {
      const transactionToUpdate = transactions.find(
        (transaction) => transaction.id === editingTransactionId
      );

      if (transactionToUpdate) {
        updateTransaction({
          ...transactionToUpdate,
          title: description,
          category,
          value: Number(value),
          type: transactionType,
        });
      }
    } else {
      const newTransaction: TransactionType = {
        id: Date.now(),
        title: description,
        category,
        date: new Date().toLocaleDateString("pt-BR"),
        value: Number(value),
        type: transactionType,
      };

      addTransaction(newTransaction);
    }

    resetForm();
  }

  function openNewTransactionModal() {
    setDescription("");
    setValue("");
    setCategory("");
    setTransactionType("expense");
    setEditingTransactionId(null);
    setIsModalOpen(true);
  }

  function closeModal() {
    resetForm();
  }

  function prepareTransactionForEdit(transaction: TransactionType) {
    setEditingTransactionId(transaction.id);
    setDescription(transaction.title);
    setValue(String(transaction.value));
    setCategory(transaction.category);
    setTransactionType(transaction.type);
    setIsModalOpen(true);
  }
}
