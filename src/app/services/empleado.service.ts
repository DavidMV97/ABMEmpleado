import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  listEmpleado: Empleado[] = [
    { nombreCompleto: 'camilo Aristizabal' , telefono: '8754444' , correo: 'juan@gmail.com' , fechaIngreso: new Date() , estadoCivil: 'soltero' , sexo: 'Masculino' } , 
    { nombreCompleto: 'Mariluz suarez' , telefono: '8754444' , correo: 'juan@gmail.com' , fechaIngreso: new Date() , estadoCivil: 'soltero' , sexo: 'Masculino' } ,
    { nombreCompleto: 'Laura vanesa ' , telefono: '8754444' , correo: 'juan@gmail.com' , fechaIngreso: new Date() , estadoCivil: 'soltero' , sexo: 'Masculino' } ,
    { nombreCompleto: 'Maria camila' , telefono: '8754444' , correo: 'juan@gmail.com' , fechaIngreso: new Date() , estadoCivil: 'soltero' , sexo: 'Masculino' } ,
    { nombreCompleto: 'Pedro arango ' , telefono: '8754444' , correo: 'juan@gmail.com' , fechaIngreso: new Date() , estadoCivil: 'soltero' , sexo: 'Masculino' } 
  ] ; 

  constructor() { }

  getEmpleados(){
    return this.listEmpleado.slice(); 
  }

  eliminarEmpleado(index: number){ 
    this.listEmpleado.splice(index, 1) ; 
  }
}
