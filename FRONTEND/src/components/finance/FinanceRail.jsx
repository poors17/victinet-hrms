import {
  ArrowDownToLine, ArrowRight, Check, FileText,
  Play, ReceiptText, TriangleAlert, WalletCards, Info,
} from 'lucide-react';
import { financeNotifications, financeQuickActions } from '../../data/financeMockData';

const actionIcons = { process: Play, payslips: ReceiptText, download: ArrowDownToLine, salary: WalletCards, logs: FileText };
const notificationIcons = { success: Check, warning: TriangleAlert, info: Info };

function QuickActionsCard() {
  return (
    <article className="finance-panel finance-actions-panel">
      <h2 className="finance-panel-title">Quick Actions</h2>
      <div className="finance-action-list">{financeQuickActions.map((item) => { const Icon = actionIcons[item.icon]; return <button className="finance-action-row" type="button" key={item.label}><span><Icon size={16} /></span><strong>{item.label}</strong><ArrowRight size={14} /></button>; })}</div>
    </article>
  );
}

function FinanceNotificationsCard() {
  return (
    <article className="finance-panel finance-notifications-panel">
      <div className="finance-notifications-heading"><h2 className="finance-panel-title">Notifications</h2><button type="button">View All <ArrowRight size={12} /></button></div>
      <ul className="finance-notification-list">{financeNotifications.map((item, index) => { const Icon = notificationIcons[item.type]; return <li className="finance-notification" key={`${item.time}-${index}`}><span className={`finance-notification-icon is-${item.type}`}><Icon size={15} /></span><div><strong>{item.message}</strong><time>{item.time}</time></div></li>; })}</ul>
    </article>
  );
}

export default function FinanceRail() {
  return <aside className="finance-rail"><QuickActionsCard /><FinanceNotificationsCard /></aside>;
}