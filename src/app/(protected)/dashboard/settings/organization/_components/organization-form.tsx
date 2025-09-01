"use client";

import SplitFormContainer from "@/components/molecules/split-form-container";
import { useForm } from "react-hook-form";
import {
  organizationSchema,
  stateOptions,
  type OrganizationFormValues,
} from "@/schema/settings/organization";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "@/components/molecules/text-input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Dropzone from "@/components/organisms/dropzone-component";
import { Gallery } from "iconsax-reactjs";
import { useState } from "react";
import Image from "next/image";
import SelectField from "@/components/organisms/select-field";

export default function OrganizationForm() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const form = useForm<OrganizationFormValues>({
    mode: "onChange",
    resolver: zodResolver(organizationSchema),
    defaultValues: {
      organization_name: "",
      organization_email: "",
      organization_type: "",
      organization_phone: "",
      fax_number: "",
      reply_to_email: "",
      email_to_receive_notification: "",
      address_line_1: "",
      address_line_2: "",
      city: "",
      state: "",
      zip_code: "",
      tax_id_label: "",
      tax_number: "",
      is_tution_taxable: false,
      is_registration_fee_taxable: false,
      tax_rate: 0,
      min_age_child: 0,
    },
  });

  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = form;

  const handleFormSubmit = (data: OrganizationFormValues) => {
    console.log(data);
  };

  const handleDropImage = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setSelectedImage(file);
    }
  };

  return (
    <form className="space-y-6 pb-6" onSubmit={handleSubmit(handleFormSubmit)}>
      <SplitFormContainer
        title="Organization Details"
        childClassName="space-y-6"
      >
        <div className="flex flex-col items-start gap-4 space-x-4">
          <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center">
            {!selectedImage ? (
              <div className="h-full w-full bg-gray-100 flex items-center justify-center">
                Image
              </div>
            ) : (
              <Image
                src={URL.createObjectURL(selectedImage)}
                alt="Organization Logo"
                className="object-cover h-full w-full"
                height={50}
                width={50}
              />
            )}
          </div>
          <Dropzone
            multiple={false}
            onDrop={handleDropImage}
            className="flex items-center gap-2 text-primary"
          >
            <Gallery className="size-6 text-primary" />
            <span>Click to Upload</span>
          </Dropzone>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TextInput
            label="Organization Name"
            {...register("organization_name")}
            error={errors.organization_name?.message}
          />
          <TextInput
            label="Organization Email"
            {...register("organization_email")}
            error={errors.organization_email?.message}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TextInput
            label="Organization Type"
            {...register("organization_type")}
            error={errors.organization_type?.message}
          />
          <TextInput
            label="Organization Phone"
            {...register("organization_phone")}
            error={errors.organization_phone?.message}
          />
        </div>
      </SplitFormContainer>

      <SplitFormContainer title="Contact Details" childClassName="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TextInput
            label="Mobile Number"
            {...register("organization_phone")}
            error={errors.organization_phone?.message}
          />
          <TextInput
            label="Fax Number"
            {...register("fax_number")}
            error={errors.fax_number?.message}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TextInput
            label="Reply To Email"
            {...register("reply_to_email")}
            error={errors.reply_to_email?.message}
          />
          <TextInput
            label="Email to Receive Notifications"
            {...register("email_to_receive_notification")}
            error={errors.email_to_receive_notification?.message}
          />
        </div>
      </SplitFormContainer>

      <SplitFormContainer title="Address Details" childClassName="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TextInput
            label="Address Line 1"
            {...register("address_line_1")}
            error={errors.address_line_1?.message}
          />
          <TextInput
            label="Address Line 2"
            {...register("address_line_2")}
            error={errors.address_line_2?.message}
          />
        </div>
        <div className="grid grid-cols-3 gap-6">
          <TextInput
            label="City"
            {...register("city")}
            error={errors.city?.message}
          />
          <SelectField
            label="State"
            options={stateOptions}
            control={form.control}
            placeholder="Select a state"
            {...register("state")}
          />
          <TextInput
            label="Zip Code"
            {...register("zip_code")}
            error={errors.zip_code?.message}
          />
        </div>
      </SplitFormContainer>

      <SplitFormContainer title="Tax Details" childClassName="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TextInput
            label="Tax ID Label"
            {...register("tax_id_label")}
            error={errors.tax_id_label?.message}
          />
          <TextInput
            label="Tax Number"
            {...register("tax_number")}
            error={errors.tax_number?.message}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex items-center space-x-2">
            <Switch
              id="is_tution_taxable"
              checked={watch("is_tution_taxable")}
              onCheckedChange={(checked) =>
                setValue("is_tution_taxable", checked)
              }
            />
            <Label htmlFor="is_tution_taxable">Is Tuition Taxable</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="is_registration_fee_taxable"
              checked={watch("is_registration_fee_taxable")}
              onCheckedChange={(checked) =>
                setValue("is_registration_fee_taxable", checked)
              }
            />
            <Label htmlFor="is_registration_fee_taxable">
              Is Registration Fee Taxable
            </Label>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TextInput
            label="Tax Rate (%)"
            type="number"
            step="0.01"
            {...register("tax_rate", { valueAsNumber: true })}
            error={errors.tax_rate?.message}
          />
          <TextInput
            label="Minimum Age for Child"
            type="number"
            {...register("min_age_child", { valueAsNumber: true })}
            error={errors.min_age_child?.message}
          />
        </div>
      </SplitFormContainer>

      <div className="flex items-center gap-3 justify-end">
        <Button className="rounded-full px-5" type="submit">
          Save Details
        </Button>
      </div>
    </form>
  );
}
