import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Okta } from './okta.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SsprService {

  constructor(private httpClient: HttpClient, private okta: Okta ) { }

  checkAccount(): Observable<any> {
    // return this.httpClient.get<any>(environment.ssprConfig.baseUrl + '/api/v1/users/accountcheck', httpOptions);
    return this.httpClient.get<any>(environment.oktaWidgetConfig.baseUrl + '/api/v1/sessions/me',
                            {'headers': {'Content-Type': 'application/json'},
                                    'withCredentials': true, 'observe': 'response'});
  }
}
