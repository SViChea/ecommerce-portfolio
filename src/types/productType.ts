export type ProductType = {
    id : number;
    title: string;
    images: string;
    price: number;
}

export type ProductDetailType = {
    id : number;
    title: string;
    description: string;
    images: string[];
    price: number;
}