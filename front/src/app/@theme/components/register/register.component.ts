import { Component } from '@angular/core';
import { NbRegisterComponent, NbAuthService } from '@nebular/auth';


@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
})
export class NgxRegisterComponent extends NbRegisterComponent {

  ngOnInit(){
  }
}
