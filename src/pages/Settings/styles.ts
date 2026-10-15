import styled from "styled-components";

export const Container = styled.main`
  width: 100%;

  @media (max-width: 768px) {
    padding: 80px 20px 24px;
    box-sizing: border-box;
    min-width: 0;
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
    color: ${({ theme }) => theme.colors.text};
    font-size: 28px;
  }

  p {
    margin-top: 6px;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 14px;
  }
`;

export const SettingsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  margin-top: 24px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

export const SettingsCard = styled.section`
  min-width: 0;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  padding: 24px;
  color: ${({ theme }) => theme.colors.text};
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};

  h2 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 18px;
  }

  p {
    margin-top: 4px;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 13px;
  }
`;

export const SettingItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  h3 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 14px;
  }

  p {
    margin-top: 5px;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 12px;
  }

  span {
    flex-shrink: 0;
    color: #2563eb;
    background: #eff6ff;
    border-radius: 6px;
    padding: 8px 12px;
    font-size: 13px;
    font-weight: 600;
  }

  @media (max-width: 480px) {
    align-items: flex-start;
    flex-direction: column;
  }

  button {
    flex-shrink: 0;
    padding: 10px 14px;

    background: ${({ theme }) => theme.colors.primary};
    color: #ffffff;

    border: none;
    border-radius: 6px;

    font-size: 13px;
    font-weight: 600;
    cursor: pointer;

    transition: 0.2s;

    &:hover:not(:disabled) {
      filter: brightness(0.9);
    }

    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.colors.primary};
      outline-offset: 3px;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;
