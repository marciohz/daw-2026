import { products, type Product } from "../dtos/product";

export const ProductService = {
    listAll() {
        return products;
    }
}