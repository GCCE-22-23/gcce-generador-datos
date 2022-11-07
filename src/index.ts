import { sequelize, initializeDatabase } from './database/index.js'
import { generateStudent } from './generators/index.js';

try {
    await sequelize.authenticate();
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
await initializeDatabase()
await generateStudent()

sequelize.close()
