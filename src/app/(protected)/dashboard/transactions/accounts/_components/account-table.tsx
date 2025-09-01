"use client";

import React from "react";
import CardContainer from "@/components/atoms/card-container";
import PaginationComponent from "@/components/molecules/pagination-component";
import SearchBar from "@/components/molecules/search-bar";
import CommonTable from "@/components/templates/common-table";
import { accountColumns } from "./account-column";
import { Account } from "./types";

// Mock data for demonstration
const mockAccounts: Account[] = [
  {
    id: "1",
    name: "Main Cash Account",
    type: "cash",
    openingBalance: 5000.0,
    currentBalance: 5247.5,
    isDefault: true,
    status: "active",
    created_at: new Date("2024-01-15T10:30:00"),
  },
  {
    id: "2",
    name: "Business Bank Account",
    type: "bank",
    openingBalance: 25000.0,
    currentBalance: 28450.75,
    isDefault: false,
    status: "active",
    created_at: new Date("2024-01-14T14:20:00"),
  },
  {
    id: "3",
    name: "Petty Cash Fund",
    type: "petty-cash",
    openingBalance: 500.0,
    currentBalance: 127.25,
    isDefault: false,
    status: "active",
    created_at: new Date("2024-01-13T09:15:00"),
  },
  {
    id: "4",
    name: "Emergency Savings",
    type: "savings",
    openingBalance: 10000.0,
    currentBalance: 10500.0,
    isDefault: false,
    status: "active",
    created_at: new Date("2024-01-12T16:45:00"),
  },
  {
    id: "5",
    name: "Business Credit Card",
    type: "credit-card",
    openingBalance: 0.0,
    currentBalance: -1250.0,
    isDefault: false,
    status: "active",
    created_at: new Date("2024-01-11T11:30:00"),
  },
  {
    id: "6",
    name: "Old Cash Register",
    type: "cash",
    openingBalance: 2000.0,
    currentBalance: 2000.0,
    isDefault: false,
    status: "inactive",
    created_at: new Date("2024-01-10T13:20:00"),
  },
  {
    id: "7",
    name: "Secondary Bank Account",
    type: "bank",
    openingBalance: 15000.0,
    currentBalance: 16789.3,
    isDefault: false,
    status: "active",
    created_at: new Date("2024-01-09T15:10:00"),
  },
  {
    id: "8",
    name: "Equipment Fund",
    type: "savings",
    openingBalance: 8000.0,
    currentBalance: 8450.0,
    isDefault: false,
    status: "inactive",
    created_at: new Date("2024-01-08T08:45:00"),
  },
];

const AccountTable = () => {
  return (
    <CardContainer className="mb-6">
      <div className="flex items-start justify-between mb-4">
        <SearchBar />
      </div>

      <CommonTable
        columns={accountColumns}
        data={mockAccounts}
        isLoading={false}
      />
      <div className="flex justify-end mt-3">
        <PaginationComponent />
      </div>
    </CardContainer>
  );
};

export default AccountTable;
