import { Message2, Notification } from "iconsax-reactjs";
import {
  LayoutDashboard,
  PenSquare,
  List,
  Users,
  Banknote,
} from "lucide-react";

export const SingleMenuItems = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Students",
    url: "/dashboard/students",
    icon: Users,
  },
  {
    name: "Classes",
    url: "/dashboard/class",
    icon: List,
  },
  {
    name: "Notifications",
    url: "/dashboard/notifications",
    icon: Notification,
  },
  {
    name: "Staffs",
    url: "/dashboard/staffs",
    icon: Users,
  },
  {
    name: "Reports",
    url: "/dashboard/reports",
    icon: PenSquare,
  },
  {
    name: "Communication",
    url: "/dashboard/communication",
    icon: Message2,
  },
  {
    name: "Billing",
    url: "/dashboard/billing",
    icon: Banknote,
  },
];
