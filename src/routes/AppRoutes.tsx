import { Route, Routes } from "react-router-dom";

import AppLayout from "../layouts/AppLayout/AppLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Transactions from "../pages/Transactions/Transactions";
import { Reports } from "../pages/Reports/Reports";
import Settings from "../pages/Settings/Settings";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transacoes" element={<Transactions />} />
        <Route path="/relatorios" element={<Reports />} />
        <Route path="configuracoes" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
