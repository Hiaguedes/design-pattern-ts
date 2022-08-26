import { Subject, Observer } from "./types";

const RandomNumberGenerator = (): Subject => {

    const ObserversRegistred: Observer[] = [];

    const notifyObservers = () => {

        const randomNumber = 100 * Math.random()

        ObserversRegistred.forEach(observer => {
            observer.update(randomNumber);
        })
    }

    const removeObserver = (observer: Observer) => {
        const index = ObserversRegistred.indexOf(observer);

        if(index > -1){
            ObserversRegistred.splice(index, 1)
        }

    }

    const registerObserver = (observer: Observer) => {
        const index = ObserversRegistred.indexOf(observer);
        if(index > -1) return;

        ObserversRegistred.push(observer);
    }

    return {
        notifyObservers,
        removeObserver,
        registerObserver,
    }
}

export default RandomNumberGenerator;