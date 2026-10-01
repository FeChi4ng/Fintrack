import { useState } from "react";
import SummaryCards from "../../components/SummaryCards/SummaryCards";
import TransactionsList from "../../components/TransactionsList/TransactionsList";
import type { TransactionType } from "../../types/transaction";
import TransactionModal from "../../components/TransactionModal/TransactionModal";
import FinanceChart from "../../components/FinanceChart/FinanceChart";

import ExpenseCategoryChart from "../../components/ExpenseCategoryChart/ExpenseCategoryChart";
import { useTransactions } from "../../contexts/TransactionsContext/useTransactions";

import {
  Container,
  Header,
  HeaderContent,
  AddButton,
  ChartsGrid,
} from "./styles";

function Dashboard() {
  const { transactions, addTransaction, updateTransaction, deleteTransaction } =
    useTransactions();

  const [search, setSearch] = useState("");

  const [filterType, setFilterType] = useState<"all" | "income" | "expense">(
    "all"
  );

  const [filterCategory, setFilterCategory] = useState("all");

  const [editingTransactionId, setEditingTransactionId] = useState<
    number | null
  >(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const [transactionType, setTransactionType] = useState<"income" | "expense">(
    "expense"
  );

  function handleAddTransaction(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!description || !value || !category) {
      return;
    }

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

    setDescription("");
    setValue("");
    setCategory("");
    setTransactionType("expense");
    setEditingTransactionId(null);
    setIsModalOpen(false);
  }

  function handleDeleteTransaction(id: number) {
    deleteTransaction(id);
  }

  function handleEditTransaction(transaction: TransactionType) {
    setEditingTransactionId(transaction.id);
    setDescription(transaction.title);
    setValue(String(transaction.value));
    setCategory(transaction.category);
    setTransactionType(transaction.type);
    setIsModalOpen(true);
  }

  const totalIncome = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((total, transaction) => total + transaction.value, 0);

  const totalExpenses = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((total, transaction) => total + transaction.value, 0);

  const balance = totalIncome - totalExpenses;

  return (
    <Container>
      <Header>
        <HeaderContent>
          <span>Visão geral</span>
          <h1>Dashboard</h1>
          <p>Acompanhe suas finanças de forma simples e organizada.</p>
        </HeaderContent>

        <AddButton
          onClick={() => {
            setEditingTransactionId(null);
            setDescription("");
            setValue("");
            setCategory("");
            setTransactionType("expense");
            setIsModalOpen(true);
          }}
        >
          + Nova transação
        </AddButton>
      </Header>

      <SummaryCards
        balance={balance}
        totalIncome={totalIncome}
        totalExpenses={totalExpenses}
      />

      <ChartsGrid>
        <FinanceChart totalIncome={totalIncome} totalExpenses={totalExpenses} />

        <ExpenseCategoryChart transactions={transactions} />
      </ChartsGrid>

      <TransactionsList
        transactions={transactions}
        search={search}
        filterType={filterType}
        filterCategory={filterCategory}
        onSearchChange={setSearch}
        onFilterTypeChange={setFilterType}
        onFilterCategoryChange={setFilterCategory}
        onEdit={handleEditTransaction}
        onDelete={handleDeleteTransaction}
      />

      <TransactionModal
        isOpen={isModalOpen}
        isEditing={editingTransactionId !== null}
        description={description}
        value={value}
        category={category}
        transactionType={transactionType}
        onDescriptionChange={setDescription}
        onValueChange={setValue}
        onCategoryChange={setCategory}
        onTransactionTypeChange={setTransactionType}
        onClose={() => {
          setIsModalOpen(false);
          setEditingTransactionId(null);
        }}
        onSubmit={handleAddTransaction}
      />
    </Container>
  );
}

export default Dashboard;
