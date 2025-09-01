import CardContainer from "@/components/atoms/card-container";

import {
  DollarSign,
  Users,
  ShoppingCart,
  FileText,
  Layers,
  ClipboardCheck,
} from "lucide-react";
import { DashboardCard } from "./_components/dashboard-card";
import { UpcomingBirthdaysCard } from "./_components/upcoming-birthdays-card";
import { RevenueCollectionChart } from "./_components/revenue-collection-chart";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <CardContainer className="w-full bg-white p-4 rounded-lg shadow-sm">
          <DashboardCard
            icon={DollarSign}
            title="Total Transactions"
            value="$0.00"
            iconBgClass="bg-indigo-100"
            iconTextClass="text-indigo-600"
            change={{ percentage: "-100%", type: "decrease" }}
          />
        </CardContainer>
        <CardContainer className="w-full bg-white p-4 rounded-lg shadow-sm">
          <DashboardCard
            icon={Users}
            title="Total Families"
            value="0"
            iconBgClass="bg-purple-100"
            iconTextClass="text-purple-600"
            change={{ percentage: "-100%", type: "decrease" }}
          />
        </CardContainer>
        <CardContainer className="w-full bg-white p-4 rounded-lg shadow-sm">
          <DashboardCard
            icon={ShoppingCart}
            title="Total Enrollment"
            value="0"
            iconBgClass="bg-orange-100"
            iconTextClass="text-orange-600"
            change={{ percentage: "-100%", type: "decrease" }}
          />
        </CardContainer>
        <CardContainer className="w-full bg-white p-4 rounded-lg shadow-sm h-48">
          <UpcomingBirthdaysCard />
        </CardContainer>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <CardContainer className="w-full p-4 rounded-lg shadow-sm bg-purple-100">
          <DashboardCard
            icon={FileText}
            title="Unpaid Invoices"
            value="0"
            iconBgClass="bg-purple-200"
            iconTextClass="text-purple-700"
            valueColorClass="text-purple-800"
          />
        </CardContainer>
        <CardContainer className="w-full p-4 rounded-lg shadow-sm bg-orange-100">
          <DashboardCard
            icon={Layers}
            title="Total Classes"
            value="0"
            iconBgClass="bg-orange-200"
            iconTextClass="text-orange-700"
            valueColorClass="text-orange-800"
          />
        </CardContainer>
        <CardContainer className="w-full p-4 rounded-lg shadow-sm bg-green-100">
          <DashboardCard
            icon={ClipboardCheck}
            title="Total Staffs"
            value="0"
            iconBgClass="bg-green-200"
            iconTextClass="text-green-700"
            valueColorClass="text-green-800"
          />
        </CardContainer>
      </div>

      <RevenueCollectionChart />
    </div>
  );
}
