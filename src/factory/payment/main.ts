import { CheckoutFactory } from "./checkout/checkout";
import { MercadoPagoFactory } from "./mercadopago/factory";
import { PixFactory } from "./pix/factory";


const checkoutPix = new CheckoutFactory(new PixFactory());
checkoutPix.processPayment(114.32);

const checkoutMercadoPago = new CheckoutFactory(new MercadoPagoFactory());
checkoutMercadoPago.processPayment(224.32);