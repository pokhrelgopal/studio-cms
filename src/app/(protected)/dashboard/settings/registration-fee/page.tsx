import Heading from "@/components/atoms/heading";
import RegistrationFeeForm from "./_components/registration-fee-form";

export default function RegistrationFeePage() {
  return (
    <div>
      <Heading text="Registration Fee" className="mb-4" />
      <RegistrationFeeForm />
    </div>
  );
}
