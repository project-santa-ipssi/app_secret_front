import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  NbAuthJWTInterceptor,
  NbAuthModule,
  NbPasswordAuthStrategy,
  NB_AUTH_TOKEN_INTERCEPTOR_FILTER,
  NbTokenLocalStorage
} from '@nebular/auth';
import { AuthInterceptor } from './auth.interceptor';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';
import { environment } from '../../environments/environment';
import { AuthPipe } from './auth.pipe';
import { RoleProvider } from './role.provider';
import { NbRoleProvider, NbSecurityModule } from '@nebular/security';
import { NbAuthJWTToken } from '@nebular/auth'


const GUARDS = [AuthGuard, AdminGuard];
const PIPES = [AuthPipe];

export function filterInterceptorRequest(req: HttpRequest<any>): boolean {
  return ['/auth/login', '/auth/sign-up', '/auth/request-pass']
    .some(url => req.url.includes(url));
}

@NgModule({
  declarations: [...PIPES],
  imports: [
    CommonModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          // baseEndpoint: environment.apiUrl,
          baseEndpoint: 'http://localhost:3000/api',
          login: {
            endpoint: '/auth/login',
            method: 'post',
          },
          register: {
            endpoint: '/auth/sign-up',
            method: 'post',
            redirect: {
              success: '/',
              failure: '/auth/sign-up',
            },
            defaultErrors: ["Une erreur s'est produite. Veuillez réessayer"],
            defaultMessages: ['Vous êtes bien enregistré'],
          },
          logout: {
            endpoint: '/auth/sign-out',
            method: 'post',
            redirect: {
              success: '/',
              failure: '/',
            },
          },
          requestPass: {
            endpoint: '/auth/request-pass',
            method: 'post',
          },
          resetPass: {
            endpoint: '/auth/reset-pass',
            method: 'post',
          },
          token: {
            class: NbAuthJWTToken,
            key: 'token',
          },
        }),
      ],
      forms: {
        login: {
          redirectDelay: 1200, // delay before redirect after a successful login, while success message is shown to the user
          strategy: 'email',  // strategy id key.
          rememberMe: false,   // whether to show or not the `rememberMe` checkbox
          showMessages: {     // show/not show success/error messages
            success: true,
            error: true,
          },
          logout: {
            redirectDelay: 300
          }
        }
      },
    }),
  ],
  exports: [...PIPES],
  providers: [
    NbSecurityModule.forRoot({
      accessControl: {
        guest: {
        },
        user: {
          parent: 'guest',
          view: ['devices', 'orders'],
          edit: ['devices', 'orders'],
        },
        admin: {
          parent: 'user',
          view: ['devices', 'orders', 'users'],
          edit: ['devices', 'orders', 'users'],
        },
      },
    }).providers,
    {
      provide: NbRoleProvider, useClass: RoleProvider,
    },
    {
      provide: NbTokenLocalStorage, useClass: NbTokenLocalStorage,
    },
  ],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: AuthModule,
      providers: [
        { provide: NB_AUTH_TOKEN_INTERCEPTOR_FILTER, useValue: filterInterceptorRequest },
        { provide: HTTP_INTERCEPTORS, useClass: NbAuthJWTInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        ...GUARDS
      ],
    };
  }
}
