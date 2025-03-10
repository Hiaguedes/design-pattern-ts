import { PaymentMethod, Address, Discount } from "../interfaces";

export class OrderCheckout {
    constructor(
        public readonly orderId: string,
        public readonly items: Array<{ name: string, price: number, quantity: number }>,
        public readonly costumerEmail: string,
        public readonly shippingAddress: Address,
        public readonly paymentMethod: PaymentMethod,
        public readonly paymentDetails: Record<string, any>
    ) { }

    getTotalAmount(): number {
        return this.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }

    getSummary(): string {
        return `Order ID: ${this.orderId} - ${this.paymentMethod} - $${this.getTotalAmount().toFixed(2)}`;
    }

    applyDiscount(value: number, discount: Discount): number {
        if (discount === 'fixed') {
            console.log('applyDiscount the total amount will be', this.getTotalAmount() - value);
            return this.getTotalAmount() - value;
        } else if (discount === 'percentage') {
            console.log('applyDiscount the total amount will be', this.getTotalAmount() - this.getTotalAmount() * (value / 100));
            return this.getTotalAmount() - this.getTotalAmount() * (value / 100);
        }
    }
}
