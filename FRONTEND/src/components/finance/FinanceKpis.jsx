import { ArrowRight, ArrowUpRight, Banknote, Check, CircleAlert, Clock3, Users } from 'lucide-react';
import { financeKpis } from '../../data/financeMockData';

const icons = { employees: Users, payroll: Banknote, processed: Check, pending: Clock3, hold: CircleAlert };

export default function FinanceKpis() {
  return (
    <section className="finance-kpi-grid" aria-label="Payroll key metrics">
      {financeKpis.map((item) => {
        const Icon = icons[item.type];
        return (
          <article className={`finance-kpi-card finance-kpi-${item.type}`} key={item.label}>
            <span className="finance-kpi-icon"><Icon size={21} /></span>
            <div className="finance-kpi-copy">
              <span className="finance-kpi-label">{item.label}</span>
              <strong>{item.value}</strong>
              {item.type === 'employees' ? (
                <small className="finance-employee-breakdown"><span>Active 112</span><i>•</i><span>Inactive 8</span><i>•</i><b>Resigned 4</b></small>
              ) : item.trend ? (
                <small className="finance-kpi-detail"><ArrowUpRight size={13} /><b>12%</b> vs last month</small>
              ) : <small className="finance-kpi-detail">{item.detail}</small>}
            </div>
            <button type="button" className="finance-kpi-more" aria-label={`More ${item.label} details`}><ArrowRight size={14} /></button>
          </article>
        );
      })}
    </section>
  );
}