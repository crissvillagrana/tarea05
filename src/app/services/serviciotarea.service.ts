import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciotareaService {

  private tareas: string[] = [];
  private tareasCompletadas: string[] = [];
  private tareasImportantes: string[] = [];
  
  constructor() { 
    this.tareas.push("Tarea 1","Tarea 2","Tarea 3","Tarea 4");
    this.tareasCompletadas.push("Tarea 5","Tarea 6","Tarea 7","Tarea 8");
    this.tareasImportantes.push("Hacer la tarea de Híbridas");
  }

  public agregarTarea(tarea: string){
    this.tareas.push(tarea);
  }

  public eliminarTarea(pos: number){
    this.tareas.splice(pos, 1);
  }

  public getTareas(){
    return this.tareas;
  }

  public completarTarea(pos: number){
    this.tareasCompletadas.push(this.tareas[pos]);
    this.eliminarTarea(pos);
  }

  public importarTarea(pos: number){
    this.tareasImportantes.push(this.tareas[pos]);
    this.eliminarTarea(pos);
  }
//**************************TAB 2 ******************************

  public terminarTarea(pos: number){
    this.tareasCompletadas.splice(pos,1);
  }

  public regresarTarea(pos: number){
    this.tareas.push(this.tareasCompletadas[pos]);
    this.terminarTarea(pos);
  }

  public getTareasCompletadas(){
    return this.tareasCompletadas;
  }

  //********************* TAB 3 **********************************

  public eliminarImportante(pos: number){
    this.tareasImportantes.splice(pos,1);
  }

  public completarImportantes(pos: number){
    this.tareasCompletadas.push(this.tareasImportantes[pos]);
    this.eliminarImportante(pos);
  }

  public desimportarTarea(pos: number){
    this.tareas.push(this.tareasImportantes[pos]);
    this.eliminarImportante(pos);
  }

  public getImportantes(){
    return this.tareasImportantes;
  }
}//class
