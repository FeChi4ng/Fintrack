import { TrendingUp, TrendingDown, X } from "lucide-react";
import { categories } from "../../constants/categories";
import { CategorySelect } from "../CategorySelect/CategorySelect";

import {
  ModalOverlay,
  Modal,
  ModalHeader,
  CloseButton,
  TransactionForm,
  FormGroup,
  FormRow,
  TypeButtons,
  TypeButton,
  SubmitButton,
} from "./styles";

type TransactionModalProps = {
  isOpen: boolean;
  isEditing: boolean;

  description: string;
  value: string;
  category: string;
  transactionType: "income" | "expense";

  onDescriptionChange: (value: string) => void;
  onValueChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onTransactionTypeChange: (type: "income" | "expense") => void;

  onClose: () => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

function TransactionModal({
  isOpen,
  isEditing,
  description,
  value,
  category,
  transactionType,
  onDescriptionChange,
  onValueChange,
  onCategoryChange,
  onTransactionTypeChange,
  onClose,
  onSubmit,
}: TransactionModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay>
      <Modal>
        <ModalHeader>
          <h2>{isEditing ? "Editar transação" : "Nova transação"}</h2>

          <CloseButton type="button" onClick={onClose} title="Fechar">
            <X size={20} />
          </CloseButton>
        </ModalHeader>

        <TransactionForm onSubmit={onSubmit}>
          <FormGroup>
            <label htmlFor="description">Descrição</label>

            <input
              id="description"
              type="text"
              placeholder="Ex: Supermercado"
              value={description}
              onChange={(event) => onDescriptionChange(event.target.value)}
              required
              minLength={2}
              maxLength={100}
            />
          </FormGroup>

          <FormRow>
            <FormGroup>
              <label htmlFor="value">Valor</label>

              <input
                id="value"
                type="number"
                placeholder="0,00"
                min="0.01"
                step="0.01"
                value={value}
                onChange={(event) => onValueChange(event.target.value)}
                required
              />
            </FormGroup>

            <FormGroup>
              <label id="category-label">Categoria</label>

              <CategorySelect
                value={category}
                options={categories}
                onChange={onCategoryChange}
              />
            </FormGroup>
          </FormRow>

          <FormGroup>
            <label>Tipo</label>

            <TypeButtons>
              <TypeButton
                type="button"
                $type="income"
                $active={transactionType === "income"}
                onClick={() => onTransactionTypeChange("income")}
              >
                <TrendingUp size={18} />
                Receita
              </TypeButton>

              <TypeButton
                type="button"
                $type="expense"
                $active={transactionType === "expense"}
                onClick={() => onTransactionTypeChange("expense")}
              >
                <TrendingDown size={18} />
                Despesa
              </TypeButton>
            </TypeButtons>
          </FormGroup>

          <SubmitButton type="submit">
            {isEditing ? "Salvar alterações" : "Adicionar transação"}
          </SubmitButton>
        </TransactionForm>
      </Modal>
    </ModalOverlay>
  );
}

export default TransactionModal;
