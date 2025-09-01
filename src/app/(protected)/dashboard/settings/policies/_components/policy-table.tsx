"use client";

import React from "react";
import CardContainer from "@/components/atoms/card-container";
import PaginationComponent from "@/components/molecules/pagination-component";
import SearchBar from "@/components/molecules/search-bar";
import CommonTable from "@/components/templates/common-table";
import { policyColumns } from "./policy-column";
import { Policy } from "./types";

// Mock data for demonstration
const mockPolicies: Policy[] = [
  {
    id: "1",
    title: "Attendance Policy",
    description: "Students are required to maintain a minimum 95% attendance rate. Excessive absences may result in academic probation or dismissal from the program.",
    status: "active",
    created_at: new Date("2024-01-15T10:30:00"),
  },
  {
    id: "2",
    title: "Code of Conduct",
    description: "All students must adhere to the studio's code of conduct including respectful behavior, proper dress code, and maintaining a positive learning environment.",
    status: "active",
    created_at: new Date("2024-01-14T14:20:00"),
  },
  {
    id: "3",
    title: "Payment Policy",
    description: "Tuition fees are due by the 5th of each month. Late payments will incur a 5% penalty fee. Payment plans are available upon request.",
    status: "active",
    created_at: new Date("2024-01-13T09:15:00"),
  },
  {
    id: "4",
    title: "Refund Policy",
    description: "Refunds are available within 7 days of enrollment. After this period, credits may be applied to future classes based on circumstances.",
    status: "draft",
    created_at: new Date("2024-01-12T16:45:00"),
  },
  {
    id: "5",
    title: "Health and Safety",
    description: "Students must follow all health and safety guidelines including proper equipment usage, emergency procedures, and reporting of any incidents.",
    status: "active",
    created_at: new Date("2024-01-11T11:30:00"),
  },
  {
    id: "6",
    title: "Equipment Usage",
    description: "Studio equipment must be used responsibly and returned in good condition. Damage to equipment may result in repair or replacement charges.",
    status: "active",
    created_at: new Date("2024-01-10T13:20:00"),
  },
  {
    id: "7",
    title: "Privacy Policy",
    description: "Student information is kept confidential and only shared with authorized personnel. Photography and video recording require written consent.",
    status: "draft",
    created_at: new Date("2024-01-09T15:10:00"),
  },
  {
    id: "8",
    title: "Communication Policy",
    description: "All official communication will be conducted through designated channels. Parents will receive regular updates on student progress.",
    status: "active",
    created_at: new Date("2024-01-08T08:45:00"),
  },
  {
    id: "9",
    title: "Makeup Class Policy",
    description: "Makeup classes are available for excused absences with 24-hour advance notice. Limited spots available on a first-come, first-served basis.",
    status: "active",
    created_at: new Date("2024-01-07T12:30:00"),
  },
  {
    id: "10",
    title: "Termination Policy",
    description: "Either party may terminate enrollment with 30 days written notice. Immediate termination may occur for violation of studio policies.",
    status: "draft",
    created_at: new Date("2024-01-06T14:15:00"),
  },
];

const PolicyTable = () => {
  return (
    <CardContainer className="mb-6">
      <div className="flex items-start justify-between mb-4">
        <SearchBar />
      </div>

      <CommonTable
        columns={policyColumns}
        data={mockPolicies}
        isLoading={false}
      />
      <div className="flex justify-end mt-3">
        <PaginationComponent />
      </div>
    </CardContainer>
  );
};

export default PolicyTable;
