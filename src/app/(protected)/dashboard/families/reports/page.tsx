import Heading from "@/components/atoms/heading";
import FamilyReportList from "./_components/family-report-list";

export default function FamilyReportPage() {
  return (
    <div>
      <Heading text="Family Reports" className="mb-4" />
      <FamilyReportList />
    </div>
  );
}
