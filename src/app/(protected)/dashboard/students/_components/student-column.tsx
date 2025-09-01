"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import React from "react";
import { Student } from "./student-table";
import StudentRowActions from "./student-row-action";

export const studentColumn: ColumnDef<Student>[] = [
  {
    accessorKey: "family",
    header: "Family",
    cell: ({ row }) => <div className="font-medium">{row.original.family}</div>,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="space-y-1">
        <div className="font-medium">
          {row.original.firstName} {row.original.lastName}
        </div>
        <div className="text-xs text-muted-foreground">
          {row.original.email}
        </div>
      </div>
    ),
  },
  // {
  //   accessorKey: "gender",
  //   header: "Gender",
  //   cell: ({ row }) => (
  //     <Badge variant="outline" className="text-xs capitalize">
  //       {row.original.gender}
  //     </Badge>
  //   ),
  // },
  {
    accessorKey: "dateOfBirth",
    header: "Date of Birth",
    cell: ({ row }) => {
      try {
        const formattedDate = format(
          new Date(row.original.dateOfBirth),
          "MMM dd, yyyy"
        );
        return <div className="text-sm">{formattedDate}</div>;
      } catch {
        return <div className="text-muted-foreground">—</div>;
      }
    },
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => <div className="text-sm">{row.original.phone}</div>,
  },
  {
    accessorKey: "schoolName",
    header: "School",
    cell: ({ row }) => <div className="text-sm">{row.original.schoolName}</div>,
  },
  {
    accessorKey: "tshirtSize",
    header: "T-shirt Size",
    cell: ({ row }) => (
      <Badge variant="secondary" className="text-xs capitalize">
        {row.original.tshirtSize}
      </Badge>
    ),
  },
  // {
  //   accessorKey: "skillNote",
  //   header: "Skill Note",
  //   cell: ({ row }) => (
  //     <div className="max-w-[250px] truncate text-sm">
  //       {row.original.skillNote || "—"}
  //     </div>
  //   ),
  // },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const student = row.original;
      return <StudentRowActions student={student} />;
    },
  },
];
