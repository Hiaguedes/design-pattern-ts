import { OrderCheckout } from "./checkout/order-checkout";

export interface Address {
    address: string;
    city: string;
}

export type PaymentMethod = 'credit' | 'pix';

export interface OrderCheckoutBuilder {
    reset(): void;
    setOrderId(orderId: string): this; // retornar o proprio objeto para encadear
    addItem(name: string, price: number, quantity: number): this;
    setCostumerEmail(email: string): this;
    construct(): void; // constroi o objeto OrderCheckout com a configuracao atual, ele nao retorna o objeto construido apenas constroi internamente
    getResult(): OrderCheckout;  // retorna o objeto OrderCheckout construido, obtem o produto apos a construcao
}
