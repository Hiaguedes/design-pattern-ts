export interface ICache {
    set(key: string, value: any): void;
    get(key: string): any;
    has(key: string): boolean;
    delete(key: string): void;
    clear(): void;
}

export class CacheService implements ICache {
    private cache: Map<string, any>;

    constructor() {
        this.cache = new Map<string, any>();
    }

    set(key: string, value: any): void {
        this.cache.set(key, value);
    }

    get(key: string): any {
        return this.cache.get(key);
    }

    has(key: string): boolean {
        return this.cache.has(key);
    }

    delete(key: string): void {
        this.cache.delete(key);
    }

    clear(): void {
        this.cache.clear();
    }
}