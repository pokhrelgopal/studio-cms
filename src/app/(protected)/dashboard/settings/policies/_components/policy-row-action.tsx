"use client";

import React from "react";

import { Policy } from "./types";
import SheetWrapper from "@/components/organisms/sheet-wrapper";
import ActionDropdownMenu from "@/components/organisms/action-dropdown-menu";
import ConfirmationDialog from "@/components/organisms/confirmation-dialog";
import { Badge } from "@/components/ui/badge";

type Props = {
  policy: Policy;
};

const PolicyRowAction = ({ policy }: Props) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false);
  const [isPolicyDetailsOpen, setIsPolicyDetailsOpen] =
    React.useState(false);

  return (
    <>
      <ActionDropdownMenu
        onView={() => setIsPolicyDetailsOpen(true)}
        onEdit={() => console.log("Edit", policy)}
        onDelete={() => setIsDeleteDialogOpen(true)}
      />

      <ConfirmationDialog
        isOpen={isDeleteDialogOpen}
        setIsOpen={setIsDeleteDialogOpen}
        title="Delete Policy"
        message={`Are you sure you want to delete "${policy.title}" policy? This action cannot be undone.`}
        onConfirm={() => {
          console.log("Deleting:", policy);
        }}
      />

      <SheetWrapper
        className="w-full lg:w-[26vw]"
        isOpen={isPolicyDetailsOpen}
        setIsOpen={setIsPolicyDetailsOpen}
        title="Policy Details"
      >
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">
                Policy Information
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Title:</span>
                  <span className="text-sm">{policy.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Status:</span>
                  <Badge
                    variant={
                      policy.status === "active" ? "default" : "secondary"
                    }
                  >
                    {policy.status}
                  </Badge>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-2">Description</h3>
              <p className="text-sm text-gray-600">{policy.description}</p>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-2">
                Audit Information
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Created:</span>
                  <span className="text-sm">
                    {policy.created_at.toLocaleDateString()} at{" "}
                    {policy.created_at.toLocaleTimeString()}
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

export default PolicyRowAction;
