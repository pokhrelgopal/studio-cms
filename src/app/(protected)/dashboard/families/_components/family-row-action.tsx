"use client";

import React from "react";

import { Family } from "./family-table";
import ActionDropdownMenu from "@/components/organisms/action-dropdown-menu";
import ConfirmationDialog from "@/components/organisms/confirmation-dialog";

type Props = {
  family: Family;
};

const ComplainRowActions = ({ family }: Props) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false);

  return (
    <>
      <ActionDropdownMenu
        onEdit={() => console.log("Edit", family)}
        onDelete={() => setIsDeleteDialogOpen(true)}
      />

      <ConfirmationDialog
        isOpen={isDeleteDialogOpen}
        setIsOpen={setIsDeleteDialogOpen}
        title="Delete Complaint"
        message={`Are you sure you want to delete this family? This action cannot be undone.`}
        onConfirm={() => {
          console.log("Deleting:", family);
        }}
      />
    </>
  );
};

export default ComplainRowActions;
