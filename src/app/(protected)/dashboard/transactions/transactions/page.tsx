"use client";

import React, { Suspense } from "react";
import { Add } from "iconsax-reactjs";

import SheetWrapper from "@/components/organisms/sheet-wrapper";
import { Button } from "@/components/ui/button";
import PageLoader from "@/components/molecules/page-loader";
import Heading from "@/components/atoms/heading";
import AddTransactionForm from "./_components/add-transaction-form";
import TransactionTable from "./_components/transaction-table";

const AllTransactionsPage = () => {
  const [isAddTransactionSheetOpen, setIsAddTransactionSheetOpen] =
    React.useState(false);

  return (
    <Suspense fallback={<PageLoader />}>
      <SheetWrapper
        className="!w-[90vw] !md:w-[40vw]"
        isOpen={isAddTransactionSheetOpen}
        setIsOpen={setIsAddTransactionSheetOpen}
        title="Add Transaction"
      >
        <AddTransactionForm
          onSuccess={() => setIsAddTransactionSheetOpen(false)}
        />
      </SheetWrapper>

      <div className="flex items-center justify-between">
        <Heading className="mb-2" text="All Transactions" />
        <Button
          iconLeft={<Add className="size-6" />}
          className="rounded-full"
          onClick={() => setIsAddTransactionSheetOpen(true)}
        >
          Add Transaction
        </Button>
      </div>

      <TransactionTable />
    </Suspense>
  );
};

export default AllTransactionsPage;
