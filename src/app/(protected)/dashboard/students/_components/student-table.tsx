"use client";

import React from "react";
import CardContainer from "@/components/atoms/card-container";
import PaginationComponent from "@/components/molecules/pagination-component";
import SearchBar from "@/components/molecules/search-bar";
import CommonTable from "@/components/templates/common-table";
import { studentColumn } from "./student-column";

const StudentTable = () => {
  return (
    <CardContainer className="mb-6">
      <div className="flex items-start justify-between mb-4">
        <SearchBar />
      </div>

      <CommonTable
        columns={studentColumn}
        data={dummyStudents}
        isLoading={false}
      />
      <div className="flex justify-end mt-3">
        <PaginationComponent />
      </div>
    </CardContainer>
  );
};

export default StudentTable;

export type Student = {
  family: string;
  firstName: string;
  lastName: string;
  gender: "male" | "female" | "other";
  dateOfBirth: string;
  phone: string;
  email: string;
  schoolName: string;
  tshirtSize: "small" | "medium" | "large";
  skillNote: string;
};
export const dummyStudents: Student[] = [
  {
    family: "Smith",
    firstName: "John",
    lastName: "Doe",
    gender: "male",
    dateOfBirth: "2010-05-20",
    phone: "9876543210",
    email: "john.doe@example.com",
    schoolName: "Greenwood High",
    tshirtSize: "medium",
    skillNote: "Good at basketball and painting.",
  },
  {
    family: "Johnson",
    firstName: "Emily",
    lastName: "Clark",
    gender: "female",
    dateOfBirth: "2011-09-10",
    phone: "9123456789",
    email: "emily.clark@example.com",
    schoolName: "Springfield Elementary",
    tshirtSize: "small",
    skillNote: "Excellent in music and math competitions.",
  },
];
