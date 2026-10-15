import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-width: 0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 80px 20px 24px;
  }
`;

export const Header = styled.header`
  span {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 14px;
    font-weight: 600;
  }

  h1 {
    margin-top: 4px;
    font-size: 28px;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    margin-top: 6px;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 14px;
  }
`;

export const PeriodFilter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  width: 220px;

  label {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 13px;
    font-weight: 600;
  }

  select {
    width: 100%;
    height: 42px;

    padding: 0 12px;

    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;

    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};

    font-size: 14px;
    outline: none;
    cursor: pointer;

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
    }

    option {
      background: ${({ theme }) => theme.colors.surface};
      color: ${({ theme }) => theme.colors.text};
    }
  }

  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;

  width: 100%;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

export const ChartsSection = styled.div`
  width: 100%;
  margin-top: 24px;
`;

export const ReportsHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;

  margin-bottom: 24px;

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
  }
`;
