import { Bell, ChevronDown, Menu, MessageCircle, Search } from 'lucide-react';
import Avatar from './Avatar';

export default function Topbar() {
  return (
    <header className="topbar">
      <button type="button" className="icon-button menu-button" aria-label="Toggle navigation"><Menu size={19} /></button>
      <label className="search-box">
        <Search size={15} />
        <input aria-label="Search" placeholder="Search for employees, departments, reports..." />
      </label>
      <div className="topbar-tools">
        <button type="button" className="icon-button notification-button" aria-label="Notifications"><Bell size={17} /><span className="notification-count">4</span></button>
        <button type="button" className="icon-button chat-button" aria-label="Messages"><MessageCircle size={17} /><span className="chat-dot" /></button>
        <button type="button" className="profile-button">
          <Avatar className="avatar--topbar" />
          <span className="profile-copy"><strong>Daniel Carter</strong><small>CEO</small></span>
          <ChevronDown size={14} />
        </button>
      </div>
    </header>
  );
}