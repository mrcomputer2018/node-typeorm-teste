import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableCategory1732565043723 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table(
            {
                name: "categories",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isNullable: false, // mao pode ser nulo
                        isUnique: true // nao pode ser repetido
                    },
                    {
                        name: "description",
                        type: "varchar",
                        isNullable: false
                    }
                ]
            }
        )) 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("categories")
    }

}
