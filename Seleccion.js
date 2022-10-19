"use strict";
exports.__esModule = true;
exports.Seleccion = void 0;
var Seleccion = /** @class */ (function () {
    function Seleccion(_pais, _jugadores, _masajistas, _director) {
        this.pais = _pais;
        this.jugadores = _jugadores;
        this.masajistas = _masajistas;
        this.director = _director;
    }
    Seleccion.prototype.obtenerPais = function () {
        return this.pais;
    };
    Seleccion.prototype.cambiarPais = function (_pais) {
        this.pais = _pais;
    };
    Seleccion.prototype.mostrarJugadores = function () {
        return this.jugadores;
    };
    Seleccion.prototype.incorporarJugador = function (_jugador) {
        this.jugadores.push(_jugador);
        _jugador.agregarConvocacion(true);
        console.log('Se incorpora al jugador' + _jugador.obtenerNombre());
    };
    Seleccion.prototype.bajadelJugador = function (_jugador) {
        var control = 0;
        for (var i = 0; i < this.jugadores.length; i++) {
            if (_jugador.obtenerApellido() === this.jugadores[i].obtenerApellido()) {
                _jugador.agregarConvocacion(false);
                this.jugadores.splice(i, 1);
                console.log('Se desviculo al jugador ' + _jugador.obtenerApellido());
                control = 1;
            }
        }
        if (control == 0) {
            console.log('No se encontro al jugador');
        }
    };
    Seleccion.prototype.mostrarMasajista = function () {
        return this.masajistas;
    };
    Seleccion.prototype.incorporarMasajista = function (_masajista) {
        this.masajistas.push(_masajista);
        _masajista.contratar();
        console.log('Se incorpora al Masajista ' + _masajista.obtenerNombre());
    };
    Seleccion.prototype.bajadelMasajista = function (_masajista) {
        var control = 0;
        for (var i = 0; i < this.masajistas.length; i++) {
            if (_masajista.obtenerApellido() === this.masajistas[i].obtenerApellido()) {
                _masajista.despedir();
                this.masajistas.splice(i, 1);
                console.log('Se desviculo al masajista ' + _masajista.obtenerApellido() + ' ' + _masajista.obtenerNombre());
                control = 1;
            }
        }
        if (control == 0) {
            console.log('No se encontro al masajista');
        }
    };
    Seleccion.prototype.mostrarTecnico = function () {
        return this.director;
    };
    Seleccion.prototype.incorporarTecnico = function (_tecnico) {
        this.director.push(_tecnico);
        _tecnico.cambiarContrato(true);
        console.log('Se incorpora al Director tecnico ' + _tecnico.obtenerNombre());
    };
    Seleccion.prototype.bajadelTecnico = function (_tecnico) {
        var control = 0;
        for (var i = 0; i < this.jugadores.length; i++) {
            if (_tecnico.obtenerApellido() === this.director[i].obtenerApellido()) {
                _tecnico.cambiarContrato(false);
                this.director.splice(i, 1);
                console.log('Se desviculo al Director tecnico ' + _tecnico.obtenerApellido());
                control = 1;
            }
        }
        if (control == 0) {
            console.log('No se encontro al Director tecnico');
        }
    };
    return Seleccion;
}());
exports.Seleccion = Seleccion;
