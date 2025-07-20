"use client";

import React, { Suspense } from "react";
import { Add } from "iconsax-reactjs";

import { Button } from "@/components/ui/button";
import PageLoader from "@/components/molecules/page-loader";
import FamilyTable from "./_components/family-table";
import Heading from "@/components/atoms/heading";
import Link from "next/link";

const FamilyPage = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <div className="flex items-center justify-between">
        <Heading className="mb-2" text="Families" />
        <Link href={"/dashboard/families/add"} passHref>
          <Button
            iconLeft={<Add className="size-6" />}
            className="rounded-full"
          >
            Add New Family
          </Button>
        </Link>
      </div>
      <FamilyTable />
    </Suspense>
  );
};

export default FamilyPage;
