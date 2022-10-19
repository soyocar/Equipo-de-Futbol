"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Jugador = void 0;
var Persona_1 = require("./Persona");
var Jugador = /** @class */ (function (_super) {
    __extends(Jugador, _super);
    function Jugador(_posicion, _estado, camiseta, _apellido, _nombre, _edad, _direccion) {
        var _this = _super.call(this, _apellido, _nombre, _edad, _direccion) || this;
        _this.posicion = _posicion;
        _this.estado = _estado;
        _this.camiseta = camiseta;
        return _this;
    }
    Jugador.prototype.obtenerPosicion = function () {
        return this.posicion;
    };
    Jugador.prototype.agregarPosicion = function (posicion) {
        this.posicion = posicion;
    };
    Jugador.prototype.obtenerEstado = function () {
        return this.estado;
    };
    Jugador.prototype.agregarEstado = function (estado) {
        this.estado = estado;
    };
    Jugador.prototype.obtenerCamiseta = function () {
        return this.camiseta;
    };
    Jugador.prototype.agregarCamiseta = function (camiseta) {
        this.camiseta = camiseta;
    };
    Jugador.prototype.obtenerConvocacion = function () {
        return this.convocado;
    };
    Jugador.prototype.agregarConvocacion = function (convocado) {
        this.convocado = convocado;
    };
    return Jugador;
}(Persona_1.Persona));
exports.Jugador = Jugador;
