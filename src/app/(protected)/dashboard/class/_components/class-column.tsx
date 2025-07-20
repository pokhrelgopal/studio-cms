"use client";
import React from "react";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Class } from "./types";
import ClassRowAction from "./class-row-action";

export const classColumns: ColumnDef<Class>[] = [
  {
    accessorKey: "className",
    header: "Class Name",
    cell: ({ row }) => (
      <div className="font-medium">{row.original.className}</div>
    ),
  },
  {
    accessorKey: "instructor",
    header: "Instructor",
    cell: ({ row }) => <div className="text-sm">{row.original.instructor}</div>,
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (
      <Badge variant="outline" className="text-xs">
        {row.original.category}
      </Badge>
    ),
  },
  {
    accessorKey: "studioBranch",
    header: "Branch",
    cell: ({ row }) => (
      <div className="text-sm">{row.original.studioBranch}</div>
    ),
  },
  {
    accessorKey: "time",
    header: "Time",
    cell: ({ row }) => <div className="text-sm">{row.original.time}</div>,
  },
  {
    accessorKey: "classDuration",
    header: "Duration",
    cell: ({ row }) => (
      <div className="text-sm">{row.original.classDuration}</div>
    ),
  },
  {
    accessorKey: "classCapacity",
    header: "Capacity",
    cell: ({ row }) => (
      <div className="text-sm">{row.original.classCapacity} students</div>
    ),
  },
  {
    accessorKey: "classFee",
    header: "Fee",
    cell: ({ row }) => (
      <div className="text-sm font-medium">
        {row.original.classFee ? `$${row.original.classFee}` : "Free"}
      </div>
    ),
  },
  {
    accessorKey: "startDate",
    header: "Start Date",
    cell: ({ row }) => (
      <div className="text-sm">
        {new Date(row.original.startDate).toLocaleDateString()}
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge
        variant={
          row.original.status === "Active"
            ? "default"
            : row.original.status === "Upcoming"
            ? "secondary"
            : "outline"
        }
        className="text-xs"
      >
        {row.original.status}
      </Badge>
    ),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <ClassRowAction classData={row.original} />,
  },
];
