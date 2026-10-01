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

  background: #ffffff;
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
