import { Activity, ArrowDownRight, ArrowUpRight, CalendarDays, UserRound, UserRoundPlus, Users, WalletCards } from 'lucide-react';
import { stats } from '../../data/mockData';
import Avatar from './Avatar';

const statIcons = { users: Users, userCheck: UserRound, userPlus: UserRoundPlus, activity: Activity, calendar: CalendarDays, wallet: WalletCards };

export function WelcomeBanner() {
  return (
    <section className="welcome-banner">
      <svg className="banner-skyline" viewBox="0 0 480 130" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
        <g fill="#82b994">
          <path d="M30 130V78h43v52zm48 0V52h55v78zm60 0V90h36v40zm42 0V35h64v95zm70 0V66h44v64zm52 0V47h58v83zm66 0V73h43v57zm51 0V39h43v91z" />
          <path d="M0 130V104h24v26zm421 0V96h59v34z" />
        </g>
        <g fill="#e8f5ee">
          <path d="M40 88h5v7h-5zm14 0h5v7h-5zm-14 14h5v7h-5zm14 0h5v7h-5zm38-36h6v8h-6zm18 0h6v8h-6zm-18 17h6v8h-6zm18 0h6v8h-6zm55 16h6v8h-6zm18-43h6v9h-6zm20 0h6v9h-6zm20 0h6v9h-6zm-38 28h6v9h-6zm20 0h6v9h-6zm20 0h6v9h-6zm38-11h6v9h-6zm18 0h6v9h-6zm17-19h6v9h-6zm20 0h6v9h-6zm-18 34h6v9h-6zm20 0h6v9h-6z" />
        </g>
        <path d="M0 129h480" stroke="#75ad89" strokeWidth="2" />
      </svg>
      <div className="welcome-person">
        <Avatar className="avatar--welcome" />
        <div><h1>Good Morning, Daniel Carter</h1><p>Here's what's happening across your organization today.</p></div>
      </div>
      <div className="welcome-date"><span className="welcome-date-icon"><CalendarDays size={19} /></span><span><strong>Apr 16, 2025</strong><small>Wednesday</small></span></div>
      <div className="welcome-quote"><span>“Great people build<br />great organizations.”</span></div>
      <svg className="welcome-plant" viewBox="0 0 100 115" aria-hidden="true">
        <path d="M48 111c2-24 1-44-5-67m6 54c10-21 19-34 33-47m-35 30C34 64 23 53 11 49" fill="none" stroke="#438b5a" strokeWidth="3" strokeLinecap="round" />
        <path d="M43 48C19 48 10 35 12 16c19 1 34 9 34 28m4 21c1-24 15-38 36-40 0 20-10 35-34 43m-9 8C24 75 12 82 7 99c18 5 34 0 45-18" fill="#48a765" />
        <path d="M22 24c10 6 17 14 22 23m35-11c-8 7-16 17-25 31M16 91c11-4 21-5 35-5" fill="none" stroke="#c9efd2" strokeWidth="2" strokeLinecap="round" />
        <path d="M35 107h33l-4 8H39z" fill="#287647" />
      </svg>
    </section>
  );
}

export function StatCard({ item }) {
  const Icon = statIcons[item.icon];
  const TrendIcon = item.negative ? ArrowDownRight : ArrowUpRight;
  return (
    <article className={`stat-card stat-${item.tone}`}>
      <div className="stat-icon"><Icon size={20} /></div>
      <div className="stat-content"><div className="stat-label text-gray-500">{item.label}</div><strong className="stat-value">{item.value}</strong><div className={`stat-change ${item.negative ? 'is-negative' : ''}`}><TrendIcon size={13} /><b>{item.change}</b><span className="text-gray-400">{item.note}</span></div></div>
    </article>
  );
}

export function StatsRow() {
  return <section className="stats-grid" aria-label="Workforce summary">{stats.map((item) => <StatCard item={item} key={item.label} />)}</section>;
}