"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Editor } from "@tinymce/tinymce-react";
import { toast } from "sonner";
import TextInput from "@/components/molecules/text-input";
import SelectField from "@/components/organisms/select-field";
import { Button } from "@/components/ui/button";
import {
  addPolicySchema,
  type AddPolicySchemaType,
  statusOptions,
} from "@/schema/settings/add-policy";
import FormErrorMessage from "@/components/atoms/form-error-message";

export default function AddPolicyForm() {
  const form = useForm<AddPolicySchemaType>({
    mode: "onChange",
    resolver: zodResolver(addPolicySchema),
    defaultValues: {
      title: "",
      description: "",
      status: "",
    },
  });
  const {
    handleSubmit,
    register,
    setValue,
    watch,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = form;
  const descriptionValue = watch("description");
  const handleEditorChange = (content: string) => {
    setValue("description", content, { shouldValidate: true });
  };
  const handleFormSubmit = async (data: AddPolicySchemaType) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Policy data:", data);
      toast.success("Policy added successfully!");
      reset();
    } catch (error) {
      console.error("Error adding policy:", error);
      toast.error("Failed to add policy. Please try again.");
    }
  };
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TextInput
          label="Policy Title"
          {...register("title")}
          error={errors.title?.message}
        />
        <SelectField
          label="Status"
          control={control}
          name="status"
          options={statusOptions}
        />
      </div>
      <div className="py-4 relative" aria-modal="true">
        <Editor
          apiKey="7ckyo0kf243z3nhawj5tvjplfml1lzgnlnz1llwxuiuyau6c"
          value={descriptionValue}
          onEditorChange={handleEditorChange}
          init={{
            height: 300,
            menubar: false,
            toolbar:
              "undo redo | blocks | bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent",
            promotion: false,
            branding: false,
          }}
        />
        {errors.description && (
          <FormErrorMessage message={errors.description.message} />
        )}
      </div>
      <div className="mt-4 flex items-center justify-end gap-2">
        <Button
          type="button"
          variant="outline"
          className="rounded-full"
          onClick={() => reset()}
        >
          Reset
        </Button>
        <Button type="submit" className="rounded-full" loading={isSubmitting}>
          Add Policy
        </Button>
      </div>
    </form>
  );
}
