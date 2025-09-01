"use client";

import React, { Suspense } from "react";
import { Add } from "iconsax-reactjs";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import PageLoader from "@/components/molecules/page-loader";

import Heading from "@/components/atoms/heading";
import StudentTable from "./_components/student-table";

const StudentPage = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <div className="flex items-center justify-between">
        <Heading className="mb-2" text="Student Management" />
        <Link href={"/dashboard/students/add"}>
          <Button
            iconLeft={<Add className="size-6" />}
            className="rounded-full"
          >
            Add Student
          </Button>
        </Link>
      </div>
      <StudentTable />
    </Suspense>
  );
};

export default StudentPage;
