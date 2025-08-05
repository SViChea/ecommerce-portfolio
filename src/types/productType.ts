import { CategoryType } from "./categoryType";

export type ProductType = {
    id : number;
    title: string;
    slug: string;
    category : CategoryType;
    images: string;
    price: number;
}