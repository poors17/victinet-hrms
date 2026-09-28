export const financeNavigation = [
  { label: 'Dashboard', icon: 'dashboard' },
  { label: 'Employees', icon: 'employees', locked: true },
  { label: 'Attendance', icon: 'attendance', locked: true },
  { label: 'Leave Management', icon: 'leave', locked: true },
  {
    label: 'Payroll', icon: 'payroll', expanded: true, items: [
      { label: 'Payroll Dashboard', active: true },
      { label: 'Salary Structure' },
      { label: 'Payroll Processing' },
      { label: 'Payslips' },
      { label: 'Reports' },
    ],
  },
  { label: 'Notifications', icon: 'notifications', expandable: true },
];

export const financeKpis = [
  { label: 'Total Employees', value: '124', type: 'employees' },
  { label: 'Total Payroll (This Month)', value: '₹ 24,50,000', detail: '12% vs last month', trend: 'up', type: 'payroll' },
  { label: 'Processed', value: '98', detail: '79% of total employees', type: 'processed' },
  { label: 'Pending', value: '8', detail: '6% of total employees', type: 'pending' },
  { label: 'On Hold', value: '3', detail: '2% of total employees', type: 'hold' },
];

export const payrollSummary = [
  { label: 'Total Gross Pay', value: '₹ 24,50,000', icon: 'gross' },
  { label: 'Total Deductions', value: '₹ 3,80,000', icon: 'deductions' },
  { label: 'Net Pay', value: '₹ 20,70,000', icon: 'net' },
  { label: 'Pending Payroll', value: '8', icon: 'pending' },
];

export const payrollStatus = [
  { name: 'Processed', percent: '79%', count: 98, value: 98, color: '#0F7B5F' },
  { name: 'Pending', percent: '6%', count: 8, value: 8, color: '#F59E0B' },
  { name: 'On Hold', percent: '2%', count: 3, value: 3, color: '#3B82F6' },
  { name: 'Failed', percent: '13%', count: 16, value: 16, color: '#8B5CF6' },
];

export const payrollTransactions = [
  { name: 'Rajesh Kumar', initials: 'RK', avatar: 12, id: 'EMP001', department: 'IT', designation: 'Software Developer', gross: '₹24,500', deductions: '₹4,500', net: '₹20,000', status: 'Processed' },
  { name: 'Priya S', initials: 'PS', avatar: 47, id: 'EMP002', department: 'IT', designation: 'UI/UX Designer', gross: '₹22,300', deductions: '₹3,900', net: '₹18,400', status: 'Processed' },
  { name: 'Manoj K', initials: 'MK', avatar: 14, id: 'EMP003', department: 'Finance', designation: 'Accountant', gross: '₹19,800', deductions: '₹3,600', net: '₹16,200', status: 'Pending' },
  { name: 'Divya M', initials: 'DM', avatar: 44, id: 'EMP004', department: 'HR', designation: 'HR Executive', gross: '₹17,800', deductions: '₹2,900', net: '₹14,900', status: 'Pending' },
  { name: 'Suresh B', initials: 'SB', avatar: 13, id: 'EMP005', department: 'Operations', designation: 'Operations Executive', gross: '₹15,000', deductions: '₹2,400', net: '₹12,600', status: 'Processed' },
];

export const financeQuickActions = [
  { label: 'Process Payroll', icon: 'process' },
  { label: 'Generate Payslips', icon: 'payslips' },
  { label: 'Download Reports', icon: 'download' },
  { label: 'Salary Structure', icon: 'salary' },
  { label: 'View Payroll Logs', icon: 'logs' },
];

export const financeNotifications = [
  { type: 'success', message: 'Payroll for Sep 2026 is ready for processing.', time: 'Today, 10:24 AM' },
  { type: 'warning', message: '3 employee salary details are pending.', time: 'Yesterday, 05:40 PM' },
  { type: 'info', message: 'Payslip generation completed for Aug 2026', time: '30 Sep 2026, 09:40 PM' },
  { type: 'success', message: 'Salary structure updated by Admin', time: '29 Sep 2026, 04:12 PM' },
  { type: 'success', message: 'Payroll process completed for Jul 2026', time: '25 Sep 2026, 03:30 PM' },
];