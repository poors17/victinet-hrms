import { Banknote, CircleDollarSign, Clock3, Minus } from 'lucide-react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { payrollStatus, payrollSummary } from '../../data/financeMockData';

const summaryIcons = { gross: Banknote, deductions: Minus, net: CircleDollarSign, pending: Clock3 };

export function PayrollSummaryCard() {
  return (
    <article className="finance-panel finance-summary-panel">
      <h2 className="finance-panel-title">Payroll Summary</h2>
      <div className="finance-summary-grid">
        {payrollSummary.map((item) => {
          const Icon = summaryIcons[item.icon];
          return <div className="finance-summary-item" key={item.label}><span className="finance-summary-icon"><Icon size={19} /></span><div><span>{item.label}</span><strong>{item.value}</strong></div></div>;
        })}
      </div>
    </article>
  );
}

export function PayrollStatusCard() {
  return (
    <article className="finance-panel finance-status-panel">
      <h2 className="finance-panel-title">Payroll Status</h2>
      <div className="finance-status-content">
        <div className="finance-status-chart">
          <ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={payrollStatus} dataKey="value" nameKey="name" innerRadius={56} outerRadius={80} paddingAngle={2} stroke="none">{payrollStatus.map((item) => <Cell key={item.name} fill={item.color} />)}</Pie><Tooltip formatter={(value, name) => [`${value} employees`, name]} /></PieChart></ResponsiveContainer>
          <div className="finance-status-center"><strong>98</strong><span>Processed</span></div>
        </div>
        <div className="finance-status-legend">{payrollStatus.map((item) => <div className="finance-status-legend-row" key={item.name}><i style={{ backgroundColor: item.color }} /><span>{item.name}</span><b>{item.percent}</b><small>{item.count}</small></div>)}</div>
      </div>
    </article>
  );
}