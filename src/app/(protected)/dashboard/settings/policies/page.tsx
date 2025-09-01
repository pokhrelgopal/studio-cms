"use client";

import React, { Suspense } from "react";
import { Add } from "iconsax-reactjs";

import { Button } from "@/components/ui/button";
import PageLoader from "@/components/molecules/page-loader";
import Heading from "@/components/atoms/heading";
import PolicyTable from "./_components/policy-table";
import Link from "next/link";

const PoliciesPage = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <div className="flex items-center justify-between">
        <Heading className="mb-2" text="Policies" />
        <Link href="/dashboard/settings/policies/add">
          <Button
            iconLeft={<Add className="size-6" />}
            className="rounded-full"
          >
            Add Policy
          </Button>
        </Link>
      </div>

      <PolicyTable />
    </Suspense>
  );
};

export default PoliciesPage;
