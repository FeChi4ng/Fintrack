import styled from "styled-components";

export const SelectContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const SelectButton = styled.button`
  width: 100%;
  height: 46px;
  padding: 0 14px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;

  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  font-size: 14px;
  text-align: left;
  cursor: pointer;

  transition: 0.2s;

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const OptionsList = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  z-index: 20;

  max-height: 200px;
  overflow-y: auto;

  padding: 6px;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;

  background: ${({ theme }) => theme.colors.background};

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
`;

export const OptionButton = styled.button<{ $active: boolean }>`
  width: 100%;
  padding: 10px 12px;

  display: flex;
  align-items: center;

  border: 0;
  border-radius: 6px;

  background: ${({ $active, theme }) =>
    $active ? theme.colors.primary : "transparent"};

  color: ${({ $active, theme }) => ($active ? "#ffffff" : theme.colors.text)};

  font-size: 14px;
  text-align: left;
  cursor: pointer;

  transition: 0.2s;

  &:hover,
  &:focus-visible {
    background: ${({ theme }) => theme.colors.primary};
    color: #ffffff;
    outline: none;
  }

  &[aria-selected="true"] {
    color: ${({ $active, theme }) =>
      $active ? "#ffffff" : theme.colors.primary};
    font-weight: 600;
  }

  &[aria-selected="true"]:hover,
  &[aria-selected="true"]:focus-visible {
    color: #ffffff;
  }
`;
