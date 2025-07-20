"use client";

import React from "react";

import { Student } from "./student-table";
import SheetWrapper from "@/components/organisms/sheet-wrapper";
import ActionDropdownMenu from "@/components/organisms/action-dropdown-menu";
import ConfirmationDialog from "@/components/organisms/confirmation-dialog";

type Props = {
  student: Student;
};

const StudentRowActions = ({ student }: Props) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false);
  const [isStudentDetailsOpen, setIsStudentDetailsOpen] = React.useState(false);

  return (
    <>
      <ActionDropdownMenu
        onView={() => setIsStudentDetailsOpen(true)}
        onEdit={() => console.log("Edit", student)}
        onDelete={() => setIsDeleteDialogOpen(true)}
      />

      <ConfirmationDialog
        isOpen={isDeleteDialogOpen}
        setIsOpen={setIsDeleteDialogOpen}
        title="Delete Student"
        message={`Are you sure you want to delete ${student.firstName} ${student.lastName}? This action cannot be undone.`}
        onConfirm={() => {
          console.log("Deleting:", student);
        }}
      />

      <SheetWrapper
        className="w-full lg:w-[26vw]"
        isOpen={isStudentDetailsOpen}
        setIsOpen={setIsStudentDetailsOpen}
        title="Student Details"
      >
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">
                Basic Information
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Family:</span>
                  <span className="text-sm text-gray-600">
                    {student.family}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Name:</span>
                  <span className="text-sm text-gray-600">
                    {student.firstName} {student.lastName}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Gender:</span>
                  <span className="text-sm text-gray-600 capitalize">
                    {student.gender}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Date of Birth:</span>
                  <span className="text-sm text-gray-600">
                    {student.dateOfBirth}
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
                  <span className="text-sm text-gray-600">{student.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Email:</span>
                  <span className="text-sm text-gray-600">{student.email}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-2">
                Additional Details
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">School Name:</span>
                  <span className="text-sm text-gray-600">
                    {student.schoolName}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">T-shirt Size:</span>
                  <span className="text-sm text-gray-600 capitalize">
                    {student.tshirtSize}
                  </span>
                </div>
              </div>
            </div>

            {student.skillNote && (
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Skill Note</h3>
                <p className="text-sm text-gray-600 bg-blue-50 p-3 rounded-md border border-blue-200">
                  {student.skillNote}
                </p>
              </div>
            )}
          </div>
        </div>
      </SheetWrapper>
    </>
  );
};

export default StudentRowActions;
