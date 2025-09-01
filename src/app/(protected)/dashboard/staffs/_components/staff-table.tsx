"use client";

import React from "react";
import CardContainer from "@/components/atoms/card-container";
import PaginationComponent from "@/components/molecules/pagination-component";
import SearchBar from "@/components/molecules/search-bar";
import CommonTable from "@/components/templates/common-table";
import { staffColumn } from "./staff-column";

const StaffTable = () => {
  return (
    <CardContainer className="mb-6">
      <div className="flex items-start justify-between mb-4">
        <SearchBar />
      </div>

      <CommonTable columns={staffColumn} data={dummyStaff} isLoading={false} />
      <div className="flex justify-end mt-3">
        <PaginationComponent />
      </div>
    </CardContainer>
  );
};

export default StaffTable;

export type Staff = {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  role: string;
  status: "Active" | "Inactive";
  emergencyContactName: string;
  emergencyContactPhone: string;
  dateJoined: string;
  department: string;
};

export const dummyStaff: Staff[] = [
  {
    id: "1",
    firstName: "John",
    lastName: "Smith",
    phone: "555-0123",
    email: "john.smith@studio.com",
    role: "Instructor",
    status: "Active",
    emergencyContactName: "Jane Smith",
    emergencyContactPhone: "555-0124",
    dateJoined: "2024-01-15",
    department: "Dance",
  },
  {
    id: "2",
    firstName: "Sarah",
    lastName: "Johnson",
    phone: "555-0125",
    email: "sarah.johnson@studio.com",
    role: "Manager",
    status: "Active",
    emergencyContactName: "Mike Johnson",
    emergencyContactPhone: "555-0126",
    dateJoined: "2023-08-20",
    department: "Administration",
  },
  {
    id: "3",
    firstName: "Michael",
    lastName: "Brown",
    phone: "555-0127",
    email: "michael.brown@studio.com",
    role: "Assistant Instructor",
    status: "Inactive",
    emergencyContactName: "Lisa Brown",
    emergencyContactPhone: "555-0128",
    dateJoined: "2024-03-10",
    department: "Music",
  },
];
