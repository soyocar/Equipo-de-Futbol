import { Persona } from "./Persona";
import { Jugador } from "./Jugador";
import { Masajista } from "./Masajista";
import { Tecnico } from "./Tecnico";

export class Seleccion {
    protected pais: string;
    protected jugadores : Jugador[];
    protected masajistas :Masajista[];
    protected director :Tecnico[];

    constructor(_pais:string, _jugadores:Jugador[], _masajistas:Masajista[],_director:Tecnico[] ){
       this.pais = _pais;
       this.jugadores = _jugadores;
       this.masajistas = _masajistas;
       this.director = _director;   
    }

    public obtenerPais():string{
        return this.pais;
    }

    public cambiarPais(_pais:string):void{
        this.pais = _pais;
    }
    
    public mostrarJugadores(){
        return this.jugadores;
    }

    public incorporarJugador(_jugador:Jugador):void{
        this.jugadores.push(_jugador);
        _jugador.agregarConvocacion(true);
        console.log('Se incorpora al jugador' + _jugador.obtenerNombre());

    }

    public bajadelJugador(_jugador:Jugador):void{
        let control:number = 0;
        for (let i:number=0; i<this.jugadores.length; i++){
            if(_jugador.obtenerApellido() === this.jugadores[i].obtenerApellido()){
                _jugador.agregarConvocacion(false);
                this.jugadores.splice(i,1);
                console.log('Se desviculo al jugador ' + _jugador.obtenerApellido());
                control = 1;
            }

        }
        if (control == 0) {
           console.log('No se encontro al jugador');
        }
    }

    public mostrarMasajista(){
        return this.masajistas;
    }

    public incorporarMasajista(_masajista:Masajista):void{
        this.masajistas.push(_masajista);
        _masajista.contratar();
        console.log('Se incorpora al Masajista ' + _masajista.obtenerNombre());

    }

    public bajadelMasajista(_masajista:Masajista):void{
        let control:number = 0;
        for (let i:number=0; i<this.masajistas.length; i++){
            if(_masajista.obtenerApellido() === this.masajistas[i].obtenerApellido()){
                _masajista.despedir();
                this.masajistas.splice(i,1);
                console.log('Se desviculo al masajista ' + _masajista.obtenerApellido() + ' '+ _masajista.obtenerNombre());
                control = 1;
            }

        }
        if (control == 0) {
           console.log('No se encontro al masajista');
        }
    }

    public mostrarTecnico(){
        return this.director;
    }

    public incorporarTecnico(_tecnico:Tecnico):void{
        this.director.push(_tecnico);
        _tecnico.cambiarContrato(true);
        console.log('Se incorpora al Director tecnico ' + _tecnico.obtenerNombre());

    }

    public bajadelTecnico(_tecnico:Tecnico):void{
        let control:number = 0;
        for (let i:number=0; i<this.jugadores.length; i++){
            if(_tecnico.obtenerApellido() === this.director[i].obtenerApellido()){
                _tecnico.cambiarContrato(false);
                this.director.splice(i,1);
                console.log('Se desviculo al Director tecnico ' + _tecnico.obtenerApellido());
                control = 1;
            }

        }
        if (control == 0) {
           console.log('No se encontro al Director tecnico');
        }
    }
}