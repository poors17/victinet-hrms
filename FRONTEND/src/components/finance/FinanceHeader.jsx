import { CalendarDays, FileSpreadsheet } from 'lucide-react';

function FinanceIllustration() {
  return (
    <svg className="finance-header-art" viewBox="0 0 190 88" aria-hidden="true">
      <path d="M10 78h170" stroke="#b8e6cf" strokeWidth="2" />
      <path d="M16 77c8-13 20-14 27 0m0 0c7-17 20-18 27 0" fill="none" stroke="#22a66b" strokeWidth="4" strokeLinecap="round" />
      <rect x="74" y="8" width="48" height="68" rx="5" fill="#0b7051" />
      <rect x="80" y="14" width="36" height="15" rx="2" fill="#ddf5e6" />
      <path d="M85 19h25m-25 5h14" stroke="#6dbd90" strokeWidth="2" strokeLinecap="round" />
      <g fill="#dcf2e4"><rect x="81" y="35" width="9" height="8" rx="2"/><rect x="94" y="35" width="9" height="8" rx="2"/><rect x="107" y="35" width="9" height="8" rx="2"/><rect x="81" y="47" width="9" height="8" rx="2"/><rect x="94" y="47" width="9" height="8" rx="2"/><rect x="107" y="47" width="9" height="8" rx="2"/></g>
      <path d="M87 64h22" stroke="#f6c85f" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="144" cy="69" rx="20" ry="7" fill="#e8ab32" />
      <path d="M124 61v8c0 4 9 8 20 8s20-4 20-8v-8" fill="#edae34" />
      <ellipse cx="144" cy="61" rx="20" ry="7" fill="#ffd466" />
      <ellipse cx="144" cy="54" rx="16" ry="6" fill="#f2bd43" />
      <path d="M128 47v7c0 3 7 6 16 6s16-3 16-6v-7" fill="#e9a932" />
      <ellipse cx="144" cy="47" rx="16" ry="6" fill="#ffd466" />
      <path d="M145 42c-6 0-8 7 0 8 8 1 6 8 0 8m0-18v20" fill="none" stroke="#fff8de" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function FinanceHeader() {
  return (
    <section className="finance-header-card">
      <div className="finance-header-title">
        <span className="finance-header-icon"><FileSpreadsheet size={25} /></span>
        <div><h1>Finance Dashboard</h1><p>Monitor payroll status, process payments and manage employee salary information.</p></div>
      </div>
      <div className="finance-header-right">
        <FinanceIllustration />
        <div className="finance-period-card"><span><CalendarDays size={17} /></span><div><small>Payroll Period</small><strong>Sep 2026</strong><p>01 Sep 2026 - 30 Sep 2026</p></div></div>
      </div>
    </section>
  );
}