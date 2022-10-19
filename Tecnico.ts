import { Persona } from "./Persona";
export class Tecnico extends Persona {
    protected contratado: boolean;
    protected equipo:string;
    constructor(_apellido:string,_nombre:string,_edad:number,_direccion:string,_contratado:boolean, equipo:string){
        super(_apellido,_nombre,_edad,_direccion);
        this.contratado = false;
        this.equipo = '';


    }

    public obtenerContrato():boolean{
        return this.contratado;
    }

    public cambiarContrato(_contratado:boolean):void{
        this.contratado = _contratado;
    }

}