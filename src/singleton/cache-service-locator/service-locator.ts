export class ServiceLocator {
    private static instance: ServiceLocator | null = null;
    private service: Map<string, any>;

    private constructor() {
        this.service = new Map<string, any>();
    }

    public static getInstance(): ServiceLocator {
        if (!ServiceLocator.instance) {
            ServiceLocator.instance = new ServiceLocator();
        }
        return ServiceLocator.instance;
    }

    register<T>(name: string, service: T): void {
        this.service.set(name, service);
    }

    get<T>(name: string): T {
        const service = this.service.get(name);
        if (!service) {
            throw new Error(`Service ${name} not found`);
        }
        return service;
    }
}