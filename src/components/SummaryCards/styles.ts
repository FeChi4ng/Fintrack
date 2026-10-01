import styled from "styled-components";

export const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  margin-top: 40px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.article`
  padding: 24px;

  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;

  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);

  small {
    display: block;
    margin-top: 8px;

    color: #9ca3af;
    font-size: 13px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 16px;

  span {
    color: #6b7280;
    font-size: 14px;
    font-weight: 500;
  }
`;

export const CardValue = styled.strong`
  display: block;

  color: #111827;
  font-size: 28px;
  font-weight: 700;
`;

type CardIconProps = {
  $variant: "balance" | "income" | "expense";
};

export const CardIcon = styled.div<CardIconProps>`
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;

  background: ${({ $variant }) => {
    if ($variant === "income") return "#dcfce7";
    if ($variant === "expense") return "#fee2e2";

    return "#eff6ff";
  }};

  color: ${({ $variant }) => {
    if ($variant === "income") return "#16a34a";
    if ($variant === "expense") return "#dc2626";

    return "#2563eb";
  }};
`;
