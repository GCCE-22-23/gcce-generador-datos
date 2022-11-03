import { Sequelize } from 'sequelize'

const dbHost = process.env.GCCE_DB_HOST || "localhost",
      dbName = process.env.GCCE_DB_NAME || "gcce",
      dbUser = process.env.GCCE_DB_USER || "gcce",
      dbPassword = process.env.GCCE_DB_PASSWORD || "1234"


export const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: "postgres"
})
