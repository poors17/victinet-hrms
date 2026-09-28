import {
  Bell, CalendarCheck, ChevronDown, ChevronRight, FileText, Grid2X2,
  LockKeyhole, Users, WalletCards,
} from 'lucide-react';
import { financeNavigation } from '../../data/financeMockData';

const navigationIcons = {
  dashboard: Grid2X2,
  employees: Users,
  attendance: CalendarCheck,
  leave: FileText,
  payroll: WalletCards,
  notifications: Bell,
};

function FinanceTeamIllustration() {
  return (
    <svg viewBox="0 0 150 100" role="img" aria-label="Finance team member working at a laptop">
      <path d="M20 83h113" stroke="#52bd8a" strokeWidth="3" strokeLinecap="round" />
      <path d="M23 78h35l-4 8H19zM88 78h34l4 8H85z" fill="#16865c" />
      <path d="M39 33c-1-13 7-22 19-22 12 0 19 9 18 22l-4 17H43z" fill="#164b3c" />
      <circle cx="58" cy="36" r="15" fill="#efbd97" />
      <path d="M42 33c0-15 8-24 19-24 10 0 16 8 16 20-7-2-12-7-15-12-4 8-10 12-20 16" fill="#123d32" />
      <path d="M35 77c2-20 10-29 24-29 15 0 23 10 25 29" fill="#24a871" />
      <path d="M47 51l11 16 12-16" fill="#e9f6ed" />
      <path d="M82 66h30v20H82z" fill="#b9ebd0" />
      <path d="M77 64h40v24H77z" fill="#1a9c69" />
      <path d="M82 68h30v15H82z" fill="#e4f5eb" />
      <path d="M76 88h43" stroke="#5bd497" strokeWidth="4" strokeLinecap="round" />
      <path d="M22 70c-9-8-8-15 0-21 9 5 12 13 7 22m93-12c2-13 8-17 18-15 0 10-5 16-16 18" fill="#28b87b" />
      <path d="M28 78c-7-13-3-21 9-23 7 10 6 18-4 25m94-11c8-10 16-10 22-1-6 9-13 11-22 5" fill="#55cf90" />
    </svg>
  );
}

export default function FinanceSidebar() {
  return (
    <aside className="finance-sidebar">
      <a className="finance-brand" href="/" aria-label="Victinet HRMS home">
        <span className="finance-brand-mark">V</span>
        <span className="finance-brand-copy"><strong>VICTINET</strong><small>HRMS</small></span>
      </a>
      <nav className="finance-navigation" aria-label="Finance navigation">
        {financeNavigation.map((item) => {
          const Icon = navigationIcons[item.icon];
          return (
            <div className={`finance-nav-group ${item.label === 'Dashboard' ? 'is-active' : ''} ${item.expanded ? 'is-expanded' : ''}`} key={item.label}>
              <button className="finance-nav-item" type="button">
                <Icon size={17} />
                <span>{item.label}</span>
                {item.locked && <LockKeyhole className="finance-nav-trailing" size={12} />}
                {item.expanded && <ChevronDown className="finance-nav-trailing" size={13} />}
                {item.expandable && <ChevronRight className="finance-nav-trailing" size={13} />}
              </button>
              {item.items && <div className="finance-subnav">{item.items.map((subitem) => <button className={subitem.active ? 'is-active' : ''} type="button" key={subitem.label}><i />{subitem.label}</button>)}</div>}
            </div>
          );
        })}
      </nav>
      <div className="finance-sidebar-profile">
        <FinanceTeamIllustration />
        <strong>Finance Team</strong>
        <span>Welcome Back!</span>
      </div>
    </aside>
  );
}