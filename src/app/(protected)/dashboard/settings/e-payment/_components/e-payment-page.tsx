import CardContainer from "@/components/atoms/card-container";
import { Button } from "@/components/ui/button";

export const EPaymentPage = () => {
  return (
    <CardContainer>
      <div className="space-y-3 mb-4 bg-red-50 p-3 rounded-lg text-red-700">
        <h2 className="text-2xl font-bold">Ohh no</h2>
        <p>
          It&apos;s looks like you haven&apos;t connected your Stripe account
          yet. Please click the button below to connect your Stripe account
        </p>
        <p>
          If you have any questions, please contact our support team at
          info@bloomingdance.com.
        </p>
      </div>
      <Button className="rounded-full">Connect with Stripe</Button>
    </CardContainer>
  );
};
