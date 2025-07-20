"use client";

import React, { Suspense } from "react";
import { Add } from "iconsax-reactjs";

import SheetWrapper from "@/components/organisms/sheet-wrapper";
import { Button } from "@/components/ui/button";
import PageLoader from "@/components/molecules/page-loader";
import Heading from "@/components/atoms/heading";
import AddPettyCashForm from "./_components/add-petty-cash-form";
import PettyCashTable from "./_components/petty-cash-table";

const PettyCashPage = () => {
  const [isAddPettyCashSheetOpen, setIsAddPettyCashSheetOpen] =
    React.useState(false);

  return (
    <Suspense fallback={<PageLoader />}>
      <SheetWrapper
        className="!w-[90vw] !md:w-[40vw]"
        isOpen={isAddPettyCashSheetOpen}
        setIsOpen={setIsAddPettyCashSheetOpen}
        title="Add Petty Cash Entry"
      >
        <AddPettyCashForm onSuccess={() => setIsAddPettyCashSheetOpen(false)} />
      </SheetWrapper>

      <div className="flex items-center justify-between">
        <Heading className="mb-2" text="Petty Cash Management" />
        <Button
          iconLeft={<Add className="size-6" />}
          className="rounded-full"
          onClick={() => setIsAddPettyCashSheetOpen(true)}
        >
          Add Petty Cash
        </Button>
      </div>

      <PettyCashTable />
    </Suspense>
  );
};

export default PettyCashPage;
