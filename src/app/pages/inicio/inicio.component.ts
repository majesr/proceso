import { Component, OnInit } from '@angular/core';
import { CategoriasService, Categoria } from '../../services/categorias.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  categorias: Categoria[];

  constructor(private categoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.categoriasService.getAll().subscribe(response => {
      this.categorias = response;
    });
  }
  }

