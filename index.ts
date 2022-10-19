import {Jugador} from "./Jugador";
import {Masajista} from "./Masajista";
import {Tecnico} from "./Tecnico";
import {Seleccion} from "./Seleccion";

let jugador1= new Jugador('Delantero', 'Apto',4, 'Martinez','Julio',23,'Los Lupines')
let jugador2 = new Jugador('Defensa','Apto',9,'Lopez','Gaston',32,'Los Lapachos');
let jugador3 = new Jugador('Delantero','Apto',10,'Messi','Leo',26,'Los lapachos')

let gaglio = new Masajista('Lopez','Julio',45,'Los lapach',false,true);


let scaloni = new Tecnico('Scaloni','Francisco',34,'Las Heras',true,'Boca');
let argentina = new Seleccion ("ARGENTINA",[jugador1,jugador2],[gaglio],[scaloni]);
argentina.bajadelMasajista(gaglio);
argentina.incorporarMasajista(gaglio);
// listar seleccion
console.log(argentina);