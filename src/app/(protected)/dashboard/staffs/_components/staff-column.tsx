"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import React from "react";
import { Staff } from "./staff-table";
import StaffRowActions from "./staff-row-action";

export const staffColumn: ColumnDef<Staff>[] = [
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
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => (
      <Badge variant="outline" className="text-xs capitalize">
        {row.original.role}
      </Badge>
    ),
  },
  {
    accessorKey: "department",
    header: "Department",
    cell: ({ row }) => <div className="text-sm">{row.original.department}</div>,
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => <div className="text-sm">{row.original.phone}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge
        variant={row.original.status === "Active" ? "default" : "destructive"}
        className="text-xs"
      >
        {row.original.status}
      </Badge>
    ),
  },
  {
    accessorKey: "dateJoined",
    header: "Date Joined",
    cell: ({ row }) => {
      try {
        const formattedDate = new Date(
          row.original.dateJoined
        ).toLocaleDateString();
        return <div className="text-sm">{formattedDate}</div>;
      } catch {
        return <div className="text-muted-foreground">—</div>;
      }
    },
  },
  {
    accessorKey: "emergencyContactName",
    header: "Emergency Contact",
    cell: ({ row }) => (
      <div className="space-y-1">
        <div className="text-sm font-medium">
          {row.original.emergencyContactName}
        </div>
        <div className="text-xs text-muted-foreground">
          {row.original.emergencyContactPhone}
        </div>
      </div>
    ),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const staff = row.original;
      return <StaffRowActions staff={staff} />;
    },
  },
];
