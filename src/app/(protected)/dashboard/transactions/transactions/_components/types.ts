export interface Transaction {
  id: string;
  amount: string;
  category: string;
  transaction_type: "income" | "expense";
  account: string;
  description?: string;
  reference?: string;
  date: Date;
  status: "paid" | "unpaid" | "partial";
  created_at: Date;
  family_name?: string;
  student_name?: string;
}

export interface TransactionFormData {
  amount: string;
  category: string;
  transaction_type: string;
  account: string;
  description?: string;
  reference?: string;
  date: Date;
  status: string;
}
