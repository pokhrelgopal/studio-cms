"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SplitFormContainer from "@/components/molecules/split-form-container";
import {
  newFamilySchema,
  existingFamilySchema,
  type ExistingFamilyFormValues,
  type NewFamilyFormValues,
} from "@/schema/settings/registration-fee";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import SelectField from "@/components/organisms/select-field";
import TextInput from "@/components/molecules/text-input";
import { Button } from "@/components/ui/button";

const RegistrationFeeForm = () => {
  const newFamilyForm = useForm<NewFamilyFormValues>({
    mode: "onChange",
    resolver: zodResolver(newFamilySchema),
    defaultValues: {
      charge_new_families: false,
      when_to_charge: "never",
      student_fee: "",
    },
  });

  const existingFamilyForm = useForm<ExistingFamilyFormValues>({
    mode: "onChange",
    resolver: zodResolver(existingFamilySchema),
    defaultValues: {
      charge_existing_families: false,
      when_to_charge: "never",
      student_fee: "",
    },
  });

  const chargeNewFamilies = newFamilyForm.watch("charge_new_families");
  const chargeExistingFamilies = existingFamilyForm.watch(
    "charge_existing_families",
  );

  // Submit handlers
  const handleNewFamilySubmit = (data: NewFamilyFormValues) => {
    console.log("New Family Form Submitted", data);
    // Your API call here
  };

  const handleExistingFamilySubmit = (data: ExistingFamilyFormValues) => {
    console.log("Existing Family Form Submitted", data);
    // Your API call here
  };

  return (
    <div className="space-y-6">
      {/* New Families Form */}
      <SplitFormContainer title="New Families" childClassName="space-y-6">
        <form onSubmit={newFamilyForm.handleSubmit(handleNewFamilySubmit)}>
          <div className="flex items-center space-x-2">
            <Switch
              checked={chargeNewFamilies}
              onCheckedChange={(checked) =>
                newFamilyForm.setValue("charge_new_families", checked)
              }
              {...newFamilyForm.register("charge_new_families")}
            />
            <Label htmlFor="charge_new_families">Charge New Families</Label>
          </div>

          {chargeNewFamilies && (
            <>
              <div className="grid grid-cols-2 gap-6 mt-3">
                <SelectField
                  label="When to Charge"
                  options={[
                    { value: "never", label: "Never" },
                    { value: "on-registration", label: "On Registration" },
                  ]}
                  control={newFamilyForm.control}
                  {...newFamilyForm.register("when_to_charge")}
                />
                <TextInput
                  label="Student Fee"
                  {...newFamilyForm.register("student_fee")}
                  placeholder="Enter fee for student"
                  error={newFamilyForm.formState.errors.student_fee?.message}
                />
              </div>
              <div className="flex justify-end">
                <Button type="submit" className="mt-6 rounded-full">
                  Save New Family Settings
                </Button>
              </div>
            </>
          )}
        </form>
      </SplitFormContainer>

      {/* Existing Families Form */}
      <SplitFormContainer title="Existing Families" childClassName="space-y-6">
        <form
          onSubmit={existingFamilyForm.handleSubmit(handleExistingFamilySubmit)}
        >
          <div className="flex items-center space-x-2">
            <Switch
              checked={chargeExistingFamilies}
              onCheckedChange={(checked) =>
                existingFamilyForm.setValue("charge_existing_families", checked)
              }
              {...existingFamilyForm.register("charge_existing_families")}
            />
            <Label htmlFor="charge_existing_families">
              Charge Existing Families
            </Label>
          </div>

          {chargeExistingFamilies && (
            <>
              {" "}
              <div className="grid grid-cols-2 gap-6 mt-3">
                <SelectField
                  label="When to Charge"
                  options={[
                    { value: "never", label: "Never" },
                    { value: "on-registration", label: "On Registration" },
                  ]}
                  control={existingFamilyForm.control}
                  {...existingFamilyForm.register("when_to_charge")}
                />
                <TextInput
                  label="Student Fee"
                  {...existingFamilyForm.register("student_fee")}
                  placeholder="Enter fee for student"
                  error={
                    existingFamilyForm.formState.errors.student_fee?.message
                  }
                />
              </div>
              <div className="flex justify-end">
                <Button type="submit" className="mt-6 rounded-full">
                  Save Existing Family Settings
                </Button>
              </div>
            </>
          )}
        </form>
      </SplitFormContainer>
    </div>
  );
};

export default RegistrationFeeForm;
