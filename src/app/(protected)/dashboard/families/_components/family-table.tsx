"use client";

import React from "react";

import CardContainer from "@/components/atoms/card-container";
import PaginationComponent from "@/components/molecules/pagination-component";
import SearchBar from "@/components/molecules/search-bar";
import CommonTable from "@/components/templates/common-table";
import { familyColumns } from "./family-column";

const FamilyTable = () => {
  return (
    <CardContainer className="mb-6">
      <div className="flex items-start justify-between mb-4">
        <SearchBar />
      </div>

      <CommonTable
        columns={familyColumns}
        data={dummyFamilies}
        isLoading={false}
      />
      <div className="flex justify-end mt-3">
        <PaginationComponent />
      </div>
    </CardContainer>
  );
};

export default FamilyTable;

export type Family = {
  location?: string;
  family?: React.ReactNode;
  balance?: number;
  city?: string;
  state?: string;
  zip?: string;
  students?: number;
  status?: string;
};

export const dummyFamilies: Family[] = [
  {
    location: "123 Main St",
    family: <span className="font-semibold">Doe Family</span>,
    balance: 150.75,
    city: "Springfield",
    state: "IL",
    zip: "62701",
    students: 3,
    status: "Active",
  },
];
