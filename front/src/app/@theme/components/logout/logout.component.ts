import { Component, OnInit, Inject } from '@angular/core';
import { NbLogoutComponent, NbTokenService, NbAuthService, NB_AUTH_OPTIONS } from '@nebular/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-logout',
  templateUrl: './logout.component.html',
})
export class NgxLogoutComponent extends NbLogoutComponent implements OnInit {
  constructor(
    protected service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    protected router: Router,
  ) {
    super(service, options, router);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
