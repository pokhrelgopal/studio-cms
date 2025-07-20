"use client";

import { useQueryState } from "nuqs";

import CardContainer from "@/components/atoms/card-container";
import Stepper from "./stepper.tsx";
import PersonalInformation from "./forms/personal";
import PrimaryContact from "./forms/primary";
import SecondaryContact from "./forms/secondary";
import Address from "./forms/address";
import Emergency from "./forms/emergency";
import Students from "./forms/students";
import { Button } from "@/components/ui/button";
import { FamilyFormProvider, useFamilyForm } from "./forms/form-context";

const MultiStepFormContent = () => {
  const [step, setStep] = useQueryState("step", {
    defaultValue: "1",
  });
  const { form } = useFamilyForm();
  const { trigger } = form;

  const currentStep = Number.parseInt(step);

  const validateCurrentStep = async () => {
    let fieldsToValidate: string[] = [];

    switch (currentStep) {
      case 1:
        fieldsToValidate = ["branch", "familyName"];
        break;
      case 2:
        fieldsToValidate = [
          "contact1.relation",
          "contact1.firstName",
          "contact1.lastName",
          "contact1.phone",
          "contact1.email",
        ];
        break;
      case 3:
        fieldsToValidate = [
          "contact2.relation",
          "contact2.firstName",
          "contact2.lastName",
          "contact2.phone",
          "contact2.email",
        ];
        break;
      case 4:
        fieldsToValidate = [
          "address.homeAddress",
          "address.city",
          "address.state",
          "address.zip",
        ];
        break;
      case 5:
        fieldsToValidate = ["emergencyContact.name", "emergencyContact.phone"];
        break;
      default:
        return true;
    }

    return await trigger(fieldsToValidate as never);
  };

  const nextStep = async () => {
    if (currentStep < 6) {
      const isValid = await validateCurrentStep();
      if (isValid) {
        setStep((currentStep + 1).toString());
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setStep((currentStep - 1).toString());
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInformation />;
      case 2:
        return <PrimaryContact />;
      case 3:
        return <SecondaryContact />;
      case 4:
        return <Address />;
      case 5:
        return <Emergency />;
      case 6:
        return <Students />;
      default:
        return <PersonalInformation />;
    }
  };

  return (
    <div className="w-full">
      <CardContainer className="border border-gray-100 bg-white">
        <div className="p-3 md:p-6">
          <div className="mb-4 md:mb-8">
            <Stepper currentStep={currentStep} />
          </div>

          <div className="min-h-fit mb-8">{renderStepContent()}</div>

          <div className="flex items-center justify-between pt-6 border-t border-gray-100">
            <Button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              variant="outline"
              className="min-w-24 rounded-full"
            >
              Previous
            </Button>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>{currentStep} of 6 steps completed</span>
            </div>

            {currentStep < 6 ? (
              <Button
                type="button"
                onClick={nextStep}
                className="min-w-24 rounded-full"
              >
                Next
              </Button>
            ) : (
              <Button
                type="submit"
                form="student-form"
                className="min-w-32 bg-green-600 hover:bg-green-700 rounded-full"
              >
                Submit Registration
              </Button>
            )}
          </div>
        </div>
      </CardContainer>
    </div>
  );
};

const MultiStepForm = () => {
  return (
    <FamilyFormProvider>
      <MultiStepFormContent />
    </FamilyFormProvider>
  );
};

export default MultiStepForm;
