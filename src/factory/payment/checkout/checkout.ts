/// <reference path="../interfaces.ts" />
// a parametrizacao do create processor tem que ser minima de preferencia nula, pois quem implementa nao deve conhececer sua complexidade

// checkout


namespace WithFactoryMethod {
    export class CheckoutFactory {
        constructor(private paymentProcessorFactory: PaymentProcessorFactory) { }

        processPayment(amount: number): void {
            try {
                const paymentProcessor = this.paymentProcessorFactory.createProcessor();
                console.log('\nInfo do pagamento:');
                console.log(paymentProcessor.getPaymentInfo());
                paymentProcessor.processPayment(amount);
            } catch (error) {
                console.error(`error ao processar pagamento: ${error.message}`);
            }
        }
    }
}