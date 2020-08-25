import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

  private static TABLE_NAME = "User_Arq";

  public async createUser(
    id: string,
    name: string,
    email: string,
    password: string,
    role: string
  ): Promise<void> {
    try {
      await super.getConnection().raw(`
      INSERT INTO ${UserDatabase.TABLE_NAME} (id, name, email, password, role)
      VALUE(
        "${id}",
        "${name}",
        "${email}",
        "${password}",
        "${role}"
      )
    `)
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getUserByEmail(email: string): Promise<any> {
    try {
      const result = await this.getConnection().raw(`
        SELECT * FROM ${UserDatabase.TABLE_NAME}
        WHERE email = "${email}"
      `)
      return result[0][0]
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }

  }







}
