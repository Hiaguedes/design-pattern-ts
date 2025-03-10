import { CreditCardBuilder } from "./builders/credit-card-builder";
import { CheckoutDirector } from "./director/checkout-director";

const creditCardBuilder = new CreditCardBuilder();
const director = new CheckoutDirector();

creditCardBuilder
    .setCardExpiration('12/23')
    .setCardHolderName('Any Name')
    .setCardNumber('1234 5678 1234 5678')
    .setCardVerificationCode('123')

director.createGamerBundleCheckout(creditCardBuilder, '123', 'email@mail.com', { address: 'Any Street', city: 'Any City' })

console.log(creditCardBuilder.getResult().applyDiscount(10, 'percentage')); // Order ID: 123, Items: 3, Total: 8199.9, Email: