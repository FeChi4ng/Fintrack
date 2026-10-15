import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.main`
  flex: 1;
  padding: 40px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

export const HeaderContent = styled.div`
  span {
    color: #2563eb;
    font-size: 14px;
    font-weight: 600;
  }

  h1 {
    margin-top: 6px;
    font-size: 32px;
    color: #111827;
  }

  p {
    margin-top: 8px;
    color: #6b7280;
  }
`;

export const AddButton = styled.button`
  padding: 12px 20px;

  border: 0;
  border-radius: 10px;

  background: #2563eb;
  color: #ffffff;

  font-weight: 600;

  transition: 0.2s;

  &:hover {
    background: #1d4ed8;
  }
`;

export const TransactionsSection = styled.section`
  margin-top: 32px;
  padding: 24px;

  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};

  border-radius: 16px;

  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
`;

export const TransactionsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 24px;

  h2 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 20px;
  }

  p {
    margin-top: 4px;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 14px;
  }

  button {
    border: 0;
    background: transparent;

    color: #2563eb;
    font-weight: 600;

    cursor: pointer;
  }

  @media (max-width: 650px) {
    align-items: flex-start;
    gap: 12px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Transaction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 18px 0;

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: 0;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
  }
`;

export const TransactionInfo = styled.div`
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 14px;
`;

export const TransactionIcon = styled.div`
  width: 42px;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;

  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
`;

export const TransactionDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;

  strong,
  span {
    overflow-wrap: anywhere;
  }

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-size: 15px;
  }

  span {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 13px;
  }
`;

type TransactionValueProps = {
  $type: "income" | "expense";
};

export const TransactionValue = styled.strong<TransactionValueProps>`
  color: ${({ $type }) => ($type === "income" ? "#16a34a" : "#dc2626")};

  font-size: 15px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;

  background: rgba(17, 24, 39, 0.6);

  z-index: 1000;
`;

export const Modal = styled.div`
  width: 100%;
  max-width: 500px;

  padding: 28px;

  background: #ffffff;
  border-radius: 16px;

  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  margin-bottom: 24px;

  h2 {
    color: #111827;
    font-size: 22px;
  }

  p {
    margin-top: 6px;

    color: #6b7280;
    font-size: 14px;
  }
`;

export const CloseButton = styled.button`
  width: 36px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 8px;

  background: #f3f4f6;
  color: #6b7280;

  transition: 0.2s;

  &:hover {
    background: #e5e7eb;
    color: #111827;
  }
`;

export const TransactionForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormGroup = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    color: #374151;
    font-size: 14px;
    font-weight: 600;
  }

  input,
  select {
    width: 100%;
    height: 46px;

    padding: 0 14px;

    border: 1px solid #d1d5db;
    border-radius: 10px;

    background: #ffffff;
    color: #111827;

    outline: none;

    transition: 0.2s;
  }

  input:focus,
  select:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }
`;

export const FormRow = styled.div`
  display: flex;
  gap: 16px;
`;

export const TypeButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

type TypeButtonProps = {
  $active?: boolean;
  $type: "income" | "expense";
};

export const TypeButton = styled.button<TypeButtonProps>`
  height: 46px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border: 1px solid
    ${({ $active, $type }) => {
      if (!$active) return "#d1d5db";

      return $type === "income" ? "#16a34a" : "#dc2626";
    }};

  border-radius: 10px;

  background: ${({ $active, $type }) => {
    if (!$active) return "#ffffff";

    return $type === "income" ? "#dcfce7" : "#fee2e2";
  }};

  color: ${({ $active, $type }) => {
    if (!$active) return "#6b7280";

    return $type === "income" ? "#16a34a" : "#dc2626";
  }};

  font-weight: 600;
  transition: 0.2s;

  &:hover {
    border-color: ${({ $type }) =>
      $type === "income" ? "#16a34a" : "#dc2626"};
  }
`;

export const SubmitButton = styled.button`
  height: 48px;

  border: 0;
  border-radius: 10px;

  background: #2563eb;
  color: #ffffff;

  font-weight: 600;

  transition: 0.2s;

  &:hover {
    background: #1d4ed8;
  }
`;

export const TransactionActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 650px) {
    width: 100%;
    justify-content: flex-end;
  }
`;

export const DeleteButton = styled.button`
  width: 34px;
  height: 34px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 8px;

  background: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};

  transition: 0.2s;

  &:hover {
    background: rgba(220, 38, 38, 0.12);
    color: #dc2626;
  }
`;

export const EditButton = styled.button`
  width: 34px;
  height: 34px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 8px;

  background: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const TransactionsFilters = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  margin-bottom: 16px;

  @media (max-width: 850px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 320px;
  height: 42px;

  padding: 0 14px;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;

  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  outline: none;

  transition: 0.2s;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }

  @media (max-width: 850px) {
    max-width: none;
    width: 100%;
  }
`;

export const FilterButtons = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 650px) {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 6px;
    width: 100%;
    min-width: 0;
  }
`;

type FilterButtonProps = {
  $active?: boolean;
};

export const FilterButton = styled.button<FilterButtonProps>`
  padding: 10px 16px;

  border: 1px solid
    ${({ $active, theme }) =>
      $active ? theme.colors.primary : theme.colors.border};

  border-radius: 10px;

  background: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.background};

  color: ${({ $active, theme }) => ($active ? "#ffffff" : theme.colors.text)};

  font-weight: 600;

  transition: 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ $active, theme }) =>
      $active ? "#ffffff" : theme.colors.primary};
  }

  @media (max-width: 650px) {
    width: 100%;
    min-width: 0;
    padding: 10px 4px;
    font-size: 12px;
  }
`;

export const CategoryFilter = styled.select`
  height: 42px;
  min-width: 190px;

  padding: 0 14px;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;

  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  outline: none;
  cursor: pointer;

  transition: 0.2s;

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }

  @media (max-width: 850px) {
    width: 100%;
  }
`;

export const EmptyState = styled.div`
  padding: 48px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  text-align: center;

  strong {
    color: #374151;
    font-size: 16px;
  }

  span {
    color: #9ca3af;
    font-size: 14px;
  }
`;

export const ViewAllLink = styled(Link)`
  color: #2563eb;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;

  transition: 0.2s;

  &:hover {
    color: #1d4ed8;
    text-decoration: underline;
  }
`;
