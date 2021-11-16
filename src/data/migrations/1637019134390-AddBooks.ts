import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class AddBooks1637019134390 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'books',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true
          },
          {
            name: 'editora',
            type: 'varchar'
          },
          {
            name: 'foto',
            type: 'varchar'
          },
          {
            name: 'autores',
            type: 'varchar',
            isArray: true
          },
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('books')
  }

}
