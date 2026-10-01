import { Route, Routes } from "react-router-dom";

import AppLayout from "../layouts/AppLayout/AppLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Transactions from "../pages/Transactions/Transactions";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transacoes" element={<Transactions />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
