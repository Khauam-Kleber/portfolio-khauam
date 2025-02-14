
const ELEMENT_DATA: any[] = [
  {tecnologia: "Angular", tempo: 6},
  {tecnologia: "HTML", tempo: 6},
  {tecnologia: "CSS", tempo: 6},
  {tecnologia: "Api REST", tempo: 6},
  {tecnologia: "JIRA", tempo: 6},
  {tecnologia: "GIT", tempo: 6},
  {tecnologia: "Java (spring boot)", tempo: 4},
  {tecnologia: "SQL", tempo: 6},
  {tecnologia: "Docker", tempo: 2},
];

import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTable, MatTableDataSource,} from '@angular/material/table';

@Component({
    selector: 'app-tabela-conhecimentos',
    templateUrl: './tabela-conhecimentos.component.html',
    styleUrls: ['./tabela-conhecimentos.component.scss'],
    standalone: false
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