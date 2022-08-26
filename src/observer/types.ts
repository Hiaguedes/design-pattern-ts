interface Subject {
    registerObserver: (observer: Observer) => void;
    removeObserver: (observer: Observer) => void;
    notifyObservers: () => void;
}

interface Observer {
    update: (number: number) => void;
}

export { Subject, Observer }