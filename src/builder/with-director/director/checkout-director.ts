import { CreditCardBuilder } from "../builders/credit-card-builder";
import { PixBuilder } from "../builders/pix-builder";
import { Address, OrderCheckoutBuilder } from "../interfaces";

export class CheckoutDirector {
    createGamerBundleCheckout(builder: OrderCheckoutBuilder,
        orderId: string,
        email: string,
        shippingAddress: Address
    ): void {

        builder
            .setOrderId(orderId)
            .addItem('Iphone 18', 8000, 1)
            .addItem('Case Iphone', 70, 1)
            .addItem('Earbuds', 100, 1)
            .setCostumerEmail(email)
            .setShippingAddress(shippingAddress)


            .construct();
    }
}