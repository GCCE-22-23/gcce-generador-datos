import { sequelize, initializeDatabase } from './database/index.js'

await initializeDatabase()
sequelize.close()
