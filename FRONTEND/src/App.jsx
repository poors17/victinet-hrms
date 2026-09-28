import Dashboard from "./pages/management/Dashboard";
import { Route, Routes } from "react-router-dom";
import FinanceDashboard from "./pages/FinanceDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/finance" element={<FinanceDashboard />} />
    </Routes>
  );
}

export default App;