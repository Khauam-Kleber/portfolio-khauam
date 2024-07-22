
const ELEMENT_DATA: any[] = [
  {tecnologia: "Angular", tempo: 5.6},
  {tecnologia: "HTML", tempo: 5.6},
  {tecnologia: "CSS", tempo: 5.6},
  {tecnologia: "Java (spring boot)", tempo: 3.9},
  {tecnologia: "MySql", tempo: 3.9},
];

import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTable, MatTableDataSource,} from '@angular/material/table';

@Component({
  selector: 'app-tabela-conhecimentos',
  templateUrl: './tabela-conhecimentos.component.html',
  styleUrls: ['./tabela-conhecimentos.component.scss']
})

export class TabelaConhecimentosComponent implements AfterViewInit {
 
  listaCadastrados: any = []
  displayedColumns: string[] = ['tecnologia', 'tempo'];
  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatSort) sort: MatSort;
  
  dataSource = new MatTableDataSource<any>();

  constructor() { 
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  ngAfterViewInit() {
    
    this.dataSource.sort = this.sort;
  }

  removeData() {
    this.listaCadastrados.pop();
    this.dataSource = new MatTableDataSource(this.listaCadastrados );
    this.table.renderRows();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}