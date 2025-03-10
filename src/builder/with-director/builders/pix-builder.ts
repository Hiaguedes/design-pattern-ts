import { OrderCheckout } from "../checkout/order-checkout";
import { OrderCheckoutBuilder, Address } from "../interfaces";

export class PixBuilder implements OrderCheckoutBuilder {
    private orderId: string = '';
    private items: Array<{ name: string, price: number, quantity: number }> = [];
    private costumerEmail: string = '';
    private shippingAddress?: Address;
    private pixKey: string = '';
    private payerName: string = '';

    private result: OrderCheckout | null = null;

    reset(): void {
        this.result = null;
        this.orderId = '';
        this.items = [];
        this.costumerEmail = '';
        this.shippingAddress = undefined;
        this.pixKey = '';
        this.payerName = '';
    }

    setOrderId(orderId: string): this {
        this.orderId = orderId;
        return this;
    }


    setShippingAddress(address: Address): this {
        this.shippingAddress = address;
        return this;
    }

    addItem(name: string, price: number, quantity: number): this {
        this.items.push({ name, price, quantity });
        return this;
    }

    setCostumerEmail(email: string): this {
        this.costumerEmail = email;
        return this;
    }

    setPixKey(pixKey: string): this {
        this.pixKey = pixKey;
        return this;
    }

    setPayerName(payerName: string): this {
        this.payerName = payerName;
        return this;
    }

    construct(): void {
        if (!this.orderId) {
            throw new Error('Order ID is required');
        }

        if (this.items.length === 0) {
            throw new Error('Items are required');
        }

        if (!this.costumerEmail) {
            throw new Error('Costumer email is required');
        }

        if (!this.pixKey || !this.payerName) {
            throw new Error('Pix details are required');
        }

        this.result = new OrderCheckout(
            this.orderId,
            this.items,
            this.costumerEmail,
            this.shippingAddress!,
            'pix',
            { pixKey: this.pixKey, payerName: this.payerName }
        );

    }

    getResult(): OrderCheckout {
        if (!this.result) {
            throw new Error('Call construct method before call getResult');
        }

        return this.result;
    }
}
