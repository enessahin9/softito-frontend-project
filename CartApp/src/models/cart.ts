export interface Cart {
    id: number;
    userId: number;
}

export interface CartItem {
    cartId: number;
    productId: number;
    count: number;
}