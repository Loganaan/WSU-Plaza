export interface Category {
  id: number;
  field: string;
}

export interface Listing {
  id: number;
  title: string;
  description: string | null;
  price: number;
  imageUrl: string | null;
  status: string;
  dateListed: string;
  category: Category | null;
}
