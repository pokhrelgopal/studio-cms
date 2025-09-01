"use client";
import { z } from "zod";
import React from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const DomainSettingsPage = () => {
  const form = useForm<BlogDataType>({
    resolver: zodResolver(blogSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      content: "",
      age: "",
    },
  });

  const {
    register,
    reset,
    setValue,
    watch,
    handleSubmit,
    formState: { errors, isDirty },
  } = form;

  const isTitleHelp = watch("title") === "help";
  if (isTitleHelp) {
    setValue("content", "This is a help message for the title.");
  }

  const handleFormSubmit = (data: BlogDataType) => {
    console.log(data);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Domain Settings</h1>
      <p>Welcome to the domain settings page.</p>
      <form className="p-10" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="flex flex-col">
          <Input {...register("title")} />
          {errors.title?.message && (
            <span className="text-red-500">{errors.title.message}</span>
          )}
        </div>
        <div className="flex flex-col">
          <Textarea {...register("content")} />
          {errors.content?.message && (
            <span className="text-red-500">{errors.content.message}</span>
          )}
        </div>
        <div className="flex flex-col">
          <Input {...register("age")} />
          {errors.age?.message && (
            <span className="text-red-500">{errors.age.message}</span>
          )}
        </div>
        <Button type="submit" className="mt-5" disabled={!isDirty}>
          Update
        </Button>
        <Button
          type="button"
          className="mt-5"
          onClick={() => reset()}
          variant="outline"
        >
          Reset
        </Button>
      </form>
    </div>
  );
};

export default DomainSettingsPage;

const blogSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Too long"),
  content: z.string().min(1, "Content is required"),
  age: z.string().optional(),
});

type BlogDataType = z.infer<typeof blogSchema>;
