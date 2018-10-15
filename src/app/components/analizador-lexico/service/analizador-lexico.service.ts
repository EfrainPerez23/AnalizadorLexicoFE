import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnalizadorLexico } from '../model/analizador-lexico';

@Injectable({
  providedIn: 'root'
})
export class AnalizadorLexicoService {


  private analizadorPath = `${environment.apiUrl}/analizador-lexico`;

  public constructor(private httpClient: HttpClient) { }


  public analizadorLexico(data: string): Observable<{data: AnalizadorLexico[]}> {
    return this.httpClient.post<{data: AnalizadorLexico[]}>(this.analizadorPath, {data: data});
  }


}
