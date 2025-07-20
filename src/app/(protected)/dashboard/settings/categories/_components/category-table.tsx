"use client";

import React from "react";
import CardContainer from "@/components/atoms/card-container";
import PaginationComponent from "@/components/molecules/pagination-component";
import SearchBar from "@/components/molecules/search-bar";
import CommonTable from "@/components/templates/common-table";
import { categoryColumns } from "./category-column";
import { Category } from "./types";

// Mock data for demonstration
const mockCategories: Category[] = [
  {
    id: "1",
    name: "Tuition",
    description: "Monthly tuition fees for enrolled students",
    status: "active",
    created_at: new Date("2024-01-15T10:30:00"),
  },
  {
    id: "2",
    name: "Registration",
    description: "One-time registration fee for new students",
    status: "active",
    created_at: new Date("2024-01-14T14:20:00"),
  },
  {
    id: "3",
    name: "Uniform",
    description: "School uniform and dress code related purchases",
    status: "active",
    created_at: new Date("2024-01-13T09:15:00"),
  },
  {
    id: "4",
    name: "Sports",
    description: "Sports program fees and athletic activities",
    status: "draft",
    created_at: new Date("2024-01-12T16:45:00"),
  },
  {
    id: "5",
    name: "Library",
    description: "Library fees, book rentals, and late charges",
    status: "active",
    created_at: new Date("2024-01-11T11:30:00"),
  },
  {
    id: "6",
    name: "Class Enrollment Fee",
    description: "Special class enrollment and course fees",
    status: "active",
    created_at: new Date("2024-01-10T13:20:00"),
  },
  {
    id: "7",
    name: "Transportation",
    description: "School bus and transportation services",
    status: "draft",
    created_at: new Date("2024-01-09T15:10:00"),
  },
  {
    id: "8",
    name: "Meals",
    description: "Lunch program and meal services",
    status: "active",
    created_at: new Date("2024-01-08T08:45:00"),
  },
  {
    id: "9",
    name: "Field Trips",
    description: "Educational field trips and excursions",
    status: "active",
    created_at: new Date("2024-01-07T12:30:00"),
  },
  {
    id: "10",
    name: "Technology Fee",
    description: "Computer lab, software, and technology resources",
    status: "draft",
    created_at: new Date("2024-01-06T14:15:00"),
  },
];

const CategoryTable = () => {
  return (
    <CardContainer className="mb-6">
      <div className="flex items-start justify-between mb-4">
        <SearchBar />
      </div>

      <CommonTable
        columns={categoryColumns}
        data={mockCategories}
        isLoading={false}
      />
      <div className="flex justify-end mt-3">
        <PaginationComponent />
      </div>
    </CardContainer>
  );
};

export default CategoryTable;
