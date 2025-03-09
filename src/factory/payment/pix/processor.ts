import { PaymentProcessor } from "../interfaces";

export class PixProcessor implements PaymentProcessor {
    private pixKey: string;
    private merchantName: string;

    constructor(pixKey: string, merchantName: string) {

        if (!pixKey) {
            throw new Error('Pix: Pix key is required');
        }

        if (!merchantName) {
            throw new Error('Pix: Merchant name is required');
        }

        this.pixKey = pixKey;
        this.merchantName = merchantName;
        console.log('Pix: Payment processor created');
    }

    processPayment(amount: number): void {
        console.log(`Pix: Processing payment of ${amount}`);
        console.log(`Recebedor: ${this.merchantName}`);
        console.log(`Chave PIX: ${this.pixKey}`);
        console.log(`Pix: Payment processed`);
    }
    getPaymentInfo(): string {
        return `Pix: Payment - Sem taxa e pagamento instantaneo`;
    }
}
