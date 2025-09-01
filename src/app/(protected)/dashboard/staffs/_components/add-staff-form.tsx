"use client";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// UI Components
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import TextInput from "@/components/molecules/text-input";
import SelectField from "@/components/organisms/select-field";

// Utility functions
import {
  addStaffSchema,
  type AddStaffSchemaType,
} from "@/schema/staff/add-staff";
import SplitFormContainer from "@/components/molecules/split-form-container";
import { permissionsData, allPermissionValues } from "@/constants/permissions";

// Define a type for select options
interface SelectOption {
  label: string;
  value: string;
}

const AddStaffForm = () => {
  const form = useForm<AddStaffSchemaType>({
    mode: "onChange",
    resolver: zodResolver(addStaffSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      role: "",
      status: "Active",
      emergencyContactName: "",
      emergencyContactPhone: "",
      permissions: allPermissionValues,
    },
  });

  const { handleSubmit, register, formState, watch, setValue } = form;

  const handleFormSubmit = (data: AddStaffSchemaType) => {
    console.log("Staff data:", data);
    console.log("Selected Permissions:", data.permissions);
  };

  return (
    <FormProvider {...form}>
      <form
        className="space-y-5 mb-5"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <SplitFormContainer
          title="Personal Details"
          childClassName="space-y-5"
          className=""
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TextInput
              className="rounded-md"
              id="firstName"
              label="First Name"
              placeholder="Enter staff's first name"
              {...register("firstName")}
              error={formState.errors.firstName?.message}
            />
            <TextInput
              className="rounded-md"
              id="lastName"
              label="Last Name"
              placeholder="Enter staff's last name"
              {...register("lastName")}
              error={formState.errors.lastName?.message}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TextInput
              className="rounded-md"
              id="phone"
              label="Phone"
              placeholder="Enter phone number"
              {...register("phone")}
              error={formState.errors.phone?.message}
            />
            <TextInput
              className="rounded-md"
              id="email"
              label="Email"
              placeholder="Enter email address"
              type="email"
              {...register("email")}
              error={formState.errors.email?.message}
            />
          </div>
        </SplitFormContainer>

        <SplitFormContainer
          title="Role & Status"
          childClassName="space-y-5"
          className=""
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SelectField
              control={form.control}
              name="role"
              className="rounded-md"
              label="Role"
              placeholder="Select role"
              options={roleOptions}
            />
            <SelectField
              control={form.control}
              name="status"
              className="rounded-md"
              label="Status"
              placeholder="Select status"
              options={statusOptions}
            />
          </div>
        </SplitFormContainer>

        <SplitFormContainer
          title="Emergency Contact"
          childClassName="space-y-5"
          className=""
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TextInput
              className="rounded-md"
              id="emergencyContactName"
              label="Emergency Contact Name"
              placeholder="Enter emergency contact name"
              {...register("emergencyContactName")}
              error={formState.errors.emergencyContactName?.message}
            />
            <TextInput
              className="rounded-md"
              id="emergencyContactPhone"
              label="Emergency Contact Phone"
              placeholder="Enter emergency contact phone"
              {...register("emergencyContactPhone")}
              error={formState.errors.emergencyContactPhone?.message}
            />
          </div>
        </SplitFormContainer>

        <SplitFormContainer
          title="Permissions"
          childClassName="space-y-5"
          className=""
        >
          {permissionsData.map((group) => (
            <div key={group.category} className="space-y-3">
              <h4 className="text-lg font-medium">{group.category}</h4>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {group.items.map((item) => (
                  <div key={item.value} className="flex items-center space-x-2">
                    <Checkbox
                      id={`permission-${item.value}`}
                      value={item.value}
                      checked={watch("permissions").includes(item.value)}
                      onCheckedChange={(checked) => {
                        const permissions = watch("permissions");
                        if (checked) {
                          setValue("permissions", [...permissions, item.value]);
                        } else {
                          setValue(
                            "permissions",
                            permissions.filter((p) => p !== item.value)
                          );
                        }
                      }}
                      {...register("permissions")}
                    />
                    <Label htmlFor={`permission-${item.value}`}>
                      {item.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </SplitFormContainer>

        <div className="mt-6 flex items-center justify-end">
          <Button type="submit" className="rounded-full !px-5">
            Add Staff
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default AddStaffForm;

const roleOptions: SelectOption[] = [
  { label: "Instructor", value: "Instructor" },
  { label: "Assistant Instructor", value: "Assistant Instructor" },
  { label: "Manager", value: "Manager" },
  { label: "Assistant Manager", value: "Assistant Manager" },
  { label: "Receptionist", value: "Receptionist" },
  { label: "Coordinator", value: "Coordinator" },
  { label: "Administrator", value: "Administrator" },
  { label: "Janitor", value: "Janitor" },
  { label: "Security", value: "Security" },
];

const statusOptions: SelectOption[] = [
  { label: "Active", value: "Active" },
  { label: "Inactive", value: "Inactive" },
];
