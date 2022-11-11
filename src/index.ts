import { sequelize, initializeDatabase } from './database/index.js'
import { generateStudent } from './generators/index.js';

try {
    await sequelize.authenticate();
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
await initializeDatabase()

let promises = []
for (var i = Number(process.env.GCCE_NUMBER_OF_STUDENTS_TO_GENERATE) || 1000; i > 0; i--) {
    promises.push(generateStudent())
}

await Promise.all(promises)
sequelize.close()
