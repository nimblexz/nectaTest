import {Component} from "@angular/core";
import {AuthService} from "../../services/auth.service";


@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css'],
})
export class DevicesComponent {
devices:any=this.authService.getListDevices()


constructor(private authService:AuthService) {

}

  readonly columns = Object.keys(this.devices[0]);
}
