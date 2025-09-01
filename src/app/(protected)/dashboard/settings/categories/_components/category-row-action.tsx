"use client";

import React from "react";

import { Category } from "./types";
import SheetWrapper from "@/components/organisms/sheet-wrapper";
import ActionDropdownMenu from "@/components/organisms/action-dropdown-menu";
import ConfirmationDialog from "@/components/organisms/confirmation-dialog";
import { Badge } from "@/components/ui/badge";

type Props = {
  category: Category;
};

const CategoryRowAction = ({ category }: Props) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false);
  const [isCategoryDetailsOpen, setIsCategoryDetailsOpen] =
    React.useState(false);

  return (
    <>
      <ActionDropdownMenu
        onView={() => setIsCategoryDetailsOpen(true)}
        onEdit={() => console.log("Edit", category)}
        onDelete={() => setIsDeleteDialogOpen(true)}
      />

      <ConfirmationDialog
        isOpen={isDeleteDialogOpen}
        setIsOpen={setIsDeleteDialogOpen}
        title="Delete Category"
        message={`Are you sure you want to delete "${category.name}" category? This action cannot be undone.`}
        onConfirm={() => {
          console.log("Deleting:", category);
        }}
      />

      <SheetWrapper
        className="w-full lg:w-[26vw]"
        isOpen={isCategoryDetailsOpen}
        setIsOpen={setIsCategoryDetailsOpen}
        title="Category Details"
      >
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">
                Category Information
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Name:</span>
                  <span className="text-sm">{category.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Status:</span>
                  <Badge
                    variant={
                      category.status === "active" ? "default" : "secondary"
                    }
                  >
                    {category.status}
                  </Badge>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-2">Description</h3>
              <p className="text-sm text-gray-600">{category.description}</p>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-2">
                Audit Information
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Created:</span>
                  <span className="text-sm">
                    {category.created_at.toLocaleDateString()} at{" "}
                    {category.created_at.toLocaleTimeString()}
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

export default CategoryRowAction;
