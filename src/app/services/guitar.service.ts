import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuitarService {
  endpoint = 'http://localhost:8080/api/guitars';

  constructor(private httpClient: HttpClient) {}

  getGuitars(): Observable<any> {
    return this.httpClient.get(this.endpoint);
  }

  getGuitarById(id: number): Observable<any> {
    return this.httpClient.get(`${this.endpoint}/${id}`);
  }

  addGuitar(guitar: any, imageBlob?: Blob): Observable<any> {
    const formData = new FormData();
    formData.append('brand', guitar.brand);
    formData.append('model', guitar.model);

    if (imageBlob) {
      formData.append('image', imageBlob, 'guitar-image.jpg');
    }

    return this.httpClient.post(this.endpoint, formData);
  }

  updateGuitar(id: number, guitarData: any): Observable<any> {
    return this.httpClient.put(`${this.endpoint}/${id}`, guitarData);
  }

  deleteGuitar(id: number): Observable<any> {
    return this.httpClient.delete(`${this.endpoint}/${id}`);
  }
}
