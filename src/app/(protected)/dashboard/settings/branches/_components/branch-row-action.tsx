"use client";

import React from "react";

import { Branch } from "./types";
import SheetWrapper from "@/components/organisms/sheet-wrapper";
import ActionDropdownMenu from "@/components/organisms/action-dropdown-menu";
import ConfirmationDialog from "@/components/organisms/confirmation-dialog";
import { Badge } from "@/components/ui/badge";

type Props = {
  branch: Branch;
};

const BranchRowAction = ({ branch }: Props) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false);
  const [isBranchDetailsOpen, setIsBranchDetailsOpen] =
    React.useState(false);

  return (
    <>
      <ActionDropdownMenu
        onView={() => setIsBranchDetailsOpen(true)}
        onEdit={() => console.log("Edit", branch)}
        onDelete={() => setIsDeleteDialogOpen(true)}
      />

      <ConfirmationDialog
        isOpen={isDeleteDialogOpen}
        setIsOpen={setIsDeleteDialogOpen}
        title="Delete Branch"
        message={`Are you sure you want to delete "${branch.name}" branch? This action cannot be undone.`}
        onConfirm={() => {
          console.log("Deleting:", branch);
        }}
      />

      <SheetWrapper
        className="w-full lg:w-[26vw]"
        isOpen={isBranchDetailsOpen}
        setIsOpen={setIsBranchDetailsOpen}
        title="Branch Details"
      >
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">
                Branch Information
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Name:</span>
                  <span className="text-sm">{branch.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Phone:</span>
                  <span className="text-sm">{branch.phone}</span>
                </div>
                {branch.email && (
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Email:</span>
                    <span className="text-sm">{branch.email}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Status:</span>
                  <Badge
                    variant={
                      branch.status === "active" ? "default" : "secondary"
                    }
                  >
                    {branch.status}
                  </Badge>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-2">Address</h3>
              <div className="space-y-1">
                <div className="text-sm">{branch.addressLine1}</div>
                {branch.addressLine2 && (
                  <div className="text-sm">{branch.addressLine2}</div>
                )}
                <div className="text-sm">
                  {branch.city}, {branch.state} {branch.zip}
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
                    {branch.created_at.toLocaleDateString()} at{" "}
                    {branch.created_at.toLocaleTimeString()}
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

export default BranchRowAction;
