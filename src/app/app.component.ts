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
    private logger: LoggerService,
    // private clientLogger: ClientLoggerService,
    @Inject(Config) private config: AppConfig
  ) {
    this.logger.log('AppComponent constructor');
    // this.clientLogger.log('AppComponent constructor');
    console.log(this.config.apiUrl);
  }
}
