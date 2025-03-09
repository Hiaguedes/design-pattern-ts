import { PaymentProcessor } from "../interfaces";

export class MercadoPagoPaymentProcessor implements PaymentProcessor {
    private accessToken: string;
    private installments: number;

    constructor(accessToken: string, installments: number) {
        if (installments < 1 || installments > 12) {
            throw new Error('Mercado Pago: Installments must be between 1 and 12');
        }
        this.accessToken = accessToken;
        this.installments = installments;
        console.log('Mercado Pago: Payment processor created');
    }
    processPayment(amount: number): void {
        console.log(`Mercado Pago: Processing payment of ${amount} with ${this.installments} installments`);
        console.log(`Mercado Pago: Payment processed`);
    }
    getPaymentInfo(): string {
        return `Mercado Pago: Access Token: ${this.accessToken}, Installments: ${this.installments} - Taxa 2.3%`;
    }

    pay(amount, installments) {
        console.log(`Paying ${amount} using Mercado Pago with ${installments} installments`);
    }
}
