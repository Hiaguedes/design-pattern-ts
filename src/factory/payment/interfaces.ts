export interface PaymentProcessor {
    processPayment(amount: number): void;
    getPaymentInfo(): string;
}

export interface PaymentProcessorFactory {
    createProcessor(): PaymentProcessor;
}

export type PaymentMethod = 'credit' | 'pix' | 'mercadopago';
