import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Observable, of, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Token, User} from "../interfaces/interfaces";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  devices = {}

  constructor(private http: HttpClient, private router: Router) {
  }



  setToken(token: string) {
    localStorage.setItem('token', token)
  }

  getToken() {
    return localStorage.getItem('token')
  }
  getListDevices(){
    return this.devices
  }

  getDevices() {
    let token = this.getToken()
    this.http.post('https://core.nekta.cloud/api/device/metering_devices', {
        "page": 1,
        "last_page": 0,
        "sort_field": "id",
        "sort": "desc",
        "search_string": null,
        "device_state": "all",
        "is_archived": false,
        "paginate": true,
        "append_fields": ["active_polling", "attributes", "tied_point"],
        "per_page": 10
        ,
      }, {headers: {Authorization: `Bearer ${token}`}}
    ).subscribe((res:any) => {
        this.router.navigate(['devices'])
        this.devices = res.data.metering_devices.data

      }
    )
  }



  login(user: User): Observable<Token | boolean> {
    if (user.email === 'demo@nekta.tech' && user.password === 'qwertyqwerty') {
      this.http.post<Token>('https://core.nekta.cloud/api/auth/login', {
        "email": user.email,
        "password": user.password,
        "personal_data_access": true
      }).subscribe((res) => {
          this.setToken(res.data.access_token)
          this.getDevices()
        }
      )

      return of(true)
    }
    return throwError(() => new Error('Failed Login'))
  }
}
