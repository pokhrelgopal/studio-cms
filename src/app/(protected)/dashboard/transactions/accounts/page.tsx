"use client";

import React, { Suspense } from "react";
import { Add } from "iconsax-reactjs";

import SheetWrapper from "@/components/organisms/sheet-wrapper";
import { Button } from "@/components/ui/button";
import PageLoader from "@/components/molecules/page-loader";
import Heading from "@/components/atoms/heading";
import AddAccountForm from "./_components/add-account-form";
import AccountTable from "./_components/account-table";

const AccountsPage = () => {
  const [isAddAccountSheetOpen, setIsAddAccountSheetOpen] =
    React.useState(false);

  return (
    <Suspense fallback={<PageLoader />}>
      <SheetWrapper
        className="!w-[90vw] !md:w-[40vw]"
        isOpen={isAddAccountSheetOpen}
        setIsOpen={setIsAddAccountSheetOpen}
        title="Add Account"
      >
        <AddAccountForm />
      </SheetWrapper>

      <div className="flex items-center justify-between">
        <Heading className="mb-2" text="Accounts" />
        <Button
          iconLeft={<Add className="size-6" />}
          className="rounded-full"
          onClick={() => setIsAddAccountSheetOpen(true)}
        >
          Add Account
        </Button>
      </div>

      <AccountTable />
    </Suspense>
  );
};

export default AccountsPage;
