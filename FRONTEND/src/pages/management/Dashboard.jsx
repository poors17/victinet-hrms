import Sidebar from '../../components/dashboard/Sidebar';
import Topbar from '../../components/dashboard/Topbar';
import { AttritionTrend, DepartmentDonut, HeadcountTrend } from '../../components/dashboard/Charts';
import { HRKpis, PendingApprovals, PromoBanner, QuickActions, RecentActivity, UpcomingHolidays } from '../../components/dashboard/Activity';
import { StatsRow, WelcomeBanner } from '../../components/dashboard/Summary';
import '../../styles/management-dashboard.css';

export default function Dashboard() {
  return (
    <div className="management-app">
      <Sidebar />
      <div className="main-shell">
        <Topbar />
        <main className="dashboard-content" id="dashboard">
          <WelcomeBanner />
          <StatsRow />
          <section className="dashboard-grid" aria-label="Workforce overview">
            <div className="dashboard-main-grid">
              <DepartmentDonut />
              <HeadcountTrend />
              <AttritionTrend />
              <HRKpis />
              <PendingApprovals />
              <UpcomingHolidays />
            </div>
            <aside className="dashboard-rail" aria-label="Actions and recent activity">
              <QuickActions />
              <RecentActivity />
              <PromoBanner />
            </aside>
          </section>
        </main>
      </div>
    </div>
  );
}