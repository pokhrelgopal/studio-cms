"use client";

import React from "react";
import CardContainer from "@/components/atoms/card-container";
import PaginationComponent from "@/components/molecules/pagination-component";
import SearchBar from "@/components/molecules/search-bar";
import CommonTable from "@/components/templates/common-table";
import { branchColumns } from "./branch-column";
import { Branch } from "./types";

// Mock data for demonstration
const mockBranches: Branch[] = [
  {
    id: "1",
    name: "Main Branch",
    addressLine1: "123 Main Street",
    addressLine2: "Suite 100",
    city: "New York",
    state: "New York",
    zip: "10001",
    phone: "(555) 123-4567",
    email: "main@studio.com",
    status: "active",
    created_at: new Date("2024-01-15T10:30:00"),
  },
  {
    id: "2",
    name: "Downtown Branch",
    addressLine1: "456 Broadway Avenue",
    city: "Los Angeles",
    state: "California",
    zip: "90210",
    phone: "(555) 987-6543",
    email: "downtown@studio.com",
    status: "active",
    created_at: new Date("2024-01-14T14:20:00"),
  },
  {
    id: "3",
    name: "West Side Branch",
    addressLine1: "789 Oak Street",
    addressLine2: "Floor 2",
    city: "Chicago",
    state: "Illinois",
    zip: "60601",
    phone: "(555) 456-7890",
    status: "draft",
    created_at: new Date("2024-01-13T09:15:00"),
  },
  {
    id: "4",
    name: "North Branch",
    addressLine1: "321 Pine Avenue",
    city: "Houston",
    state: "Texas",
    zip: "77001",
    phone: "(555) 321-0987",
    email: "north@studio.com",
    status: "active",
    created_at: new Date("2024-01-12T16:45:00"),
  },
  {
    id: "5",
    name: "South Branch",
    addressLine1: "654 Elm Street",
    city: "Phoenix",
    state: "Arizona",
    zip: "85001",
    phone: "(555) 654-3210",
    status: "draft",
    created_at: new Date("2024-01-11T11:30:00"),
  },
  {
    id: "6",
    name: "East Branch",
    addressLine1: "987 Maple Drive",
    addressLine2: "Building A",
    city: "Philadelphia",
    state: "Pennsylvania",
    zip: "19101",
    phone: "(555) 789-0123",
    email: "east@studio.com",
    status: "active",
    created_at: new Date("2024-01-10T13:20:00"),
  },
  {
    id: "7",
    name: "Central Branch",
    addressLine1: "147 Cedar Lane",
    city: "San Antonio",
    state: "Texas",
    zip: "78201",
    phone: "(555) 147-2580",
    status: "active",
    created_at: new Date("2024-01-09T15:10:00"),
  },
  {
    id: "8",
    name: "Suburban Branch",
    addressLine1: "258 Birch Road",
    city: "San Diego",
    state: "California",
    zip: "92101",
    phone: "(555) 258-1470",
    email: "suburban@studio.com",
    status: "draft",
    created_at: new Date("2024-01-08T08:45:00"),
  },
];

const BranchTable = () => {
  return (
    <CardContainer className="mb-6">
      <div className="flex items-start justify-between mb-4">
        <SearchBar />
      </div>

      <CommonTable
        columns={branchColumns}
        data={mockBranches}
        isLoading={false}
      />
      <div className="flex justify-end mt-3">
        <PaginationComponent />
      </div>
    </CardContainer>
  );
};

export default BranchTable;
