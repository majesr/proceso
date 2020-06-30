import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Servicio{
  nombre_servicio: string;
  costo: string;
  idcategoria: number;
}


@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  private url = 'http://localhost/rest/index.php/servicios/por_tipo/';



  constructor(private http: HttpClient) { }

}
