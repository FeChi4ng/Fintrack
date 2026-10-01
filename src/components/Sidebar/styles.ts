import styled from "styled-components";
import { NavLink } from "react-router-dom";

type ContainerProps = {
  $isOpen: boolean;
};

export const Container = styled.aside<ContainerProps>`
  width: 260px;
  min-height: 100vh;
  padding: 32px 24px;

  background: #111827;
  color: #ffffff;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;

    z-index: 1000;

    transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "-100%")});

    transition: transform 0.3s ease;
  }
`;

export const Logo = styled.div`
  width: 100%;
  margin-bottom: 40px;

  display: flex;
  align-items: center;

  img {
    width: 190px;
    height: auto;
    display: block;
    object-fit: contain;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const NavItem = styled(NavLink)`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 14px 16px;

  border: 0;
  border-radius: 10px;

  background: transparent;
  color: #9ca3af;

  text-align: left;
  font-weight: 500;
  text-decoration: none;

  transition: 0.2s;

  &:hover {
    background: #1f2937;
    color: #ffffff;
  }

  &.active {
    background: #2563eb;
    color: #ffffff;
  }
`;

type OverlayProps = {
  $isOpen: boolean;
};

export const Overlay = styled.div<OverlayProps>`
  display: none;

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};

    position: fixed;
    inset: 0;

    z-index: 999;

    background: rgba(0, 0, 0, 0.45);
  }
`;

export const CloseButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    position: absolute;
    top: 16px;
    right: 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 36px;
    height: 36px;

    border: none;
    border-radius: 8px;

    background: transparent;
    color: #ffffff;

    &:hover {
      background: #1f2937;
    }
  }
`;
