import styled from "styled-components";

export const Container = styled.main`
  flex: 1;
  min-width: 0;
  padding: 32px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

export const HeaderContent = styled.div`
  span {
    display: block;
    margin-bottom: 4px;

    color: #2563eb;
    font-size: 14px;
    font-weight: 600;
  }

  h1 {
    margin: 0;

    color: #111827;
    font-size: 28px;
  }

  p {
    margin: 6px 0 0;

    color: #6b7280;
    font-size: 14px;
  }
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 12px 18px;

  border: 0;
  border-radius: 10px;

  background: #2563eb;
  color: #ffffff;

  font-weight: 600;
  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: #1d4ed8;
  }
`;
