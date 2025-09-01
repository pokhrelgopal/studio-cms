"use client";

import React from "react";

import { PettyCash } from "./types";
import SheetWrapper from "@/components/organisms/sheet-wrapper";
import ActionDropdownMenu from "@/components/organisms/action-dropdown-menu";
import ConfirmationDialog from "@/components/organisms/confirmation-dialog";

type Props = {
  pettyCash: PettyCash;
};

const PettyCashRowAction = ({ pettyCash }: Props) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false);
  const [isPettyCashDetailsOpen, setIsPettyCashDetailsOpen] =
    React.useState(false);

  return (
    <>
      <ActionDropdownMenu
        onView={() => setIsPettyCashDetailsOpen(true)}
        onEdit={() => console.log("Edit", pettyCash)}
        onDelete={() => setIsDeleteDialogOpen(true)}
      />

      <ConfirmationDialog
        isOpen={isDeleteDialogOpen}
        setIsOpen={setIsDeleteDialogOpen}
        title="Delete Petty Cash Entry"
        message={`Are you sure you want to delete this petty cash entry? This action cannot be undone.`}
        onConfirm={() => {
          console.log("Deleting:", pettyCash);
        }}
      />

      <SheetWrapper
        className="w-full lg:w-[26vw]"
        isOpen={isPettyCashDetailsOpen}
        setIsOpen={setIsPettyCashDetailsOpen}
        title="Petty Cash Details"
      >
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">
                Petty Cash Information
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Date:</span>
                  <span className="text-sm">
                    {pettyCash.date.toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Account:</span>
                  <span className="text-sm capitalize">
                    {pettyCash.account}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Amount:</span>
                  <span className="text-sm font-medium text-red-600">
                    -${parseFloat(pettyCash.amount).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {pettyCash.description && (
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Description</h3>
                <p className="text-sm text-gray-600">{pettyCash.description}</p>
              </div>
            )}

            <div>
              <h3 className="font-medium text-gray-900 mb-2">
                Audit Information
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Created:</span>
                  <span className="text-sm">
                    {pettyCash.created_at.toLocaleDateString()} at{" "}
                    {pettyCash.created_at.toLocaleTimeString()}
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

export default PettyCashRowAction;
