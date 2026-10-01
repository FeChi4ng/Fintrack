import {
  Container,
  Logo,
  Navigation,
  NavItem,
  Overlay,
  CloseButton,
} from "./styles";

import fintrackLogo from "../../assets/fintrack-logo.png";

import {
  LayoutDashboard,
  ArrowLeftRight,
  ChartNoAxesCombined,
  Settings,
  X,
} from "lucide-react";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      <Overlay $isOpen={isOpen} onClick={onClose} />

      <Container $isOpen={isOpen}>
        <CloseButton type="button" onClick={onClose} aria-label="Fechar menu">
          <X size={22} />
        </CloseButton>

        <Logo>
          <img src={fintrackLogo} alt="FinTrack" />
        </Logo>

        <Navigation>
          <NavItem to="/" end>
            <LayoutDashboard size={20} />
            Dashboard
          </NavItem>

          <NavItem to="/transacoes">
            <ArrowLeftRight size={20} />
            Transações
          </NavItem>

          <NavItem to="/relatorios">
            <ChartNoAxesCombined size={20} />
            Relatórios
          </NavItem>

          <NavItem to="/configuracoes">
            <Settings size={20} />
            Configurações
          </NavItem>
        </Navigation>
      </Container>
    </>
  );
}

export default Sidebar;
