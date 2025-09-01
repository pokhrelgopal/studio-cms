"use client";
import React from "react";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Family } from "./family-table";
import ComplainRowActions from "./family-row-action";

export const familyColumns: ColumnDef<Family>[] = [
  {
    accessorKey: "family",
    header: "Family",
    cell: ({ row }) => <div>{row.original.family}</div>,
  },
  {
    accessorKey: "location",
    header: "Location",
    cell: ({ row }) => (
      <div className="space-y-1">
        <div className="font-medium">{row.original.location}</div>
        <div className="text-xs text-muted-foreground">
          {row.original.city}, {row.original.state} {row.original.zip}
        </div>
      </div>
    ),
  },
  {
    accessorKey: "students",
    header: "Students",
    cell: ({ row }) => <div className="text-sm">{row.original.students}</div>,
  },
  {
    accessorKey: "balance",
    header: "Balance",
    cell: ({ row }) => (
      <div className="text-sm font-medium">
        ${row.original.balance?.toFixed(2) || "0.00"}
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge
        variant={row.original.status === "Active" ? "default" : "secondary"}
        className="text-xs"
      >
        {row.original.status}
      </Badge>
    ),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const family = row.original;
      return <ComplainRowActions family={family} />;
    },
  },
];
