"use client";

import React from "react";
import CardContainer from "@/components/atoms/card-container";
import PaginationComponent from "@/components/molecules/pagination-component";
import SearchBar from "@/components/molecules/search-bar";
import CommonTable from "@/components/templates/common-table";
import { pettyCashColumns } from "./petty-cash-column";
import { PettyCash } from "./types";

// Mock data for demonstration
const mockPettyCashEntries: PettyCash[] = [
  {
    id: "1",
    amount: "25.50",
    account: "petty-cash",
    description: "Office supplies - pens and paper",
    date: new Date("2024-01-15"),
    created_at: new Date("2024-01-15T10:30:00"),
  },
  {
    id: "2",
    amount: "15.00",
    account: "cash",
    description: "Coffee and snacks for staff meeting",
    date: new Date("2024-01-14"),
    created_at: new Date("2024-01-14T14:20:00"),
  },
  {
    id: "3",
    amount: "40.00",
    account: "petty-cash",
    description: "Cleaning supplies",
    date: new Date("2024-01-13"),
    created_at: new Date("2024-01-13T09:15:00"),
  },
  {
    id: "4",
    amount: "12.75",
    account: "cash",
    description: "Postage stamps",
    date: new Date("2024-01-12"),
    created_at: new Date("2024-01-12T16:45:00"),
  },
  {
    id: "5",
    amount: "30.00",
    account: "petty-cash",
    description: "Taxi fare for urgent document delivery",
    date: new Date("2024-01-11"),
    created_at: new Date("2024-01-11T11:30:00"),
  },
  {
    id: "6",
    amount: "8.50",
    account: "cash",
    description: "Small repair materials",
    date: new Date("2024-01-10"),
    created_at: new Date("2024-01-10T13:20:00"),
  },
  {
    id: "7",
    amount: "22.00",
    account: "petty-cash",
    description: "Emergency food supplies",
    date: new Date("2024-01-09"),
    created_at: new Date("2024-01-09T15:10:00"),
  },
  {
    id: "8",
    amount: "18.25",
    account: "cash",
    description: "First aid kit refill",
    date: new Date("2024-01-08"),
    created_at: new Date("2024-01-08T08:45:00"),
  },
];

const PettyCashTable = () => {
  return (
    <CardContainer className="mb-6">
      <div className="flex items-start justify-between mb-4">
        <SearchBar />
      </div>

      <CommonTable
        columns={pettyCashColumns}
        data={mockPettyCashEntries}
        isLoading={false}
      />
      <div className="flex justify-end mt-3">
        <PaginationComponent />
      </div>
    </CardContainer>
  );
};

export default PettyCashTable;
