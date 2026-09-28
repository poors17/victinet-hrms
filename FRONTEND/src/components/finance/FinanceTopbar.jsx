import { Bell, CalendarDays, ChevronDown, Menu, MessageCircle, Search } from 'lucide-react';

export default function FinanceTopbar() {
  return (
    <header className="finance-topbar">
      <button className="finance-icon-button" type="button" aria-label="Toggle navigation"><Menu size={19} /></button>
      <label className="finance-search">
        <Search size={15} />
        <input aria-label="Search" placeholder="Search for employees, departments or modules..." />
      </label>
      <div className="finance-topbar-actions">
        <button className="finance-icon-button finance-bell" type="button" aria-label="Notifications"><Bell size={18} /><span>4</span></button>
        <button className="finance-icon-button finance-chat" type="button" aria-label="Messages"><MessageCircle size={18} /><i /></button>
        <button className="finance-calendar-button" type="button" aria-label="Calendar"><CalendarDays size={17} /></button>
        <button className="finance-user-button" type="button"><span className="finance-user-avatar">FT</span><strong>Finance Team</strong><ChevronDown size={14} /></button>
      </div>
    </header>
  );
}