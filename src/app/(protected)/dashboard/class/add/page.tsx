import React from "react";
import AddClassForm from "./_components/add-class-form";
import Heading from "@/components/atoms/heading";

const AddClass = () => {
  return (
    <>
      <Heading className="mb-2" text="Add Class" />
      <AddClassForm />
    </>
  );
};

export default AddClass;
