export interface Account {
  id: string;
  name: string;
  type: string;
  openingBalance: number;
  currentBalance: number;
  isDefault: boolean;
  status: "active" | "inactive";
  created_at: Date;
}

export interface AccountFormData {
  name: string;
  type: string;
  openingBalance: number;
  isDefault: boolean;
  status: string;
}
