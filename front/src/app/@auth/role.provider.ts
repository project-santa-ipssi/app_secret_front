import { NbAuthService, NbAuthJWTToken, decodeJwtPayload } from '@nebular/auth';
import { NbRoleProvider } from '@nebular/security';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class RoleProvider extends NbRoleProvider {

  constructor(private authService: NbAuthService) {
    super();
  }

  getRole(): Observable<string> {
    return this.authService.onTokenChange()
      .pipe(
        map((token: NbAuthJWTToken) => {
          return token.isValid() ? token.getPayload()['role'] : 'guest';
        }),
      );
  }
}
