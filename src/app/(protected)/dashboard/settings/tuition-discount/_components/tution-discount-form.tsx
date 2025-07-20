"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  tutionAndDiscountSchema,
  TutionAndDiscountType,
} from "@/schema/settings/tution-and-discount";
import TextInput from "@/components/molecules/text-input";

export function TuitionDiscountForm() {
  const form = useForm<TutionAndDiscountType>({
    resolver: zodResolver(tutionAndDiscountSchema),
    defaultValues: {
      enableDiscountForMultipleKids: false,
      enableDiscountForFullYearPayment: false,
      multipleKidsDiscountPercentage: 0,
      fullYearDiscountPercentage: 0,
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = form;
  const enableMultipleKidsDiscount = watch("enableDiscountForMultipleKids");
  const enableFullYearDiscount = watch("enableDiscountForFullYearPayment");

  function onSubmit(data: TutionAndDiscountType) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="flex flex-row items-center justify-between rounded-lg border p-4 shadow-sm">
        <div className="space-y-0.5">
          <label
            htmlFor="enableDiscountForMultipleKids"
            className="text-base font-medium text-gray-700"
          >
            Enable Discount for Multiple Kids
          </label>
          <p className="text-sm text-gray-500">
            Toggle to enable a discount for families with multiple children.
          </p>
        </div>
        <Switch
          id="enableDiscountForMultipleKids"
          checked={enableMultipleKidsDiscount}
          onCheckedChange={(checked) =>
            setValue("enableDiscountForMultipleKids", checked)
          }
          aria-label="Enable discount for multiple kids"
        />
      </div>

      {enableMultipleKidsDiscount && (
        <TextInput
          id="multipleKidsDiscountPercentage"
          label="Multiple Kids Discount Percentage"
          type="number"
          placeholder="e.g., 10"
          {...register("multipleKidsDiscountPercentage", {
            valueAsNumber: true,
          })}
          error={errors.multipleKidsDiscountPercentage?.message}
        />
      )}

      <div className="flex flex-row items-center justify-between rounded-lg border p-4 shadow-sm">
        <div className="space-y-0.5">
          <label
            htmlFor="enableDiscountForFullYearPayment"
            className="text-base font-medium text-gray-700"
          >
            Enable Discount for Full Year Payment
          </label>
          <p className="text-sm text-gray-500">
            Toggle to enable a discount for full year upfront payments.
          </p>
        </div>
        <Switch
          id="enableDiscountForFullYearPayment"
          checked={enableFullYearDiscount}
          onCheckedChange={(checked) =>
            setValue("enableDiscountForFullYearPayment", checked)
          }
          aria-label="Enable discount for full year payment"
        />
      </div>

      {enableFullYearDiscount && (
        <TextInput
          id="fullYearDiscountPercentage"
          label="Full Year Discount Percentage"
          type="number"
          placeholder="e.g., 5"
          {...register("fullYearDiscountPercentage", { valueAsNumber: true })}
          error={errors.fullYearDiscountPercentage?.message}
        />
      )}

      <Button type="submit" className="rounded-full">
        Save Changes
      </Button>
    </form>
  );
}
