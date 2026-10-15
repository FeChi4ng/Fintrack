import styled from "styled-components";

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

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;

  background: rgba(17, 24, 39, 0.6);

  z-index: 1000;

  @media (max-width: 650px) {
    padding: 12px;
  }
`;

export const Modal = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 28px;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 16px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);

  @media (max-width: 650px) {
    max-height: calc(100vh - 24px);
    overflow-y: auto;

    padding: 20px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  margin-bottom: 24px;

  h2 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 22px;
  }

  p {
    margin-top: 6px;

    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 14px;
  }
`;

export const CloseButton = styled.button`
  width: 36px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;

  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textSecondary};

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
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
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 14px;
    font-weight: 600;
  }

  input,
  select {
    width: 100%;
    height: 46px;

    padding: 0 14px;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 10px;

    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};

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

  @media (max-width: 650px) {
    flex-direction: column;
  }
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
    ${({ $active, $type, theme }) => {
      if (!$active) return theme.colors.border;

      return $type === "income" ? "#16a34a" : "#dc2626";
    }};

  border-radius: 10px;

  background: ${({ $active, $type, theme }) => {
    if (!$active) return theme.colors.background;

    return $type === "income"
      ? "rgba(22, 163, 74, 0.12)"
      : "rgba(220, 38, 38, 0.12)";
  }};

  color: ${({ $active, $type, theme }) => {
    if (!$active) return theme.colors.text;

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

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 10px;

  background: ${({ theme }) => theme.colors.primary};
  color: #ffffff;

  font-size: 14px;
  font-weight: 600;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 3px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
