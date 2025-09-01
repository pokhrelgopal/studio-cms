export interface Branch {
  id: string;
  name: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email?: string;
  status: "active" | "draft";
  created_at: Date;
}

export interface BranchFormData {
  name: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email?: string;
  status: string;
}
