"use client";

import React from "react";

import { Transaction } from "./types";
import SheetWrapper from "@/components/organisms/sheet-wrapper";
import ActionDropdownMenu from "@/components/organisms/action-dropdown-menu";
import ConfirmationDialog from "@/components/organisms/confirmation-dialog";
import { Badge } from "@/components/ui/badge";
import { ArrowUpCircle, ArrowDownCircle } from "lucide-react";

type Props = {
  transaction: Transaction;
};

const TransactionRowAction = ({ transaction }: Props) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false);
  const [isTransactionDetailsOpen, setIsTransactionDetailsOpen] =
    React.useState(false);

  return (
    <>
      <ActionDropdownMenu
        onView={() => setIsTransactionDetailsOpen(true)}
        onEdit={() => console.log("Edit", transaction)}
        onDelete={() => setIsDeleteDialogOpen(true)}
      />

      <ConfirmationDialog
        isOpen={isDeleteDialogOpen}
        setIsOpen={setIsDeleteDialogOpen}
        title="Delete Transaction"
        message={`Are you sure you want to delete this transaction? This action cannot be undone.`}
        onConfirm={() => {
          console.log("Deleting:", transaction);
        }}
      />

      <SheetWrapper
        className="w-full lg:w-[26vw]"
        isOpen={isTransactionDetailsOpen}
        setIsOpen={setIsTransactionDetailsOpen}
        title="Transaction Details"
      >
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">
                Transaction Information
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Reference:</span>
                  <span className="text-sm">
                    {transaction.reference || "N/A"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Date:</span>
                  <span className="text-sm">
                    {transaction.date.toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Type:</span>
                  <div className="flex items-center space-x-2">
                    {transaction.transaction_type === "income" ? (
                      <ArrowUpCircle className="w-4 h-4 text-green-500" />
                    ) : (
                      <ArrowDownCircle className="w-4 h-4 text-red-500" />
                    )}
                    <span className="text-sm capitalize">
                      {transaction.transaction_type}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Category:</span>
                  <Badge variant="outline" className="text-xs">
                    {transaction.category}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Account:</span>
                  <span className="text-sm capitalize">
                    {transaction.account}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Amount:</span>
                  <span
                    className={`text-sm font-medium ${
                      transaction.transaction_type === "income"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {transaction.transaction_type === "income" ? "+" : "-"}$
                    {parseFloat(transaction.amount).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Status:</span>
                  <Badge
                    variant={
                      transaction.status === "paid"
                        ? "default"
                        : transaction.status === "partial"
                          ? "secondary"
                          : "destructive"
                    }
                  >
                    {transaction.status}
                  </Badge>
                </div>
              </div>
            </div>

            {(transaction.family_name || transaction.student_name) && (
              <div>
                <h3 className="font-medium text-gray-900 mb-2">
                  Related Information
                </h3>
                <div className="space-y-2">
                  {transaction.family_name && (
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Family:</span>
                      <span className="text-sm">{transaction.family_name}</span>
                    </div>
                  )}
                  {transaction.student_name && (
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Student:</span>
                      <span className="text-sm">
                        {transaction.student_name}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {transaction.description && (
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Description</h3>
                <p className="text-sm text-gray-600">
                  {transaction.description}
                </p>
              </div>
            )}

            <div>
              <h3 className="font-medium text-gray-900 mb-2">
                Audit Information
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Created:</span>
                  <span className="text-sm">
                    {transaction.created_at.toLocaleDateString()} at{" "}
                    {transaction.created_at.toLocaleTimeString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SheetWrapper>
    </>
  );
};

export default TransactionRowAction;
