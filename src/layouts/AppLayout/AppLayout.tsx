import { useState } from "react";
import { Menu } from "lucide-react";

import Sidebar from "../../components/Sidebar/Sidebar";

import { LayoutContainer, MenuButton } from "./styles";

type AppLayoutProps = {
  children: React.ReactNode;
};

function AppLayout({ children }: AppLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <LayoutContainer>
      <MenuButton
        type="button"
        onClick={() => setIsSidebarOpen(true)}
        aria-label="Abrir menu"
      >
        <Menu size={22} />
      </MenuButton>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {children}
    </LayoutContainer>
  );
}

export default AppLayout;
