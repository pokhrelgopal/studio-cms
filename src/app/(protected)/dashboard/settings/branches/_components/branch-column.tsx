"use client";
import React from "react";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Branch } from "./types";
import BranchRowAction from "./branch-row-action";

export const branchColumns: ColumnDef<Branch>[] = [
  {
    accessorKey: "name",
    header: "Branch Name",
    cell: ({ row }) => (
      <div className="text-sm font-medium">{row.original.name}</div>
    ),
  },
  {
    accessorKey: "address",
    header: "Address",
    cell: ({ row }) => (
      <div className="text-sm">
        <div>{row.original.addressLine1}</div>
        {row.original.addressLine2 && (
          <div className="text-gray-500">{row.original.addressLine2}</div>
        )}
        <div className="text-gray-500">
          {row.original.city}, {row.original.state} {row.original.zip}
        </div>
      </div>
    ),
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => <div className="text-sm">{row.original.phone}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <div className="text-sm">{row.original.email || "N/A"}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge
        variant={row.original.status === "active" ? "default" : "secondary"}
        className="text-xs"
      >
        {row.original.status}
      </Badge>
    ),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <BranchRowAction branch={row.original} />,
  },
];
