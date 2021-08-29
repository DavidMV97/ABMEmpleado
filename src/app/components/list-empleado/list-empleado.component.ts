import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleado } from 'src/app/models/empleado';
import { MatDialog } from '@angular/material/dialog';
import { MensajeConfirmacionComponent } from '../shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { MatSnackBar } from '@angular/material/snack-bar';


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

  constructor( 
    private empleadoService: EmpleadoService , 
    public dialog: MatDialog,
    public snacBar: MatSnackBar
    
  ) { }

  ngOnInit(): void {
    this.cargarEmpleados() ; 
  }

  apliFilter(event : Event){
    const filterValue = (event.target as HTMLInputElement).value ; 
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase(); 
  }

  cargarEmpleados(){
    this.listEmpleado = this.empleadoService.getEmpleados();
    this.dataSource = new MatTableDataSource(this.listEmpleado) ; 
    this.dataSource.paginator = this.paginator ; 
    this.dataSource.sort = this.sort;
  }

  eliminarEmpleado(index: number){
    const dialogRef = this.dialog.open(MensajeConfirmacionComponent, {
      width: '350px',
      data: {mensaje: '¿Está seguro que desea eliminar el empleado? '}
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'Aceptar') {
        this.empleadoService.eliminarEmpleado(index); 
        this.cargarEmpleados() ; 
        this.snacBar.open('El empleado fue eliminado exitosamente', '' , {
          duration: 3000
        }) ; 
      }
      
    });

  }
}
