"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(_apellido, _nombre, _edad, _direccion) {
        this.apellido = _apellido;
        this.nombre = _nombre;
        this.edad = _edad;
        this.direccion = _direccion;
        this.telefono = "";
    }
    Persona.prototype.obtenerApellido = function () {
        return this.apellido;
    };
    Persona.prototype.agregarApellido = function (apellido) {
        this.apellido = apellido;
    };
    Persona.prototype.obtenerNombre = function () {
        return this.nombre;
    };
    Persona.prototype.agregarNombre = function (nombre) {
        this.nombre = nombre;
    };
    Persona.prototype.obtenerEdad = function () {
        return this.edad;
    };
    Persona.prototype.agregarEdad = function (edad) {
        this.edad = edad;
    };
    Persona.prototype.obtenerDireccion = function () {
        return this.direccion;
    };
    Persona.prototype.agregarDiereccion = function (direccion) {
        this.direccion = direccion;
    };
    Persona.prototype.obtenerTelefono = function () {
        return this.telefono;
    };
    Persona.prototype.agregarTelefono = function (telefono) {
        this.direccion = telefono;
    };
    return Persona;
}());
exports.Persona = Persona;
