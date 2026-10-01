import { useState } from "react";

import { Menu } from "lucide-react";
import { Outlet } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";

import { LayoutContainer, MenuButton } from "./styles";

function AppLayout() {
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

      <Outlet />
    </LayoutContainer>
  );
}

export default AppLayout;
