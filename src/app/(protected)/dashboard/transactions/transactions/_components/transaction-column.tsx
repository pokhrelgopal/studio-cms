"use client";
import React from "react";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Transaction } from "./types";
import TransactionRowAction from "./transaction-row-action";
import { ArrowUpCircle, ArrowDownCircle } from "lucide-react";

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => (
      <div className="text-sm">{row.original.date.toLocaleDateString()}</div>
    ),
  },
  {
    accessorKey: "reference",
    header: "Reference",
    cell: ({ row }) => (
      <div className="text-sm font-medium">
        {row.original.reference || "N/A"}
      </div>
    ),
  },
  {
    accessorKey: "transaction_type",
    header: "Type",
    cell: ({ row }) => (
      <div className="flex items-center space-x-2">
        {row.original.transaction_type === "income" ? (
          <ArrowUpCircle className="w-4 h-4 text-green-500" />
        ) : (
          <ArrowDownCircle className="w-4 h-4 text-red-500" />
        )}
        <span className="text-sm capitalize">
          {row.original.transaction_type}
        </span>
      </div>
    ),
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
      <div
        className={`text-sm font-medium ${
          row.original.transaction_type === "income"
            ? "text-green-600"
            : "text-red-600"
        }`}
      >
        {row.original.transaction_type === "income" ? "+" : "-"}$
        {parseFloat(row.original.amount).toFixed(2)}
      </div>
    ),
  },
  {
    accessorKey: "family_name",
    header: "Family",
    cell: ({ row }) => (
      <div className="text-sm">{row.original.family_name || "N/A"}</div>
    ),
  },
  {
    accessorKey: "student_name",
    header: "Student",
    cell: ({ row }) => (
      <div className="text-sm">{row.original.student_name || "N/A"}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge
        variant={
          row.original.status === "paid"
            ? "default"
            : row.original.status === "partial"
              ? "secondary"
              : "destructive"
        }
        className="text-xs"
      >
        {row.original.status}
      </Badge>
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
    cell: ({ row }) => <TransactionRowAction transaction={row.original} />,
  },
];
