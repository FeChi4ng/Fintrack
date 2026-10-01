import { useState } from "react";
import { Plus } from "lucide-react";

import TransactionModal from "../../components/TransactionModal/TransactionModal";
import { useTransactions } from "../../contexts/TransactionsContext/useTransactions";
import type { TransactionType } from "../../types/transaction";
import TransactionsList from "../../components/TransactionsList/TransactionsList";
import { useTransactionForm } from "../../hooks/useTransactionForm";

import { Container, Header, HeaderContent, AddButton } from "./styles";

function Transactions() {
  const { transactions, deleteTransaction } = useTransactions();

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

  const [search, setSearch] = useState("");

  const [filterType, setFilterType] = useState<"all" | "income" | "expense">(
    "all"
  );

  const [filterCategory, setFilterCategory] = useState("all");

  function handleDeleteTransaction(id: number) {
    deleteTransaction(id);
  }

  function handleEditTransaction(transaction: TransactionType) {
    prepareTransactionForEdit(transaction);
  }

  return (
    <Container>
      <Header>
        <HeaderContent>
          <span>Transações</span>
          <h1>Minhas transações</h1>
          <p>Gerencie suas receitas e despesas em um só lugar.</p>
        </HeaderContent>

        <AddButton type="button" onClick={openNewTransactionModal}>
          <Plus size={18} />
          Nova transação
        </AddButton>
      </Header>

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
        title="Todas as transações"
        description="Visualize e gerencie todas as suas movimentações."
        showViewAll={false}
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

export default Transactions;
