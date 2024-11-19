"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatosBase = void 0;
var DatosBase = /** @class */ (function () {
    function DatosBase(id, nombre, direccion, telefono) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }
    DatosBase.prototype.getid = function () {
        return this.id;
    };
    DatosBase.prototype.setid = function (id) {
        this.id = id;
    };
    DatosBase.prototype.getnombre = function () {
        return this.nombre;
    };
    DatosBase.prototype.setnombre = function (nombre) {
        this.nombre = nombre;
    };
    DatosBase.prototype.getdireccion = function () {
        return this.direccion;
    };
    DatosBase.prototype.setdireccion = function (direccion) {
        this.direccion = direccion;
    };
    DatosBase.prototype.gettelefono = function () {
        return this.telefono;
    };
    DatosBase.prototype.settelefono = function (telefono) {
        this.telefono = telefono;
    };
    return DatosBase;
}());
exports.DatosBase = DatosBase;
