import React from "react";
import ReportList from "./_components/report-list";
import Heading from "@/components/atoms/heading";

const ReportsPage = () => {
  return (
    <div>
      <Heading text="Reports" className="mb-4" />
      <ReportList />
    </div>
  );
};

export default ReportsPage;
