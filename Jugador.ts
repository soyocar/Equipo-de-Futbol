import {Persona} from "./Persona";
export class Jugador extends Persona{
    protected posicion:string;
    protected estado: string;
    protected camiseta: number;
    protected convocado: boolean;

    constructor(_posicion:string, _estado:string, camiseta:number, _apellido,_nombre,_edad,_direccion){
         super(_apellido,_nombre,_edad,_direccion)
         this.posicion = _posicion;
         this.estado = _estado;
         this.camiseta = camiseta;
         
    }

    public obtenerPosicion():string{
        return this.posicion;
    }

    public agregarPosicion(posicion:string):void{
        this.posicion = posicion;
    }

    public obtenerEstado():string{
        return this.estado;
    }

    public agregarEstado(estado:string):void{
        this.estado = estado;
    }

    public obtenerCamiseta():number{
        return this.camiseta;
    }

    public agregarCamiseta(camiseta:number):void{
        this.camiseta = camiseta;
    }

    public obtenerConvocacion():boolean{
        return this.convocado;
    }

    public agregarConvocacion(convocado:boolean):void{
        this.convocado = convocado;
    }
}