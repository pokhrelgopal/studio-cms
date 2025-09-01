import Heading from "@/components/atoms/heading";
import NavigationTabs from "@/components/templates/navigation-tabs";
import React from "react";

type Props = {
  children?: React.ReactNode;
};

const layout = (props: Props) => {
  return (
    <div>
      <Heading className="mb-2" text="Communication" />
      <NavigationTabs navItems={navItems} />
      <div className="mt-5">{props.children}</div>
    </div>
  );
};

export default layout;

const navItems = [
  {
    label: "Sent Messages",
    href: "/dashboard/communication",
  },
  {
    label: "Send Email",
    href: "/dashboard/communication/send-email",
  },
  {
    label: "Send SMS",
    href: "/dashboard/communication/send-sms",
  },
];
