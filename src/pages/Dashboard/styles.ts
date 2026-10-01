import styled from "styled-components";

export const Container = styled.main`
  flex: 1;
  padding: 40px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 80px 20px 32px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
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

  @media (max-width: 650px) {
    width: 100%;
    justify-content: center;
  }
`;

export const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;

  margin-top: 24px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;
