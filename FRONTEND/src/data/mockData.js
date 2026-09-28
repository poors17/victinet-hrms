export const navigation = [
  { label: 'Dashboard', icon: 'grid' },
  {
    label: 'Workforce', icon: 'users', items: [
      'Employee Overview', 'Headcount', 'Department Overview', 'New Joiners', 'Exits / Attrition',
    ],
  },
  { label: 'Attendance', icon: 'clock', items: ['Attendance Summary'] },
  { label: 'Leave', icon: 'calendar', items: ['Leave Summary', 'Leave Trends', 'Pending Approvals'] },
  {
    label: 'Payroll', icon: 'wallet', items: [
      'Payroll Summary', 'Salary Cost', 'Department-wise Cost', 'Payroll Reports',
    ],
  },
  {
    label: 'Reports', icon: 'file', items: [
      'HR Reports', 'Attendance Reports', 'Leave Reports', 'Payroll Reports', 'Custom / Configured Reports',
    ],
  },
  {
    label: 'Analytics', icon: 'chart', items: [
      'Workforce Analytics', 'Attrition Analytics', 'Leave Analytics', 'HR KPIs',
    ],
  },
  { label: 'Approvals', icon: 'check', items: ['Executive Approvals'] },
  { label: 'Notifications', icon: 'bell' },
  { label: 'My Profile', icon: 'user', items: ['Profile', 'Preferences', 'Logout'] },
];

export const stats = [
  { label: 'Total Employees', value: '1,248', change: '5%', note: 'vs. last month', icon: 'users', tone: 'green' },
  { label: 'Active Employees', value: '1,182', change: '5%', note: 'vs. last month', icon: 'userCheck', tone: 'green' },
  { label: 'New Joiners', value: '48', change: '12%', note: 'vs. last month', icon: 'userPlus', tone: 'green' },
  { label: 'Attrition Rate', value: '2.8%', change: '0.6%', note: 'vs. last month', icon: 'activity', tone: 'green', negative: true },
  { label: 'Attendance Rate', value: '94%', change: '2%', note: 'vs. last month', icon: 'calendar', tone: 'green' },
  { label: 'Total Payroll Cost', value: '₹ 28.4 L', change: '3%', note: 'vs. last month', icon: 'wallet', tone: 'teal' },
];

export const departments = [
  { name: 'Engineering', count: 432, percent: '35%', color: '#22c55e' },
  { name: 'Marketing', count: 286, percent: '23%', color: '#3b82f6' },
  { name: 'Sales', count: 217, percent: '17%', color: '#f59e0b' },
  { name: 'HR', count: 142, percent: '11%', color: '#8b5cf6' },
  { name: 'Finance', count: 100, percent: '8%', color: '#14b8a6' },
  { name: 'Others', count: 71, percent: '6%', color: '#9ca3af' },
];

export const headcountTrend = [
  { month: 'Nov', count: 1088 }, { month: 'Dec', count: 1115 },
  { month: 'Jan', count: 1144 }, { month: 'Feb', count: 1177 },
  { month: 'Mar', count: 1211 }, { month: 'Apr', count: 1248 },
];

export const attritionTrend = [
  { month: 'Nov', rate: 5.1 }, { month: 'Dec', rate: 5.0 },
  { month: 'Jan', rate: 4.4 }, { month: 'Feb', rate: 4.9 },
  { month: 'Mar', rate: 4.0 }, { month: 'Apr', rate: 2.8 },
];

export const activities = [
  { kind: 'join', title: 'New joiner', description: 'Rohan Mehta joined the Engineering team', time: '2 hours ago' },
  { kind: 'leave', title: 'Leave approved', description: "Priya Sharma's leave request approved", time: '4 hours ago' },
  { kind: 'payroll', title: 'Payroll processed', description: 'April payroll has been processed', time: 'Yesterday' },
  { kind: 'alert', title: 'Attendance alert', description: '3 employees have not checked in', time: 'Yesterday' },
  { kind: 'report', title: 'Quarterly report', description: 'Q1 workforce report is ready', time: '2 days ago' },
];

export const quickActions = [
  { label: 'View Reports', icon: 'reports' },
  { label: 'Download Report', icon: 'download' },
  { label: 'Manage Approvals', icon: 'approval' },
  { label: 'View Analytics', icon: 'analytics' },
];

export const approvals = [
  { label: 'Leave Requests', count: 6, age: '1 day', icon: 'calendar', color: 'green' },
  { label: 'Expense Claims', count: 4, age: '1 day', icon: 'receipt', color: 'orange' },
  { label: 'Attendance Corrections', count: 3, age: '1 day', icon: 'clock', color: 'blue' },
  { label: 'Other Requests', count: 2, age: '2 days', icon: 'file', color: 'purple' },
];

export const holidays = [
  { name: 'Good Friday', date: '18 Apr 2025' },
  { name: 'Labour Day', date: '01 May 2025' },
  { name: 'Independence Day', date: '15 Aug 2025' },
  { name: 'Gandhi Jayanti', date: '02 Oct 2025' },
];

export const kpis = [
  { label: 'Employee Satisfaction', value: '88%', icon: 'heart', color: 'green' },
  { label: 'Training Completion', value: '76%', icon: 'book', color: 'blue' },
  { label: 'Time to Hire', value: '22 days', icon: 'clock', color: 'teal' },
  { label: 'Internal Promotion', value: '12%', icon: 'trending', color: 'orange' },
];