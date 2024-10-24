import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateSchema1729795237909 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS auth`);
        await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS extensions`);
        await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS graphql`);
        await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS graphql_public`);
        await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS pgbouncer`);
        await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS pgsodium`);
        await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS public`);
        await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS realtime`);
        await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS storage`);
        await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS vault`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP SCHEMA IF NOT EXISTS auth CASCADE`);
        await queryRunner.query(`DROP SCHEMA IF NOT EXISTS extensions CASCADE`);
        await queryRunner.query(`DROP SCHEMA IF NOT EXISTS graphql CASCADE`);
        await queryRunner.query(`DROP SCHEMA IF NOT EXISTS graphql_public CASCADE`);
        await queryRunner.query(`DROP SCHEMA IF NOT EXISTS pgbouncer CASCADE`);
        await queryRunner.query(`DROP SCHEMA IF NOT EXISTS pgsodium CASCADE`);
        await queryRunner.query(`DROP SCHEMA IF NOT EXISTS public CASCADE`);
        await queryRunner.query(`DROP SCHEMA IF NOT EXISTS realtime CASCADE`);
        await queryRunner.query(`DROP SCHEMA IF NOT EXISTS storage CASCADE`);
        await queryRunner.query(`DROP SCHEMA IF NOT EXISTS vault CASCADE`);
    }

}
