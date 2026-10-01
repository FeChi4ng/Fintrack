import { useState } from "react";
import SummaryCards from "../../components/SummaryCards/SummaryCards";
import TransactionsList from "../../components/TransactionsList/TransactionsList";
import type { TransactionType } from "../../types/transaction";
import TransactionModal from "../../components/TransactionModal/TransactionModal";
import FinanceChart from "../../components/FinanceChart/FinanceChart";
import { useTransactionForm } from "../../hooks/useTransactionForm";

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
  const { transactions, deleteTransaction } = useTransactions();

  const [search, setSearch] = useState("");

  const [filterType, setFilterType] = useState<"all" | "income" | "expense">(
    "all"
  );

  const [filterCategory, setFilterCategory] = useState("all");

  const {
    isModalOpen,
    description,
    value,
    category,
    transactionType,
    editingTransactionId,
    setDescription,
    setValue,
    setCategory,
    setTransactionType,
    prepareTransactionForEdit,
    handleSubmit,
    openNewTransactionModal,
    closeModal,
  } = useTransactionForm();

  function handleDeleteTransaction(id: number) {
    deleteTransaction(id);
  }

  function handleEditTransaction(transaction: TransactionType) {
    prepareTransactionForEdit(transaction);
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

        <AddButton onClick={openNewTransactionModal}>
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
        onClose={closeModal}
        onSubmit={handleSubmit}
      />
    </Container>
  );
}

export default Dashboard;
