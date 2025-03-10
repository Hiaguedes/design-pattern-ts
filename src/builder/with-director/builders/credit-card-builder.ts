import { OrderCheckout } from "../checkout/order-checkout";
import { OrderCheckoutBuilder, Address } from "../interfaces";


export class CreditCardBuilder implements OrderCheckoutBuilder {
    private orderId: string = '';
    private items: Array<{ name: string, price: number, quantity: number }> = [];
    private costumerEmail: string = '';
    private shippingAddress?: Address;
    private cardNumber: string = '';
    private cardExpiration: string = '';
    private cardVerificationCode: string = '';
    private cardHolderName: string = '';


    private result: OrderCheckout | null = null;

    reset(): void {
        this.result = null;
        this.orderId = '';
        this.items = [];
        this.costumerEmail = '';
        this.shippingAddress = undefined;
        this.cardNumber = '';
        this.cardExpiration = '';
        this.cardVerificationCode = '';
        this.cardHolderName = '';
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

    setCardNumber(cardNumber: string): this {
        this.cardNumber = cardNumber;
        return this;
    }

    setCardExpiration(cardExpiration: string): this {
        this.cardExpiration = cardExpiration;
        return this;
    }

    setCardVerificationCode(cardVerificationCode: string): this {
        this.cardVerificationCode = cardVerificationCode;
        return this;
    }

    setCardHolderName(cardHolderName: string): this {
        this.cardHolderName = cardHolderName;
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

        if (!this.cardNumber || !this.cardExpiration || !this.cardVerificationCode || !this.cardHolderName) {
            throw new Error('Card details are required');
        }

        this.result = new OrderCheckout(
            this.orderId,
            this.items,
            this.costumerEmail,
            this.shippingAddress!,
            'credit',
            {
                cardNumber: this.cardNumber,
                cardExpiration: this.cardExpiration,
                cardVerificationCode: this.cardVerificationCode,
                cardHolderName: this.cardHolderName
            }
        );

    }

    getResult(): OrderCheckout {
        if (!this.result) {
            throw new Error('Call construct method before call getResult');
        }

        return this.result;
    }
}
