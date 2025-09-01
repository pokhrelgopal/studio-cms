import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function UpcomingBirthdaysCard() {
  return (
    <div className="flex flex-col h-full">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Upcoming Birthdays
      </h3>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select Month" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="jan">January</SelectItem>
          <SelectItem value="feb">February</SelectItem>
          <SelectItem value="mar">March</SelectItem>
          <SelectItem value="apr">April</SelectItem>
          <SelectItem value="may">May</SelectItem>
          <SelectItem value="jun">June</SelectItem>
          <SelectItem value="jul">July</SelectItem>
          <SelectItem value="aug">August</SelectItem>
          <SelectItem value="sep">September</SelectItem>
          <SelectItem value="oct">October</SelectItem>
          <SelectItem value="nov">November</SelectItem>
          <SelectItem value="dec">December</SelectItem>
        </SelectContent>
      </Select>
      {/* You can add a list of upcoming birthdays here */}
    </div>
  );
}
