/// <reference path="../interfaces.ts" />
/// <reference path="./processor.ts" />


namespace WithFactoryMethod {
    export class PixFactory implements PaymentProcessorFactory {
        private readonly pixKey: string = "pix"
        private readonly merchantName: string = "merchantName"

        createProcessor(): PaymentProcessor {
            return new PixProcessor(this.pixKey, this.merchantName);
        }
    }
}