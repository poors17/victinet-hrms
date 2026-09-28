import { Area, CartesianGrid, Cell, ComposedChart, Line, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { departments, headcountTrend, attritionTrend } from '../../data/mockData';

function CardHeading({ title, action }) {
  return <div className="card-heading"><h2>{title}</h2>{action && <button type="button" className="period-select">{action}<span>⌄</span></button>}</div>;
}

export function DepartmentDonut() {
  return (
    <article className="panel department-panel">
      <CardHeading title="Department-wise Workforce" />
      <div className="department-content">
        <div className="donut-wrap">
          <ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={departments} dataKey="count" nameKey="name" innerRadius={62} outerRadius={90} paddingAngle={2} stroke="none">{departments.map((entry) => <Cell key={entry.name} fill={entry.color} />)}</Pie><Tooltip formatter={(value, name) => [`${value} employees`, name]} /></PieChart></ResponsiveContainer>
          <div className="donut-center"><strong>1,248</strong><span>Total Employees</span></div>
        </div>
        <div className="department-legend">{departments.map((department) => <div className="legend-row" key={department.name}><i className="legend-dot" style={{ background: department.color }} /><span className="legend-name text-gray-900">{department.name}</span><span className="legend-count">{department.count}</span><b className="legend-percent">{department.percent}</b></div>)}</div>
      </div>
    </article>
  );
}

export function HeadcountTrend() {
  return (
    <article className="panel chart-panel">
      <CardHeading title="Headcount Trend" action="Last 6 Months" />
      <div className="line-chart"><ResponsiveContainer width="100%" height="100%"><ComposedChart data={headcountTrend} margin={{ top: 10, right: 16, bottom: 0, left: 0 }}>
        <defs><linearGradient id="headcountFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#36c98b" stopOpacity={0.23} /><stop offset="100%" stopColor="#36c98b" stopOpacity={0.015} /></linearGradient></defs>
        <CartesianGrid stroke="#e9efed" strokeDasharray="3 4" vertical={false} /><XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fill: '#8a9995', fontSize: 12.5 }} /><YAxis domain={[1000, 1400]} ticks={[1000, 1100, 1200, 1300, 1400]} tickFormatter={(value) => value.toLocaleString('en-US')} tickLine={false} axisLine={false} tick={{ fill: '#8a9995', fontSize: 12.5 }} /><Tooltip /><Area type="monotone" dataKey="count" stroke="none" fill="url(#headcountFill)" /><Line type="monotone" dataKey="count" stroke="#19b875" strokeWidth={2.5} dot={{ r: 3.5, fill: '#19b875', strokeWidth: 0 }} activeDot={{ r: 5 }} /></ComposedChart></ResponsiveContainer></div>
    </article>
  );
}

export function AttritionTrend() {
  return (
    <article className="panel chart-panel attrition-panel">
      <CardHeading title="Attrition Trend" action="Last 6 Months" />
      <div className="line-chart"><ResponsiveContainer width="100%" height="100%"><ComposedChart data={attritionTrend} margin={{ top: 10, right: 16, bottom: 0, left: 0 }}>
        <defs><linearGradient id="attritionFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#55a6ff" stopOpacity={0.18} /><stop offset="100%" stopColor="#55a6ff" stopOpacity={0.01} /></linearGradient></defs>
        <CartesianGrid stroke="#e9efed" strokeDasharray="3 4" vertical={false} /><XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fill: '#8a9995', fontSize: 12.5 }} /><YAxis domain={[0, 6]} ticks={[0, 2, 4, 6]} tickFormatter={(value) => `${value}%`} tickLine={false} axisLine={false} tick={{ fill: '#8a9995', fontSize: 12.5 }} /><Tooltip formatter={(value) => [`${value}%`, 'Attrition']} /><Area type="monotone" dataKey="rate" stroke="none" fill="url(#attritionFill)" /><Line type="monotone" dataKey="rate" stroke="#438df4" strokeWidth={2.5} dot={{ r: 3.5, fill: '#438df4', strokeWidth: 0 }} activeDot={{ r: 5 }} /></ComposedChart></ResponsiveContainer></div>
    </article>
  );
}