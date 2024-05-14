import { resolve } from 'path';
import { existsSync, mkdirSync } from 'fs';

// Ensure the logs directory exists
const logDirectory = resolve('logs');
if (!existsSync(logDirectory)) {
  mkdirSync(logDirectory);
}

// Path to the log file
const logFilePath = resolve(logDirectory, 'app.log');

export default {
  target: 'pino/file',
  options: {
    destination: logFilePath,
    mkdir: true,
  },
};
