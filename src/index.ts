import duck, { bird, ErracticFly } from './interface-segregation/duck'

console.log(duck.quack())
console.log('voando como um pato: ', duck.fly())
console.log('voando como um passaro: ', bird.fly())
console.log('setando voo diferenciado do passaro', bird.setFlyBehavior(ErracticFly));
console.log('voando como um passaro todo errado: ', bird.fly())


