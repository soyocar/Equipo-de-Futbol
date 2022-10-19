"use strict";
exports.__esModule = true;
var Jugador_1 = require("./Jugador");
var Masajista_1 = require("./Masajista");
var Tecnico_1 = require("./Tecnico");
var Seleccion_1 = require("./Seleccion");
var jugador1 = new Jugador_1.Jugador('Delantero', 'Apto', 4, 'Martinez', 'Julio', 23, 'Los Lupines');
var jugador2 = new Jugador_1.Jugador('Defensa', 'Apto', 9, 'Lopez', 'Gaston', 32, 'Los Lapachos');
var jugador3 = new Jugador_1.Jugador('Delantero', 'Apto', 10, 'Messi', 'Leo', 26, 'Los lapachos');
var gaglio = new Masajista_1.Masajista('Lopez', 'Julio', 45, 'Los lapach', false, true);
var scaloni = new Tecnico_1.Tecnico('Scaloni', 'Francisco', 34, 'Las Heras', true, 'Boca');
var argentina = new Seleccion_1.Seleccion("ARGENTINA", [jugador1, jugador2], [gaglio], [scaloni]);
argentina.bajadelMasajista(gaglio);
argentina.incorporarMasajista(gaglio);
// listar seleccion
console.log(argentina);
