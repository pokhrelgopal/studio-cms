"use client";
import React from "react";

import { ColumnDef } from "@tanstack/react-table";
import { PettyCash } from "./types";
import PettyCashRowAction from "./petty-cash-row-action";

export const pettyCashColumns: ColumnDef<PettyCash>[] = [
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => (
      <div className="text-sm">{row.original.date.toLocaleDateString()}</div>
    ),
  },
  {
    accessorKey: "account",
    header: "Account",
    cell: ({ row }) => (
      <div className="text-sm capitalize">{row.original.account}</div>
    ),
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => (
      <div className="text-sm font-medium text-red-600">
        -${parseFloat(row.original.amount).toFixed(2)}
      </div>
    ),
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => (
      <div className="text-sm max-w-[200px] truncate">
        {row.original.description || "No description"}
      </div>
    ),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <PettyCashRowAction pettyCash={row.original} />,
  },
];
