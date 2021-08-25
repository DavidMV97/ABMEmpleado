import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleado } from 'src/app/models/empleado';


@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.scss']
})
export class ListEmpleadoComponent implements OnInit {
  displayedColumns: string[] = ['nombreCompleto', 'telefono', 'correo', 'fechaIngreso' , 'estadoCivil' , 'sexo' , 'acciones' ];
  dataSource = new MatTableDataSource() ; 
  listEmpleado: Empleado[] ; 

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator , { static:true }) paginator: MatPaginator ;

  constructor( private empleadoService: EmpleadoService ) { }

  ngOnInit(): void {
    this.cargarEmpleados() ; 
    this.dataSource.paginator = this.paginator ; 
    this.dataSource.sort = this.sort;
    
  }

  apliFilter(event : Event){
    const filterValue = (event.target as HTMLInputElement).value ; 
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase(); 
  }

  cargarEmpleados(){
    this.listEmpleado = this.empleadoService.getEmpleados();
    this.dataSource = new MatTableDataSource(this.listEmpleado) ; 
    console.log(this.listEmpleado) ; 
  }

}
