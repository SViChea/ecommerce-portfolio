import { CategoryType } from "./categoryType";

export type ProductType = {
    id : number;
    title: string;
    images: string;
    price: number;
    description: string;
    category: CategoryType;
}

export type CreateProductType = {
    title: string;
    images: string[];
    price: number;
    description: string;
    categoryId: number;
}

export type UpdateProductType = {
    title: string;
    price: number;
    images: string[];
    description: string;
}

export type ProductDetailType = {
    id : number;
    title: string;
    description: string;
    images: string[];
    price: number;
}