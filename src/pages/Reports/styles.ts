import styled from "styled-components";

export const Container = styled.main`
  width: 100%;

  @media (max-width: 768px) {
    padding-top: 80px;
  }
`;

export const Header = styled.header`
  span {
    color: #2563eb;
    font-size: 14px;
    font-weight: 600;
  }

  h1 {
    margin-top: 4px;
    font-size: 28px;
    color: #111827;
  }

  p {
    margin-top: 6px;
    color: #6b7280;
    font-size: 14px;
  }
`;

export const PeriodFilter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  width: 220px;

  label {
    color: #374151;
    font-size: 13px;
    font-weight: 600;
  }

  select {
    width: 100%;
    height: 42px;

    padding: 0 12px;

    border: 1px solid #d1d5db;
    border-radius: 8px;

    background: #ffffff;
    color: #111827;
    font-size: 14px;

    outline: none;
    cursor: pointer;

    &:focus {
      border-color: #2563eb;
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
