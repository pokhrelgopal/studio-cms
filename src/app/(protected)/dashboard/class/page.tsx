"use client";

import React, { Suspense } from "react";
import { Add } from "iconsax-reactjs";

import { Button } from "@/components/ui/button";
import PageLoader from "@/components/molecules/page-loader";

import Heading from "@/components/atoms/heading";
import ClassTable from "./_components/class-table";
import Link from "next/link";

const ClassPage = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <div className="flex items-center justify-between">
        <Heading className="mb-2" text="Class Management" />
        <Link href={"/dashboard/class/add"} passHref>
          <Button
            iconLeft={<Add className="size-6" />}
            className="rounded-full"
          >
            Add Class
          </Button>
        </Link>
      </div>
      <ClassTable />
    </Suspense>
  );
};

export default ClassPage;
