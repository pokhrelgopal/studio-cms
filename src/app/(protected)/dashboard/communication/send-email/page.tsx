"use client";

import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import SplitFormContainer from "@/components/molecules/split-form-container";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import TextInput from "@/components/molecules/text-input";
import { useState } from "react";
import Dropzone from "@/components/organisms/dropzone-component";
import { Document, Gallery } from "iconsax-reactjs";
import { Label } from "@/components/ui/label";
import SelectField from "@/components/organisms/select-field";
import { MultiSelect } from "@/components/organisms/multi-select";
import FormErrorMessage from "@/components/atoms/form-error-message";

const emailSchema = z.object({
  to: z.string().min(1, { message: "Receiver is required" }),
  role: z.array(z.string()).optional(),
  class: z.string().optional(),
  subject: z.string().min(1, { message: "Subject is required" }).max(100),
  description: z
    .string()
    .min(1, { message: "Description is required" })
    .max(1000),
});

const receiverOptions = [
  { value: "all users", label: "All Users" },
  { value: "staffs", label: "Staffs" },
  { value: "classes", label: "Classes" },
];

const roleOptions = [
  { value: "admin", label: "Admin" },
  { value: "instructor", label: "Instructor" },
  { value: "staff", label: "Staff" },
];

const classOptions = [
  { value: "class1", label: "Class 1" },
  { value: "class2", label: "Class 2" },
  { value: "class3", label: "Class 3" },
];

type EmailFormData = z.infer<typeof emailSchema>;

export default function SendEmailPage() {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const handleDropImages = (acceptedFiles: File[]) => {
    setSelectedImages((prev) => [...prev, ...acceptedFiles]);
  };

  const handleRemoveFile = (index: number) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      to: "",
      subject: "",
      description: "",
      role: [],
      class: "",
    },
  });

  const selectedReceiver = watch("to");

  const onSubmit = (data: EmailFormData) => {
    console.log("Sending Email:", data);
    console.log("Attachments:", selectedImages);
  };

  return (
    <SplitFormContainer title="Compose Email">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Send To */}
        <div className="space-y-1">
          <SelectField
            label="Send To"
            control={control}
            options={receiverOptions}
            {...register("to")}
          />
          <FormErrorMessage message={errors.to?.message} />
        </div>

        {/* Roles if staffs selected */}
        {selectedReceiver === "staffs" && (
          <div className="space-y-2">
            <Label htmlFor="role">Select Roles</Label>
            <Controller
              name="role"
              control={control}
              render={({ field }) => (
                <MultiSelect
                  badgeClassName="bg-black/8 rounded-full px-2"
                  className="text-b2 h-11 text-sm"
                  options={roleOptions}
                  selected={field.value || []}
                  onChangeAction={field.onChange}
                />
              )}
            />
            <FormErrorMessage message={errors.role?.message} />
          </div>
        )}

        {/* Classes if students selected */}
        {selectedReceiver === "students" && (
          <div className="space-y-2">
            <SelectField
              label="Select Class"
              control={control}
              options={classOptions}
              {...register("class")}
            />
            <FormErrorMessage message={errors.class?.message} />
          </div>
        )}

        {/* Subject */}
        <div className="space-y-1">
          <TextInput
            label="Subject"
            placeholder="Email subject"
            {...register("subject")}
            error={errors.subject?.message}
          />
        </div>

        {/* Description */}
        <div className="space-y-1">
          <Textarea
            label="Description"
            placeholder="Write your message..."
            {...register("description")}
            error={errors.description?.message}
          />
        </div>

        {/* Attachments */}
        <div className="space-y-1">
          <Label htmlFor="attachments" className="text-md">
            Attachments
          </Label>
          <Dropzone
            multiple={true}
            onDrop={handleDropImages}
            className="flex items-center gap-2 text-primary"
          >
            <Gallery className="size-6 text-primary" />
            <span>Drag & Drop files here or click to upload</span>
          </Dropzone>

          {selectedImages.length > 0 && (
            <div className="mt-3 space-y-2">
              {selectedImages.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-2 text-gray-700 bg-gray-50 border border-gray-200/80 px-3 py-2 rounded-md"
                >
                  <div className="flex items-center gap-2">
                    <Document className="size-5 text-primary" />
                    <span className="text-sm">{file.name}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleRemoveFile(index)}
                    className="text-xs text-red-500 cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <Button type="submit" className="rounded-full">
          Send Email
        </Button>
      </form>
    </SplitFormContainer>
  );
}
