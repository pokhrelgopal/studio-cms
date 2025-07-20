"use client";

import React from "react";

import { Account } from "./types";
import SheetWrapper from "@/components/organisms/sheet-wrapper";
import ActionDropdownMenu from "@/components/organisms/action-dropdown-menu";
import ConfirmationDialog from "@/components/organisms/confirmation-dialog";
import { Badge } from "@/components/ui/badge";

type Props = {
  account: Account;
};

const AccountRowAction = ({ account }: Props) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false);
  const [isAccountDetailsOpen, setIsAccountDetailsOpen] =
    React.useState(false);

  return (
    <>
      <ActionDropdownMenu
        onView={() => setIsAccountDetailsOpen(true)}
        onEdit={() => console.log("Edit", account)}
        onDelete={() => setIsDeleteDialogOpen(true)}
      />

      <ConfirmationDialog
        isOpen={isDeleteDialogOpen}
        setIsOpen={setIsDeleteDialogOpen}
        title="Delete Account"
        message={`Are you sure you want to delete "${account.name}" account? This action cannot be undone.`}
        onConfirm={() => {
          console.log("Deleting:", account);
        }}
      />

      <SheetWrapper
        className="w-full lg:w-[26vw]"
        isOpen={isAccountDetailsOpen}
        setIsOpen={setIsAccountDetailsOpen}
        title="Account Details"
      >
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">
                Account Information
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Name:</span>
                  <span className="text-sm">{account.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Type:</span>
                  <span className="text-sm capitalize">
                    {account.type.replace('-', ' ')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Opening Balance:</span>
                  <span className="text-sm font-medium">
                    ${account.openingBalance.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Current Balance:</span>
                  <span className={`text-sm font-medium ${
                    account.currentBalance >= 0 ? "text-green-600" : "text-red-600"
                  }`}>
                    ${account.currentBalance.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Default Account:</span>
                  <span className="text-sm">
                    {account.isDefault ? "Yes" : "No"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Status:</span>
                  <Badge
                    variant={
                      account.status === "active" ? "default" : "secondary"
                    }
                  >
                    {account.status}
                  </Badge>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-2">
                Audit Information
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Created:</span>
                  <span className="text-sm">
                    {account.created_at.toLocaleDateString()} at{" "}
                    {account.created_at.toLocaleTimeString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SheetWrapper>
    </>
  );
};

export default AccountRowAction;
