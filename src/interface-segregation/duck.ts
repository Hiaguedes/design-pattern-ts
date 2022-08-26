interface Duck {
    silence: () => string;
    walk: () => string;
}

interface Animal {
    breathe: () => void
}

interface Flyable {
    fly: () => string;
}

interface Quackable {
    quack: () => string;
}

interface Bird extends Animal, Flyable {}

type DefaultDuck = Animal & Duck & Flyable & Quackable

type FlyBehavior = {
    fly: () => string;
}

const duck: DefaultDuck = {
    fly: () => 'eu posso voar',
    quack: () => 'quack!',
    silence: () => '---',
    walk: () => 'soms de passo',
    breathe: () => 'respira',

}

interface ChangeFlyBehavior {
    setFlyBehavior: (obj: FlyBehavior) => void;
}

const bird: Bird & ChangeFlyBehavior  = {
    fly: () => 'voo como um passaro',
    breathe: () => 'respira',
    setFlyBehavior(obj: FlyBehavior){ 
        this.fly = obj.fly;
    }
}

const ErracticFly: FlyBehavior = {
    fly: () => 'voando todo errado'
}

export default duck
export { bird, ErracticFly }