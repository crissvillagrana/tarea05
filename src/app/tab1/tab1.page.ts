import { Component } from '@angular/core';
import { ServiciotareaService} from "../services/serviciotarea.service"


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public tareas: string[];
  public tarea: string;

  constructor(private servicioTarea:ServiciotareaService) {
    this.tareas = this.servicioTarea.getTareas();
    this.tarea = 'Something';
  }

  public agregar(){
    this.servicioTarea.agregarTarea(this.tarea);
    this.tareas = this.servicioTarea.getTareas();
    this.tarea = '';
  }

  public eliminar(pos: number){
    this.servicioTarea.eliminarTarea(pos);
    this.tareas = this.servicioTarea.getTareas();
  }

  public completar(pos: number){
    this.servicioTarea.completarTarea(pos);
    this.tareas = this.servicioTarea.getTareas();
  }

  public marcar(pos: number){
    this.servicioTarea.importarTarea(pos);
    this.tareas = this.servicioTarea.getTareas();
  }

}
