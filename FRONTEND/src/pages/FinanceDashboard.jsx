import { Home } from 'lucide-react';
import FinanceSidebar from '../components/finance/FinanceSidebar';
import FinanceTopbar from '../components/finance/FinanceTopbar';
import FinanceHeader from '../components/finance/FinanceHeader';
import FinanceKpis from '../components/finance/FinanceKpis';
import { PayrollStatusCard, PayrollSummaryCard } from '../components/finance/PayrollOverview';
import PayrollTransactions from '../components/finance/PayrollTransactions';
import FinanceRail from '../components/finance/FinanceRail';
import '../styles/finance-dashboard.css';

export default function FinanceDashboard() {
  return (
    <div className="finance-app">
      <FinanceSidebar />
      <div className="finance-main-shell">
        <FinanceTopbar />
        <main className="finance-content">
          <nav className="finance-breadcrumb" aria-label="Breadcrumb"><Home size={14} /><span>Payroll</span><i>›</i><strong>Payroll Dashboard</strong></nav>
          <FinanceHeader />
          <FinanceKpis />
          <section className="finance-dashboard-grid" aria-label="Payroll overview">
            <PayrollSummaryCard />
            <PayrollStatusCard />
            <PayrollTransactions />
            <FinanceRail />
          </section>
        </main>
      </div>
    </div>
  );
}