import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Check, BellOff, Bell } from "lucide-react";
import CardContainer from "@/components/atoms/card-container";
import Heading from "@/components/atoms/heading";

const notifications = [
  {
    id: 1,
    message: "Ram Rai just registered on the platform.",
    time: "2 minutes ago",
    read: false,
  },
  {
    id: 2,
    message: "Sita Sharma completed a payment of $250 USD.",
    time: "5 minutes ago",
    read: false,
  },
  {
    id: 3,
    message: "Anil Gurung has deleted his account.",
    time: "10 minutes ago",
    read: true,
  },
  {
    id: 4,
    message: "New event registration: Mina Thapa joined 'Tech Workshop 2025'.",
    time: "15 minutes ago",
    read: true,
  },
  {
    id: 5,
    message: "Payout successful: You sent $1205 USD to StackBros LLC.",
    time: "1 hour ago",
    read: false,
  },
  {
    id: 6,
    message: "Platform update: New features have been deployed.",
    time: "3 hours ago",
    read: true,
  },
  {
    id: 7,
    message: "Order cancelled: Order #45789 by Bikash Shrestha was cancelled.",
    time: "5 hours ago",
    read: false,
  },
  {
    id: 8,
    message: "Ram Rai just updated his profile information.",
    time: "6 hours ago",
    read: true,
  },
];

export default function NotificationsPage() {
  return (
    <div className="flex justify-center w-full">
      <CardContainer className="w-full mx-auto max-w-3xl">
        <div className="flex flex-row items-center justify-between pb-4">
          <Heading text="Notifications" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <MoreHorizontal className="h-5 w-5" />
                <span className="sr-only">Notification actions</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Check className="mr-2 h-4 w-4" />
                <span>Mark all read</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BellOff className="mr-2 h-4 w-4" />
                <span>Push notifications</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell className="mr-2 h-4 w-4" />
                <span>Email notifications</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="p-0 space-y-2">
          {notifications.map((notification) => (
            <div key={notification.id}>
              <div
                className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer ${!notification.read ? "bg-gray-100" : "hover:bg-gray-50"}`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 font-semibold text-gray-600 flex-shrink-0"></div>
                <div className="grid gap-1 flex-grow">
                  <p className="font-normal md:font-medium leading-none text-sm md:text-md">
                    {notification.message}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {notification.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContainer>
    </div>
  );
}
