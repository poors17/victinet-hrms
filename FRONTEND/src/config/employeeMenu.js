import {
  LayoutDashboard,
  UserRound,
  CalendarCheck,
  CalendarDays,
  House,
  CalendarOff,
  WalletCards,
  FileText,
  ChartNoAxesColumn,
  GraduationCap,
  FolderOpen,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";


export const employeeMenu = [

  {
    section: "OVERVIEW",

    items: [
      {
        label: "Dashboard",
        path: "/employee/dashboard",
        icon: LayoutDashboard,
      },
    ],
  },


  {
    section: "WORKFORCE",

    items: [
      {
        label: "My Profile",
        path: "/employee/profile",
        icon: UserRound,
      },

      {
        label: "Attendance",
        path: "/employee/attendance",
        icon: CalendarCheck,
      },

      {
        label: "Leave",
        path: "/employee/leave",
        icon: CalendarDays,
      },

      {
        label: "Work From Home",
        path: "/employee/work-from-home",
        icon: House,
      },

      {
        label: "Holidays",
        path: "/employee/holidays",
        icon: CalendarOff,
      },
    ],
  },


  {
    section: "PAYROLL & BENEFITS",

    items: [
      {
        label: "Payroll / Payslips",
        path: "/employee/payroll",
        icon: WalletCards,
      },
    ],
  },


  {
    section: "GROWTH",

    items: [
      {
        label: "Documents",
        path: "/employee/documents",
        icon: FileText,
      },

      {
        label: "Performance",
        path: "/employee/performance",
        icon: ChartNoAxesColumn,
      },

      {
        label: "Training",
        path: "/employee/training",
        icon: GraduationCap,
      },
    ],
  },


  {
    section: "RESOURCES",

    items: [
      {
        label: "Assets",
        path: "/employee/assets",
        icon: FolderOpen,
      },

      {
        label: "Notifications",
        path: "/employee/notifications",
        icon: Bell,
        badge: 3,
      },
    ],
  },

];


export const employeeBottomMenu = [

  {
    label: "Settings",
    path: "/employee/settings",
    icon: Settings,
  },

  {
    label: "Logout",
    path: "/logout",
    icon: LogOut,
  },

];