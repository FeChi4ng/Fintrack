import styled from "styled-components";

export const Container = styled.main`
  flex: 1;
  min-width: 0;
  padding: 32px;

  @media (max-width: 768px) {
    padding: 76px 20px 24px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
  }
`;

export const HeaderContent = styled.div`
  span {
    display: block;
    margin-bottom: 4px;

    color: ${({ theme }) => theme.colors.primary};
    font-size: 14px;
    font-weight: 600;
  }

  h1 {
    margin: 0;

    color: ${({ theme }) => theme.colors.text};
    font-size: 28px;
  }

  p {
    margin: 6px 0 0;

    color: ${({ theme }) => theme.colors.textSecondary};
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

  background: ${({ theme }) => theme.colors.primary};
  color: #ffffff;

  font-weight: 600;
  cursor: pointer;

  transition: 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
