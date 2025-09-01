export interface Policy {
  id: string;
  title: string;
  description: string;
  status: "active" | "draft";
  created_at: Date;
}

export interface PolicyFormData {
  title: string;
  description: string;
  status: string;
}
