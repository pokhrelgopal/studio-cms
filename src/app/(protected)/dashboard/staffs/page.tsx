"use client";

import React, { Suspense } from "react";
import { Add } from "iconsax-reactjs";

import { Button } from "@/components/ui/button";
import PageLoader from "@/components/molecules/page-loader";

import Heading from "@/components/atoms/heading";
import StaffTable from "./_components/staff-table";
import Link from "next/link";

const StaffPage = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <div className="flex items-center justify-between">
        <Heading className="mb-2" text="Staff Management" />
        <Link href="/dashboard/staffs/add">
          <Button
            iconLeft={<Add className="size-6" />}
            className="rounded-full"
          >
            Add Staff
          </Button>
        </Link>
      </div>
      <StaffTable />
    </Suspense>
  );
};

export default StaffPage;
