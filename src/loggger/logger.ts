import pino from 'pino';
import pinoTransport from './pino-transport';

// Define the transport configuration
const transport = pino.transport({
  targets: [
    {
      target: 'pino-pretty', // Use pino-pretty for console output
      // options: {},
      level: 'info',
    },
    {
      target: pinoTransport.target, // Custom transport for file output
      options: pinoTransport.options,
      level: 'info',
    },
  ],
});

// Create the logger with the transport configuration
const logger = pino(transport);

// Log a test message
logger.info('Logger initialized with transport');

export { logger };
