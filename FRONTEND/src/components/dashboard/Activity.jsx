import { ArrowDownToLine, ArrowRight, BarChart3, BellRing, BookOpen, Calendar, CalendarDays, CheckCircle2, Clock3, FileText, Heart, Plus, ReceiptText, UserRoundPlus, WalletCards } from 'lucide-react';
import { activities, approvals, holidays, kpis, quickActions } from '../../data/mockData';
import officeBuilding from '../../assets/images/office-building.png';

const activityIcons = { join: UserRoundPlus, leave: CheckCircle2, payroll: WalletCards, alert: BellRing, report: FileText };
const quickActionIcons = { reports: BarChart3, download: ArrowDownToLine, approval: CheckCircle2, analytics: BarChart3 };

function PanelHeading({ title, link = false }) {
  return <div className="card-heading"><h2>{title}</h2>{link && <button className="text-link" type="button">View All <ArrowRight size={12} /></button>}</div>;
}

export function QuickActions() {
  return <article className="panel quick-actions-panel"><PanelHeading title="Quick Actions" /><div className="quick-actions-grid">{quickActions.map(({ label, icon }) => { const Icon = quickActionIcons[icon]; return <button type="button" className="quick-action" key={label}><span><Icon size={16} /></span>{label}</button>; })}</div></article>;
}

export function RecentActivity() {
  return <article className="panel activity-panel"><PanelHeading title="Recent Activity" link /><div className="activity-list">{activities.map((item) => { const Icon = activityIcons[item.kind]; return <div className="activity-row" key={item.title}><span className={`activity-icon activity-${item.kind}`}><Icon size={13} /></span><div className="activity-copy"><strong className="text-gray-900">{item.title}</strong><span>{item.description}</span></div><time>{item.time}</time></div>; })}</div></article>;
}

export function HRKpis() {
  const icons = { heart: Heart, book: BookOpen, clock: Clock3, trending: Plus };
  return <article className="panel kpi-panel"><PanelHeading title="HR KPIs" /><div className="kpi-grid">{kpis.map((item) => { const Icon = icons[item.icon]; return <div className="kpi-mini" key={item.label}><span className={`kpi-icon kpi-${item.color}`}><Icon size={14} /></span><span className="kpi-label">{item.label}</span><strong>{item.value}</strong></div>; })}</div></article>;
}

export function PendingApprovals() {
  const icons = { calendar: CalendarDays, receipt: ReceiptText, clock: Clock3, file: FileText };
  return <article className="panel approvals-panel"><PanelHeading title="Pending Executive Approvals" link /><div className="approval-list">{approvals.map((item) => { const Icon = icons[item.icon]; return <div className="approval-row" key={item.label}><span className={`approval-icon approval-${item.color}`}><Icon size={14} /></span><span className="approval-name text-gray-900">{item.label}</span><b>{item.count}</b><small>{item.age}</small></div>; })}</div></article>;
}

export function UpcomingHolidays() {
  return (
    <div className="holidays-panel bg-white rounded-xl border border-[#E5EAE8] shadow-sm p-4 h-full min-h-0 overflow-hidden flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-base font-semibold text-[#0F2A22]">Upcoming Holidays</h3>
        <a className="text-[13px] text-[#16A34A] font-medium">View All →</a>
      </div>
      <ul className="holiday-list flex flex-col flex-1 min-h-0 w-full">
        {holidays.map((h) => (
          <li key={h.name} className="holiday-row flex flex-1 min-h-0 w-full items-center justify-between py-2 border-b border-[#F0F3F2] last:border-b-0">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 shrink-0 rounded-lg bg-[#E8F5EE] flex items-center justify-center">
                <Calendar size={16} className="text-[#16A34A]" />
              </div>
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="block text-[14px] font-semibold leading-[15px] text-gray-900">{h.name}</span>
                <span className="block text-[12px] leading-[15px] text-gray-500">{h.date}</span>
              </div>
            </div>
            <span className="shrink-0 ml-auto text-[11px] px-2 py-0.5 rounded-md bg-[#E8F5EE] text-[#16A34A]">Holiday</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PromoBanner() {
  return <article className="promo-banner"><img src={officeBuilding} data-image-source="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800" alt="Bright modern office" /><h2>Building a stronger workforce for a brighter future.</h2></article>;
}