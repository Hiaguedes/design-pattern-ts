/// <reference path="./interfaces.ts" />
/// <reference path="./checkout/checkout.ts" />
/// <reference path="./pix/factory.ts" />
/// <reference path="./pix/processor.ts" />
/// <reference path="./mercadopago/factory.ts" />
/// <reference path="./mercadopago/processor.ts" />

const checkoutPix = new WithFactoryMethod.CheckoutFactory(new WithFactoryMethod.PixFactory());
checkoutPix.processPayment(114.32);