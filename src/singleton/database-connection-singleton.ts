class DatabaseConnection {
    private static instance: DatabaseConnection;
    private constructor() {
        console.info('Database connection created');
    }

    public static getInstance(): DatabaseConnection {
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
        }
        return DatabaseConnection.instance;
    }

    public query(sql: string): void {
        console.info('Query executed:', sql);
    }
}


const con1 = DatabaseConnection.getInstance();
const con2 = DatabaseConnection.getInstance();

// Mesma instancia?

console.log(con1 === con2); // true

// mesma conexao constructor sendo executado apenas uma vez

con1.query('SELECT * FROM users');