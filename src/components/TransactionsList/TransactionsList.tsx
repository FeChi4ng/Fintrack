import type { TransactionType } from "../../types/transaction";
import { formatCurrency } from "../../utils/formatCurrency";
import { categories } from "../../constants/categories";

import {
  Briefcase,
  ShoppingCart,
  House,
  Wallet,
  Pencil,
  Trash2,
} from "lucide-react";

import {
  TransactionsSection,
  TransactionsHeader,
  TransactionsFilters,
  SearchInput,
  CategoryFilter,
  FilterButtons,
  FilterButton,
  List,
  Transaction,
  TransactionInfo,
  TransactionIcon,
  TransactionDetails,
  TransactionActions,
  TransactionValue,
  EditButton,
  DeleteButton,
  EmptyState,
  ViewAllLink,
} from "./styles";

type TransactionsListProps = {
  transactions: TransactionType[];
  search: string;
  filterType: "all" | "income" | "expense";
  filterCategory: string;
  onSearchChange: (value: string) => void;
  onFilterTypeChange: (type: "all" | "income" | "expense") => void;
  onFilterCategoryChange: (category: string) => void;
  onEdit: (transaction: TransactionType) => void;
  onDelete: (id: number) => void;
  title?: string;
  description?: string;
  showViewAll?: boolean;
};

function getTransactionIcon(category: string) {
  switch (category) {
    case "Receita":
    case "Salário":
      return <Briefcase size={20} />;

    case "Alimentação":
      return <ShoppingCart size={20} />;

    case "Moradia":
      return <House size={20} />;

    default:
      return <Wallet size={20} />;
  }
}

function TransactionsList({
  transactions,
  search,
  filterType,
  filterCategory,
  onSearchChange,
  onFilterTypeChange,
  onFilterCategoryChange,
  onEdit,
  onDelete,
  title = "Transações recentes",
  description = "Acompanhe suas últimas movimentações.",
  showViewAll = true,
}: TransactionsListProps) {
  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch = transaction.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesType = filterType === "all" || transaction.type === filterType;

    const matchesCategory =
      filterCategory === "all" || transaction.category === filterCategory;

    return matchesSearch && matchesType && matchesCategory;
  });

  return (
    <TransactionsSection>
      <TransactionsHeader>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        {showViewAll && <ViewAllLink to="/transacoes">Ver todas</ViewAllLink>}
      </TransactionsHeader>

      <TransactionsFilters>
        <SearchInput
          type="text"
          placeholder="Pesquisar transação..."
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
        />

        <CategoryFilter
          value={filterCategory}
          onChange={(event) => onFilterCategoryChange(event.target.value)}
        >
          <option value="all">Todas as categorias</option>
          <option value="Receita">Receita</option>

          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </CategoryFilter>

        <FilterButtons>
          <FilterButton
            $active={filterType === "all"}
            onClick={() => onFilterTypeChange("all")}
          >
            Todas
          </FilterButton>

          <FilterButton
            $active={filterType === "income"}
            onClick={() => onFilterTypeChange("income")}
          >
            Receitas
          </FilterButton>

          <FilterButton
            $active={filterType === "expense"}
            onClick={() => onFilterTypeChange("expense")}
          >
            Despesas
          </FilterButton>
        </FilterButtons>
      </TransactionsFilters>

      <List>
        {filteredTransactions.length > 0 ? (
          filteredTransactions.map((transaction) => (
            <Transaction key={transaction.id}>
              <TransactionInfo>
                <TransactionIcon>
                  {getTransactionIcon(transaction.category)}
                </TransactionIcon>

                <TransactionDetails>
                  <strong>{transaction.title}</strong>

                  <span>
                    {transaction.category} • {transaction.date}
                  </span>
                </TransactionDetails>
              </TransactionInfo>

              <TransactionActions>
                <TransactionValue $type={transaction.type}>
                  {transaction.type === "income" ? "+" : "-"}{" "}
                  {formatCurrency(transaction.value)}
                </TransactionValue>

                <EditButton
                  type="button"
                  onClick={() => onEdit(transaction)}
                  title="Editar transação"
                >
                  <Pencil size={17} />
                </EditButton>

                <DeleteButton
                  type="button"
                  onClick={() => onDelete(transaction.id)}
                  title="Excluir transação"
                >
                  <Trash2 size={17} />
                </DeleteButton>
              </TransactionActions>
            </Transaction>
          ))
        ) : (
          <EmptyState>
            <strong>Nenhuma transação encontrada</strong>
            <span>Tente alterar os filtros ou fazer outra pesquisa.</span>
          </EmptyState>
        )}
      </List>
    </TransactionsSection>
  );
}

export default TransactionsList;
