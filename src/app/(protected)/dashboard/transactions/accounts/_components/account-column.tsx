"use client";
import React from "react";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Account } from "./types";
import AccountRowAction from "./account-row-action";

export const accountColumns: ColumnDef<Account>[] = [
  {
    accessorKey: "name",
    header: "Account Name",
    cell: ({ row }) => (
      <div className="text-sm font-medium">{row.original.name}</div>
    ),
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => (
      <div className="text-sm capitalize">
        {row.original.type.replace("-", " ")}
      </div>
    ),
  },
  {
    accessorKey: "openingBalance",
    header: "Opening Balance",
    cell: ({ row }) => (
      <div className="text-sm font-medium">
        ${row.original.openingBalance.toFixed(2)}
      </div>
    ),
  },
  {
    accessorKey: "currentBalance",
    header: "Current Balance",
    cell: ({ row }) => (
      <div
        className={`text-sm font-medium ${
          row.original.currentBalance >= 0 ? "text-green-600" : "text-red-600"
        }`}
      >
        ${row.original.currentBalance.toFixed(2)}
      </div>
    ),
  },
  {
    accessorKey: "isDefault",
    header: "Default",
    cell: ({ row }) => (
      <div className="text-sm">
        {row.original.isDefault ? (
          <Badge variant="default" className="text-xs">
            Default
          </Badge>
        ) : (
          <span className="text-gray-500">No</span>
        )}
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
    cell: ({ row }) => <AccountRowAction account={row.original} />,
  },
];
