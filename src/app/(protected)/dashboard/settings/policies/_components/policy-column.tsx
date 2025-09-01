"use client";
import React from "react";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Policy } from "./types";
import PolicyRowAction from "./policy-row-action";

export const policyColumns: ColumnDef<Policy>[] = [
  {
    accessorKey: "title",
    header: "Policy Title",
    cell: ({ row }) => (
      <div className="text-sm font-medium">{row.original.title}</div>
    ),
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => (
      <div className="text-sm max-w-[300px] truncate">
        {row.original.description}
      </div>
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
    cell: ({ row }) => <PolicyRowAction policy={row.original} />,
  },
];
