import chalk from "chalk";
import { ServiceLocator } from "./service-locator";
import { ICache, CacheService } from "./cache-service";

console.info(chalk.green("Service Locator Cache"));

const serviceLocator = ServiceLocator.getInstance();
serviceLocator.register<ICache>("cache", new CacheService()); // registro classe de cache no service locator

const cache = serviceLocator.get<ICache>("cache");  // recupero a classe de cache do service locator e uso como se fosse um singleton
const cacheClone = serviceLocator.get<ICache>("cache");

cache.set("user", "John Doe");

console.log(cache.get("user")); // John Doe
console.log(cacheClone.get("user")); // John Doe

// ideia do service locator e permitir que classes que dependem de outras classes possam obter essas classes sem precisar instanciar elas e sem precisar passar elas como parametro
// separando a responsabilidade de instanciar as classes e de usar as classes
// o service locator é um singleton que registra classes e as disponibiliza para outras classes que dependem delas
