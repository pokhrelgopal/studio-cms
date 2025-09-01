"use client";

import React from "react";

import { Staff } from "./staff-table";
import SheetWrapper from "@/components/organisms/sheet-wrapper";
import ActionDropdownMenu from "@/components/organisms/action-dropdown-menu";
import ConfirmationDialog from "@/components/organisms/confirmation-dialog";
import { Badge } from "@/components/ui/badge";

type Props = {
  staff: Staff;
};

const StaffRowActions = ({ staff }: Props) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false);
  const [isStaffDetailsOpen, setIsStaffDetailsOpen] = React.useState(false);

  return (
    <>
      <ActionDropdownMenu
        onView={() => setIsStaffDetailsOpen(true)}
        onEdit={() => console.log("Edit", staff)}
        onDelete={() => setIsDeleteDialogOpen(true)}
      />

      <ConfirmationDialog
        isOpen={isDeleteDialogOpen}
        setIsOpen={setIsDeleteDialogOpen}
        title="Delete Staff"
        message={`Are you sure you want to delete ${staff.firstName} ${staff.lastName}? This action cannot be undone.`}
        onConfirm={() => {
          console.log("Deleting:", staff);
        }}
      />

      <SheetWrapper
        className="w-full lg:w-[26vw]"
        isOpen={isStaffDetailsOpen}
        setIsOpen={setIsStaffDetailsOpen}
        title="Staff Details"
      >
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">
                Basic Information
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Name:</span>
                  <span className="text-sm text-gray-600">
                    {staff.firstName} {staff.lastName}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Role:</span>
                  <Badge variant="outline" className="text-xs">
                    {staff.role}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Department:</span>
                  <span className="text-sm text-gray-600">
                    {staff.department}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Status:</span>
                  <Badge
                    variant={
                      staff.status === "Active" ? "default" : "destructive"
                    }
                  >
                    {staff.status}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Date Joined:</span>
                  <span className="text-sm text-gray-600">
                    {new Date(staff.dateJoined).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-2">
                Contact Details
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Phone:</span>
                  <span className="text-sm text-gray-600">{staff.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Email:</span>
                  <span className="text-sm text-gray-600">{staff.email}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-2">
                Emergency Contact
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Name:</span>
                  <span className="text-sm text-gray-600">
                    {staff.emergencyContactName}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Phone:</span>
                  <span className="text-sm text-gray-600">
                    {staff.emergencyContactPhone}
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

export default StaffRowActions;
