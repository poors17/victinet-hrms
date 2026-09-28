import {
  Bell, BriefcaseBusiness, CalendarDays, ChartNoAxesCombined,
  CheckCheck, Clock3, FileText, Grid2X2, UserRound, Users,
  WalletCards,
} from 'lucide-react';
import { navigation } from '../../data/mockData';

const icons = {
  grid: Grid2X2, users: Users, clock: Clock3, calendar: CalendarDays,
  wallet: WalletCards, file: FileText, chart: ChartNoAxesCombined,
  check: CheckCheck, bell: Bell, user: UserRound,
};

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <a className="brand" href="#dashboard" aria-label="Victinet dashboard">
        <span className="brand-mark">V</span>
        <span>VICTINET</span>
      </a>
      <nav className="side-nav" aria-label="Main navigation">
        {navigation.map(({ label, icon, items }) => {
          const Icon = icons[icon] || BriefcaseBusiness;
          return (
            <div className={`nav-group ${label === 'Dashboard' ? 'is-active' : ''}`} key={label}>
              <button className="nav-item" type="button">
                <Icon size={18} strokeWidth={1.9} />
                <span>{label}</span>
              </button>
              {items && <div className="nav-subitems">{items.map((item) => <button className="text-white/75" type="button" key={item}>{item}</button>)}</div>}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}