import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "src/database/dados.db",
    synchronize: true,
    logging: false,
    entities: ["src/entity/*.ts"],
    migrations: ['src/migration/*.ts'],
    subscribers: [],
})
