"use client";

import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import SplitFormContainer from "@/components/molecules/split-form-container";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import SelectField from "@/components/organisms/select-field";
import { Label } from "@/components/ui/label";
import FormErrorMessage from "@/components/atoms/form-error-message";
import { MultiSelect } from "@/components/organisms/multi-select";

const smsSchema = z
  .object({
    to: z.string().min(1, { message: "Receiver is required" }),
    role: z.array(z.string()).optional(),
    class: z.string().optional(),
    message: z.string().min(1, { message: "Message cannot be empty" }).max(500),
  })
  .superRefine((data, ctx) => {
    if (data.to === "staffs" && (!data.role || data.role.length === 0)) {
      ctx.addIssue({
        path: ["role"],
        code: z.ZodIssueCode.custom,
        message: "Please select at least one role.",
      });
    }

    if (data.to === "classes" && !data.class) {
      ctx.addIssue({
        path: ["class"],
        code: z.ZodIssueCode.custom,
        message: "Please select a class.",
      });
    }
  });

const receiverOptions = [
  { value: "all students", label: "All Students" },
  { value: "staffs", label: "Staffs" },
  { value: "classes", label: "Classes Only" },
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

type SMSFormData = z.infer<typeof smsSchema>;

export default function SendSMSPage() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<SMSFormData>({
    resolver: zodResolver(smsSchema),
    defaultValues: {
      to: "",
      message: "",
      role: [],
      class: "",
    },
  });

  const selectedReceiver = watch("to");

  const onSubmit = (data: SMSFormData) => {
    console.log("Sending SMS:", data);
  };

  return (
    <SplitFormContainer title="Send SMS">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-1">
          <SelectField
            label="Send To"
            options={receiverOptions}
            control={control}
            {...register("to")}
          />
        </div>

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
                  selected={field.value as string[]}
                  onChangeAction={field.onChange}
                />
              )}
            />
            <FormErrorMessage message={errors.role?.message} />
          </div>
        )}

        {selectedReceiver === "classes" && (
          <div className="space-y-2">
            <SelectField
              label="Select Class"
              options={classOptions}
              control={control}
              {...register("class")}
            />
            <FormErrorMessage message={errors.class?.message} />
          </div>
        )}

        <div className="space-y-1">
          <Textarea
            label="Message"
            placeholder="Write your SMS message..."
            {...register("message")}
            error={errors.message?.message}
          />
        </div>

        <Button type="submit" className="rounded-full">
          Send SMS
        </Button>
      </form>
    </SplitFormContainer>
  );
}
