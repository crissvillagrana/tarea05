import { Component } from '@angular/core';
import { ServiciotareaService} from '../services/serviciotarea.service'
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public tareas: string[];
  constructor(private servicioTarea:ServiciotareaService) {
    this.tareas = this.servicioTarea.getImportantes();
  }

  public terminarI(pos: number){
    this.servicioTarea.completarImportantes(pos);
    this.tareas = this.servicioTarea.getImportantes();
  }

  public desmarcar(pos: number){
    this.servicioTarea.desimportarTarea(pos);
  }
}
