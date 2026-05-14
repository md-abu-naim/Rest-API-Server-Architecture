
export interface IProduct {
    id: number;
    name: string;
    image: string;
    category: "Face Care" | "Hair Care" | "Body Care" | "Lip Care";
    price: number;
    status: "In Stock" | "Limited Stock" | "Sold Out";
    description: string;
    features: string[];
}