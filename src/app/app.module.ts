import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Config, LogType } from './app.interface';
// import { ClientLoggerService } from './client-logger.service';
import { LoggerService } from './logger.service';
import { loggerServiceFactory } from './logger.service.provider';

export const config = {
  apiUrl: 'http://localhost:3000',
  logType: LogType.Client,
};
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [
    // { provide: LoggerService, useClass: ClientLoggerService },
    // { provide: ClientLoggerService, useExisting: LoggerService },
    { provide: Config, useValue: config },
    {
      provide: LoggerService,
      useFactory: loggerServiceFactory,
      deps: [Config],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
