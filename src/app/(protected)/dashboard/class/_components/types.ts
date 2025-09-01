export interface Class {
  id: string;
  className: string;
  instructor: string;
  category: string;
  classDescription: string;
  studioBranch: string;
  startDate: Date;
  time: string;
  days: string[];
  classDuration: string;
  registrationStartDate?: Date;
  hasRegistrationFee: "Yes" | "No";
  classFee?: number;
  classCapacity: number;
  feeTerms: string;
  studentsEnrolled: number;
  status: "Active" | "Inactive" | "Upcoming";
}
