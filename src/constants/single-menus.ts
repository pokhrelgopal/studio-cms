import {
  Bill,
  Document,
  HomeHashtag,
  Layer,
  Notification,
  Teacher,
  User,
} from "iconsax-reactjs";
import { MessageCircle } from "lucide-react";

export const SingleMenuItems = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: HomeHashtag,
  },
  {
    name: "Students",
    url: "/dashboard/students",
    icon: Teacher,
  },
  {
    name: "Classes",
    url: "/dashboard/class",
    icon: Layer,
  },
  {
    name: "Notifications",
    url: "/dashboard/notifications",
    icon: Notification,
  },
  {
    name: "Staffs",
    url: "/dashboard/staffs",
    icon: User,
  },
  {
    name: "Reports",
    url: "/dashboard/reports",
    icon: Document,
  },
  {
    name: "Communication",
    url: "/dashboard/communication",
    icon: MessageCircle,
  },
  {
    name: "Billing",
    url: "/dashboard/billing",
    icon: Bill,
  },
];
