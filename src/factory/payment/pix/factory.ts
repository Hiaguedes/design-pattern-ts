import { PaymentProcessor, PaymentProcessorFactory } from "../interfaces";
import { PixProcessor } from "./processor";

export class PixFactory implements PaymentProcessorFactory {
    private readonly pixKey: string = "pix"
    private readonly merchantName: string = "merchantName"

    createProcessor(): PaymentProcessor {
        return new PixProcessor(this.pixKey, this.merchantName);
    }
}
