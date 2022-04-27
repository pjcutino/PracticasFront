import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concatAll, from, map, mergeMap, Observable } from 'rxjs';
import { IMega } from './models/megas';

@Injectable({
  providedIn: 'root'
})
export class MegasApiService {
  

  private readonly API = "https://626036e492df0bc0f34165f4.mockapi.io/";

  constructor(private http: HttpClient) { }

  getAllMegas(): Observable<IMega[]> {
    return this.http.get<IMega[]>(`${this.API}megas`);
  }

  deleteMegaById(id : string) {
    return this.http.delete(`${this.API}megas/${id}`)
  }

  getMega(id: string) {
    return this.http.get<IMega>(`${this.API}megas/${id}`);
  }

  
  addMega(name: string, imageUrl: string, basePokemon: string) {
    
    let mega = {
      "name": name,
      "imageUrl": imageUrl,
      "basePokemon": basePokemon,
    };

    return this.http.post(`${this.API}megas`,mega).subscribe(data => console.log(data));
    
  }

  updateMega(id: string, name: string, imageUrl: string, basePokemon: string) {
    
    let mega = {
      "name": name,
      "imageUrl": imageUrl,
      "basePokemon": basePokemon,
    };

    return this.http.put(`${this.API}megas/${id}`,mega).subscribe(data => console.log(data));
    
  }
}
