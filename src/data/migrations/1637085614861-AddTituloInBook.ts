import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddTituloInBook1637085614861 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('books', new TableColumn({
      name: 'titulo',
      type: 'varchar'
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('books', 'titulo')
  }

}
