import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const MenuButton = styled.button`
  display: none;

  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 900;

  width: 44px;
  height: 44px;

  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 10px;

  background: #111827;
  color: #ffffff;

  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    display: flex;
  }
`;
