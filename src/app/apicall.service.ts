import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  private url = 'http://localhost:3000/usernames'
  addUsers(obj: any) {
    return this.http.post(this.url,obj)
  }

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get(this.url)
  }
  dlt(id:string){
    return this.http.delete(`${this.url}/${id}`)
  }

}
