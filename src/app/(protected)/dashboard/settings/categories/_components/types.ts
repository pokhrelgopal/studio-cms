export interface Category {
  id: string;
  name: string;
  description: string;
  status: "active" | "draft";
  created_at: Date;
}

export interface CategoryFormData {
  name: string;
  description: string;
  status: string;
}
