export class Persona {
    protected apellido:string;
    protected nombre:string;
    protected edad:number;
    protected direccion:string;
    protected telefono: string;

    constructor(_apellido:string,_nombre:string,_edad:number,_direccion:string){
        this.apellido = _apellido;
        this.nombre = _nombre;
        this.edad = _edad;
        this.direccion = _direccion;
        this.telefono = "";
    }

    public obtenerApellido():string{
      return this.apellido;
    }

    public agregarApellido(apellido):void{
        this.apellido = apellido;
    }
    public obtenerNombre():string{
        return this.nombre;
      }
  
    public agregarNombre(nombre):void{
          this.nombre = nombre;
      }
    public obtenerEdad():number{
        return this.edad;
      }
  
    public agregarEdad(edad):void{
          this.edad = edad;
      } 
    public obtenerDireccion():string{
        return this.direccion;
      }
  
    public agregarDiereccion(direccion):void{
          this.direccion = direccion;
      }   
    public obtenerTelefono():string{
        return this.telefono;
      }
  
    public agregarTelefono(telefono):void{
          this.direccion = telefono;
      }       
}

