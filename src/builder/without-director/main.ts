import { PixBuilder } from "./builders/pix-builder";
import { CreditCardBuilder } from "./builders/credit-card-builder";


const pixBuilder = new PixBuilder();
pixBuilder
    .setOrderId('123')
    .addItem('Camiseta', 49.9, 1)
    .addItem('Calça', 89.9, 1)
    .setCostumerEmail('any@mail.com')
    .setPixKey('123456789')
    .setPayerName('Any Name');
pixBuilder.construct();

const pixOrder = pixBuilder.getResult();
console.log(pixOrder.getSummary());

const creditCardBuilder = new CreditCardBuilder();

creditCardBuilder
    .setOrderId('123')
    .addItem('Camiseta', 49.9, 1)
    .addItem('Calça', 89.9, 1)
    .addItem('Tênis', 129.9, 1)
    .setCostumerEmail('any-email-credit@mail.com')
    .setCardNumber('1234 5678 1234 5678')
    .setCardExpiration('12/23')
    .setCardVerificationCode('123')
    .setCardHolderName('Any Name')
    .construct();

const creditCardOrder = creditCardBuilder.getResult();
console.log(creditCardOrder.getSummary());
