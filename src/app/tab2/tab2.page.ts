import { Component } from '@angular/core';
import { ServiciotareaService} from '../services/serviciotarea.service'
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public tareas: string[];
  constructor(private servicioTarea:ServiciotareaService) {
    this.tareas = this.servicioTarea.getTareasCompletadas();
  }

  public acabar(pos: number){
    this.servicioTarea.terminarTarea(pos);
    this.tareas = this.servicioTarea.getTareasCompletadas();
  }

  public regresar(pos: number){
    this.servicioTarea.regresarTarea(pos);
    this.tareas = this.servicioTarea.getTareasCompletadas();
  }
}
