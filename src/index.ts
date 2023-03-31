import { createConnection } from 'mysql';
import { logger } from './Logger.js';

const host = 'localhost';
const user = 'zach';
const password = '';
const database = 'test';

async function main() {
    logger.info(`Initializing`);

    var connection = createConnection({
        host,
        user,
        password,
        database,
    });

    connection.connect();

    logger.info('Connected to database');

    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
        if (error) throw error;

        if (results[0].solution === 2) {
            logger.info('Database appears functional');
        }

        connection.end();
    });
}

main();
