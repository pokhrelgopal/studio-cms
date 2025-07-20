"use client";

import React from "react";
import CardContainer from "@/components/atoms/card-container";
import PaginationComponent from "@/components/molecules/pagination-component";
import SearchBar from "@/components/molecules/search-bar";
import CommonTable from "@/components/templates/common-table";
import { classColumns } from "./class-column";
import { Class } from "./types";

// Mock data for demonstration
const mockClasses: Class[] = [
  {
    id: "1",
    className: "Beginner Yoga",
    instructor: "Sarah Johnson",
    category: "Yoga",
    classDescription:
      "Introduction to basic yoga poses and breathing techniques",
    studioBranch: "Downtown Studio",
    startDate: new Date("2025-08-01"),
    time: "09:00 AM",
    days: ["Monday", "Wednesday", "Friday"],
    classDuration: "60 minutes",
    registrationStartDate: new Date("2025-07-15"),
    hasRegistrationFee: "Yes",
    classFee: 120,
    classCapacity: 20,
    feeTerms: "Monthly",
    studentsEnrolled: 15,
    status: "Active",
  },
  {
    id: "2",
    className: "Advanced Pilates",
    instructor: "Mike Davis",
    category: "Pilates",
    classDescription: "High-intensity pilates for experienced practitioners",
    studioBranch: "Uptown Studio",
    startDate: new Date("2025-07-20"),
    time: "06:00 PM",
    days: ["Tuesday", "Thursday"],
    classDuration: "45 minutes",
    registrationStartDate: new Date("2025-07-05"),
    hasRegistrationFee: "No",
    classFee: 150,
    classCapacity: 15,
    feeTerms: "Per Session",
    studentsEnrolled: 12,
    status: "Upcoming",
  },
  {
    id: "3",
    className: "Dance Fitness",
    instructor: "Emma Rodriguez",
    category: "Dance",
    classDescription: "Fun cardio workout combining dance moves and fitness",
    studioBranch: "Central Studio",
    startDate: new Date("2025-07-25"),
    time: "07:00 PM",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    classDuration: "55 minutes",
    hasRegistrationFee: "Yes",
    classFee: 100,
    classCapacity: 25,
    feeTerms: "Weekly",
    studentsEnrolled: 8,
    status: "Active",
  },
];

const ClassTable = () => {
  return (
    <CardContainer className="mb-6">
      <div className="flex items-start justify-between mb-4">
        <SearchBar />
      </div>

      <CommonTable
        columns={classColumns}
        data={mockClasses}
        isLoading={false}
      />
      <div className="flex justify-end mt-3">
        <PaginationComponent />
      </div>
    </CardContainer>
  );
};

export default ClassTable;
