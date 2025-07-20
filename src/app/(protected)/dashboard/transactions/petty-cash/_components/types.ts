export interface PettyCash {
  id: string;
  amount: string;
  account: string;
  description?: string;
  date: Date;
  created_at: Date;
}

export interface PettyCashFormData {
  amount: string;
  account: string;
  description?: string;
  date: Date;
}
