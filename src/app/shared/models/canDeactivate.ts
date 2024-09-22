import { Observable } from 'rxjs';

export interface Ideactivate {
  canDeactivate: () => boolean | Promise<boolean> | Observable<boolean>;
}
