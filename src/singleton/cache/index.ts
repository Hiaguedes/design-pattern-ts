import chalk from "chalk";
import { RegularCache } from "./regular-cache";
import { SingletonCache } from "./singleton-cache";

const regularCache1 = new RegularCache();
const regularCache2 = new RegularCache();

regularCache1.set("user", "John Doe");

console.info(chalk.green("Regular Cache"));
console.log(regularCache1.get("user")); // John Doe
console.log(regularCache2.get("user")); // undefined

const singletonCache1 = SingletonCache.getInstance();
const singletonCache2 = SingletonCache.getInstance(); // Error: private constructor

singletonCache1.set("user", "John Doe");

console.info(chalk.green("Singleton Cache"));
console.log(singletonCache1.get("user")); // John Doe
console.log(singletonCache2.get("user")); // John Doe