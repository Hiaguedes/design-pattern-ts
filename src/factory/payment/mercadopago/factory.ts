import { PaymentProcessor, PaymentProcessorFactory } from "../interfaces";
import { MercadoPagoPaymentProcessor } from "./processor";

export class MercadoPagoFactory implements PaymentProcessorFactory {
    private readonly accessToken: string = "token-mercado-pago"; // no factory eu implemento especificidades do funcionamento interno 
    private readonly installments: number = 1;

    createProcessor(): PaymentProcessor {
        return new MercadoPagoPaymentProcessor(this.accessToken, this.installments);
    }
}
