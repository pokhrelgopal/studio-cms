"use client";

import React, { Suspense } from "react";
import { Add } from "iconsax-reactjs";

import SheetWrapper from "@/components/organisms/sheet-wrapper";
import { Button } from "@/components/ui/button";
import PageLoader from "@/components/molecules/page-loader";
import Heading from "@/components/atoms/heading";
import AddBranchForm from "./_components/add-branch-form";
import BranchTable from "./_components/branch-table";

const BranchesPage = () => {
  const [isAddBranchSheetOpen, setIsAddBranchSheetOpen] = React.useState(false);

  return (
    <Suspense fallback={<PageLoader />}>
      <SheetWrapper
        className="!w-[90vw] md:!w-[40vw]"
        isOpen={isAddBranchSheetOpen}
        setIsOpen={setIsAddBranchSheetOpen}
        title="Add Branch"
      >
        <AddBranchForm onSuccess={() => setIsAddBranchSheetOpen(false)} />
      </SheetWrapper>

      <div className="flex items-center justify-between">
        <Heading className="mb-2" text="Branches" />
        <Button
          iconLeft={<Add className="size-6" />}
          className="rounded-full"
          onClick={() => setIsAddBranchSheetOpen(true)}
        >
          Add Branch
        </Button>
      </div>

      <BranchTable />
    </Suspense>
  );
};

export default BranchesPage;
