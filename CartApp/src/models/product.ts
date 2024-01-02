import { ProductImage } from "./product-image";

export interface Product {
    id: number;
    categoryId: number;
    name: string;
    price: number;
    image: ProductImage;
    description: string;
    createdDate: string;
    isActive: boolean; // Boolean bir değer varsa 'is....' ile tanımlanır.

}
