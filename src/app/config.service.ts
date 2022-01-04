import { forwardRef, Injectable } from '@angular/core';
import { AppModule } from './app.module';

@Injectable()
//   {
//   providedIn: forwardRef(() => AppModule),
// }
export class ConfigService {
  public apiUrl = '';
}
