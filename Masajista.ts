import { Persona } from "./Persona";
export class Masajista extends Persona{
    protected estado_turno: boolean;
    protected contrato: boolean;

    constructor (_apellido:string,_nombre:string,_edad:number,_direccion:string, _estado_turno: boolean, contrato:boolean){
        super(_apellido,_nombre,_edad,_direccion)
        this.estado_turno = false;
    }

    public obtenerContratado(): boolean {
        return this.contrato;
    }

    public contratar(): void {
        this.contrato= true;
    }

    public despedir(): void {
        this.contrato= false;
    }
    
    public comenzarMasaje():void{
        this.estado_turno = true;
    
    }

    public terminarMasaje(): void{
        this.estado_turno =  false;

    }
}