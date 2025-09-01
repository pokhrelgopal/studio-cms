"use client";

import React from "react";
import CardContainer from "@/components/atoms/card-container";
import PaginationComponent from "@/components/molecules/pagination-component";
import SearchBar from "@/components/molecules/search-bar";
import CommonTable from "@/components/templates/common-table";
import { transactionColumns } from "./transaction-column";
import { Transaction } from "./types";

// Mock data for demonstration
const mockTransactions: Transaction[] = [
  {
    id: "1",
    amount: "120.00",
    category: "Tuition",
    transaction_type: "income",
    account: "bank",
    description: "Monthly tuition payment for John Doe",
    reference: "TXN-001",
    date: new Date("2024-01-15"),
    status: "paid",
    created_at: new Date("2024-01-15T10:30:00"),
    family_name: "Doe Family",
    student_name: "John Doe",
  },
  {
    id: "2",
    amount: "50.00",
    category: "Registration",
    transaction_type: "income",
    account: "cash",
    description: "Registration fee for new student",
    reference: "TXN-002",
    date: new Date("2024-01-14"),
    status: "paid",
    created_at: new Date("2024-01-14T14:20:00"),
    family_name: "Smith Family",
    student_name: "Emma Smith",
  },
  {
    id: "3",
    amount: "200.00",
    category: "Petty Cash",
    transaction_type: "expense",
    account: "petty-cash",
    description: "Office supplies and materials",
    reference: "TXN-003",
    date: new Date("2024-01-13"),
    status: "paid",
    created_at: new Date("2024-01-13T09:15:00"),
  },
  {
    id: "4",
    amount: "75.00",
    category: "Uniform",
    transaction_type: "income",
    account: "bank",
    description: "Uniform purchase",
    reference: "TXN-004",
    date: new Date("2024-01-12"),
    status: "partial",
    created_at: new Date("2024-01-12T16:45:00"),
    family_name: "Johnson Family",
    student_name: "Mike Johnson",
  },
  {
    id: "5",
    amount: "150.00",
    category: "Sports",
    transaction_type: "income",
    account: "bank",
    description: "Sports program enrollment fee",
    reference: "TXN-005",
    date: new Date("2024-01-11"),
    status: "unpaid",
    created_at: new Date("2024-01-11T11:30:00"),
    family_name: "Brown Family",
    student_name: "Sarah Brown",
  },
  {
    id: "6",
    amount: "300.00",
    category: "Library",
    transaction_type: "expense",
    account: "bank",
    description: "New books and library resources",
    reference: "TXN-006",
    date: new Date("2024-01-10"),
    status: "paid",
    created_at: new Date("2024-01-10T13:20:00"),
  },
  {
    id: "7",
    amount: "90.00",
    category: "Class Enrollment Fee",
    transaction_type: "income",
    account: "cash",
    description: "Art class enrollment",
    reference: "TXN-007",
    date: new Date("2024-01-09"),
    status: "paid",
    created_at: new Date("2024-01-09T15:10:00"),
    family_name: "Wilson Family",
    student_name: "Alex Wilson",
  },
  {
    id: "8",
    amount: "180.00",
    category: "Tuition",
    transaction_type: "income",
    account: "bank",
    description: "Monthly tuition payment",
    reference: "TXN-008",
    date: new Date("2024-01-08"),
    status: "paid",
    created_at: new Date("2024-01-08T08:45:00"),
    family_name: "Davis Family",
    student_name: "Lisa Davis",
  },
];

const TransactionTable = () => {
  return (
    <CardContainer className="mb-6">
      <div className="flex items-start justify-between mb-4">
        <SearchBar />
      </div>

      <CommonTable
        columns={transactionColumns}
        data={mockTransactions}
        isLoading={false}
      />
      <div className="flex justify-end mt-3">
        <PaginationComponent />
      </div>
    </CardContainer>
  );
};

export default TransactionTable;
