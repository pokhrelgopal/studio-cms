"use client";

import React, { Suspense } from "react";
import { Add } from "iconsax-reactjs";

import SheetWrapper from "@/components/organisms/sheet-wrapper";
import { Button } from "@/components/ui/button";
import PageLoader from "@/components/molecules/page-loader";
import Heading from "@/components/atoms/heading";
import AddCategoryForm from "./_components/add-category-form";
import CategoryTable from "./_components/category-table";

const CategoriesPage = () => {
  const [isAddCategorySheetOpen, setIsAddCategorySheetOpen] =
    React.useState(false);

  return (
    <Suspense fallback={<PageLoader />}>
      <SheetWrapper
        className="!w-[40vw]"
        isOpen={isAddCategorySheetOpen}
        setIsOpen={setIsAddCategorySheetOpen}
        title="Add Category"
      >
        <AddCategoryForm onSuccess={() => setIsAddCategorySheetOpen(false)} />
      </SheetWrapper>

      <div className="flex items-center justify-between">
        <Heading className="mb-2" text="Categories" />
        <Button
          iconLeft={<Add className="size-6" />}
          className="rounded-full"
          onClick={() => setIsAddCategorySheetOpen(true)}
        >
          Add Category
        </Button>
      </div>

      <CategoryTable />
    </Suspense>
  );
};

export default CategoriesPage;
