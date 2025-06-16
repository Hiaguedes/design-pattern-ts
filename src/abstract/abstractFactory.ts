interface Flight {
    origin: string;
    destination: string;
    airline?: string; // optional property
    getDetails(): string;
}

interface Hotel {
    location: string;
    city: string;
    getDetails(): string;
}

interface Transfer {
    type: string;
    getDetails(): string;
}

class DomesticFlight implements Flight {
    origin: string;
    destination: string;
    airline?: string;

    constructor(origin: string, destination: string, airline?: string) {
        this.origin = origin;
        this.destination = destination;
        this.airline = airline;
    }

    getDetails(): string {
        return `Domestic Flight from ${this.origin} to ${this.destination}${this.airline ? ` with airline ${this.airline}` : ''}`;
    }
}

class InternationalFlight implements Flight {
    origin: string;
    destination: string;
    airline?: string;

    constructor(origin: string, destination: string, airline?: string) {
        this.origin = origin;
        this.destination = destination;
        this.airline = airline;
    }

    getDetails(): string {
        return `International Flight from ${this.origin} to ${this.destination}${this.airline ? ` with airline ${this.airline}` : ''}`;
    }
}

class DomesticHotel implements Hotel {
    location: string;
    city: string;

    constructor(location: string, city: string) {
        this.location = location;
        this.city = city;
    }

    getDetails(): string {
        return `Domestic Hotel located at ${this.location}, ${this.city}`;
    }
}

class InternationalHotel implements Hotel {
    location: string;
    city: string;

    constructor(location: string, city: string) {
        this.location = location;
        this.city = city;
    }

    getDetails(): string {
        return `International Hotel located at ${this.location}, ${this.city}`;
    }
}

class DomesticTransfer implements Transfer {
    type: string;

    constructor(type: string) {
        this.type = type;
    }

    getDetails(): string {
        return `Domestic Transfer of type ${this.type}`;
    }
}

class InternationalTransfer implements Transfer {
    type: string;

    constructor(type: string) {
        this.type = type;
    }

    getDetails(): string {
        return `International Transfer of type ${this.type}`;
    }
}

// nesse ponto eu tenho um produto nacional e internacional, e posso criar uma fabrica que cria esses produtos
// e posso criar uma fabrica que cria esses produtos

interface TravelPackageFactory {
    createFlight(origin: string, destination: string, airline?: string): Flight;
    createHotel(location: string, city: string): Hotel;
    createTrasfer(type: string): Transfer;
}

class DomesticTravelPackageFactory implements TravelPackageFactory {
    createFlight(origin: string, destination: string, airline?: string): Flight {
        return new DomesticFlight(origin, destination, airline ?? 'Local Airline');
    }

    createHotel(location: string, city: string): Hotel {
        return new DomesticHotel(location, city);
    }

    createTrasfer(type: string): Transfer {
        return new DomesticTransfer(type);
    }
}

class InternationalTravelPackageFactory implements TravelPackageFactory {
    createFlight(origin: string, destination: string, airline?: string): Flight {
        return new InternationalFlight(origin, destination, airline ?? 'International Airline');
    }

    createHotel(location: string, city: string): Hotel {
        return new InternationalHotel(location, city);
    }

    createTrasfer(type: string): Transfer {
        return new InternationalTransfer(type);
    }
}

class BookingSystem { // BookingSystem é o diretor que usa a fábrica para criar os produtos
    private factory: TravelPackageFactory;

    constructor(factory: TravelPackageFactory) {
        this.factory = factory;
    }

    private bookFlight(origin: string, destination: string, airline?: string): Flight {
        return this.factory.createFlight(origin, destination, airline);
    }

    private bookHotel(location: string, city: string): Hotel {
        return this.factory.createHotel(location, city);
    }

    private bookTransfer(type: string): Transfer {
        return this.factory.createTrasfer(type);
    }

    createTravelPackage(
        origin: string,
        destination: string,
        airline: string | undefined,
        hotelLocation: string,
        transferType: string
    ): { flight: Flight; hotel: Hotel; transfer: Transfer } {
        const flight = this.bookFlight(origin, destination, airline);
        const hotel = this.bookHotel(hotelLocation, destination);
        const transfer = this.bookTransfer(transferType);

        return { flight, hotel, transfer };
    }
}

// Example usage
const domesticFactory = new DomesticTravelPackageFactory();
const internationalFactory = new InternationalTravelPackageFactory();

const domesticBookingSystem = new BookingSystem(domesticFactory);
const internationalBookingSystem = new BookingSystem(internationalFactory);

const domesticPackage = domesticBookingSystem.createTravelPackage(
    'São Paulo',
    'Rio de Janeiro',
    'Gol Airlines',
    'Copacabana Hotel',
    'Airport Shuttle'
);
const internationalPackage = internationalBookingSystem.createTravelPackage(
    'New York',
    'London',
    'British Airways',
    'Central London Hotel',
    'Airport Transfer'
);

console.log(domesticPackage.flight.getDetails());
console.log(domesticPackage.hotel.getDetails());
console.log(domesticPackage.transfer.getDetails());
console.log('\n');
console.log(internationalPackage.flight.getDetails());
console.log(internationalPackage.hotel.getDetails());
console.log(internationalPackage.transfer.getDetails());