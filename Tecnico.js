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
exports.Tecnico = void 0;
var Persona_1 = require("./Persona");
var Tecnico = /** @class */ (function (_super) {
    __extends(Tecnico, _super);
    function Tecnico(_apellido, _nombre, _edad, _direccion, _contratado, equipo) {
        var _this = _super.call(this, _apellido, _nombre, _edad, _direccion) || this;
        _this.contratado = false;
        _this.equipo = '';
        return _this;
    }
    Tecnico.prototype.obtenerContrato = function () {
        return this.contratado;
    };
    Tecnico.prototype.cambiarContrato = function (_contratado) {
        this.contratado = _contratado;
    };
    return Tecnico;
}(Persona_1.Persona));
exports.Tecnico = Tecnico;
