import { Component, Inject } from '@angular/core';
import { AppConfig, Config } from './app.interface';
import { ClientLoggerService } from './client-logger.service';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'di-providers';
  constructor(
    // @Inject(LoggerService) private loggers: LoggerService[]
    private logger: LoggerService,
    // private clientLogger: ClientLoggerService,
    @Inject(Config) private config: AppConfig
  ) {
    this.logger.log('AppComponent constructor');
    // console.log(this.loggers);
    // for (const logger of this.loggers) {
    //   logger.log('AppComponent constructor');
    // }
    // this.clientLogger.log('AppComponent constructor');
    console.log(this.config.apiUrl);
  }
}
