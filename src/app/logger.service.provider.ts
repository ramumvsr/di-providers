import { AppConfig, LogType } from './app.interface';
import { ClientLoggerService } from './client-logger.service';
import { LoggerService } from './logger.service';

export const loggerServiceFactory = (config: AppConfig) => {
  if (config.logType === LogType.Client) {
    return new ClientLoggerService();
  }
  return new LoggerService();
};
