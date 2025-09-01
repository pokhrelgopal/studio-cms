"use client";

import React from "react";

import { Class } from "./types";
import SheetWrapper from "@/components/organisms/sheet-wrapper";
import ActionDropdownMenu from "@/components/organisms/action-dropdown-menu";
import ConfirmationDialog from "@/components/organisms/confirmation-dialog";
import { Badge } from "@/components/ui/badge";

type Props = {
  classData: Class;
};

const ClassRowAction = ({ classData }: Props) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false);
  const [isClassDetailsOpen, setIsClassDetailsOpen] = React.useState(false);

  return (
    <>
      <ActionDropdownMenu
        onView={() => setIsClassDetailsOpen(true)}
        onEdit={() => console.log("Edit", classData)}
        onDelete={() => setIsDeleteDialogOpen(true)}
      />

      <ConfirmationDialog
        isOpen={isDeleteDialogOpen}
        setIsOpen={setIsDeleteDialogOpen}
        title="Delete Class"
        message={`Are you sure you want to delete ${classData.className}? This action cannot be undone.`}
        onConfirm={() => {
          console.log("Deleting:", classData);
        }}
      />

      <SheetWrapper
        className="w-full lg:w-[26vw]"
        isOpen={isClassDetailsOpen}
        setIsOpen={setIsClassDetailsOpen}
        title="Class Details"
      >
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">
                Class Information
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Class Name:</span>
                  <span className="text-sm">{classData.className}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Instructor:</span>
                  <span className="text-sm">{classData.instructor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Category:</span>
                  <Badge variant="outline" className="text-xs">
                    {classData.category}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Branch:</span>
                  <span className="text-sm">{classData.studioBranch}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Time:</span>
                  <span className="text-sm">{classData.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Duration:</span>
                  <span className="text-sm">{classData.classDuration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Days:</span>
                  <span className="text-sm">{classData.days.join(", ")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Start Date:</span>
                  <span className="text-sm">
                    {classData.startDate.toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Status:</span>
                  <Badge
                    variant={
                      classData.status === "Active"
                        ? "default"
                        : classData.status === "Upcoming"
                        ? "secondary"
                        : "destructive"
                    }
                  >
                    {classData.status}
                  </Badge>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-2">
                Enrollment Information
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Capacity:</span>
                  <span className="text-sm">{classData.classCapacity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Enrolled:</span>
                  <span className="text-sm">{classData.studentsEnrolled}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Available Spots:</span>
                  <span className="text-sm">
                    {classData.classCapacity - classData.studentsEnrolled}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">
                    Has Registration Fee:
                  </span>
                  <span className="text-sm">
                    {classData.hasRegistrationFee}
                  </span>
                </div>
                {classData.classFee && (
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Class Fee:</span>
                    <span className="text-sm">${classData.classFee}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Fee Terms:</span>
                  <span className="text-sm">{classData.feeTerms}</span>
                </div>
                {classData.registrationStartDate && (
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">
                      Registration Start:
                    </span>
                    <span className="text-sm">
                      {classData.registrationStartDate.toLocaleDateString()}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {classData.classDescription && (
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Description</h3>
                <p className="text-sm text-gray-600">
                  {classData.classDescription}
                </p>
              </div>
            )}
          </div>
        </div>
      </SheetWrapper>
    </>
  );
};

export default ClassRowAction;
