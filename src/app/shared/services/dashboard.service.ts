import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private _bashURL = "http://localhost:50664/api"

  constructor(
    private _http: HttpClient
  ) { }

  GetSystemOverview(): any {
    return this._http.get<any>(this._bashURL + "/dashboard/system-overview");
  }
}
