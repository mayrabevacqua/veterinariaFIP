"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mascota = void 0;
var Mascota = /** @class */ (function () {
    function Mascota(idCliente, nombre, especie) {
        this.idCliente = idCliente;
        this.nombre = nombre;
        this.especie = especie;
    }
    Mascota.prototype.getidCliente = function () {
        return this.idCliente;
    };
    Mascota.prototype.setidCliente = function (idCliente) {
        this.idCliente = idCliente;
    };
    Mascota.prototype.getnombre = function () {
        return this.nombre;
    };
    Mascota.prototype.setnombre = function (nombre) {
        this.nombre = nombre;
    };
    Mascota.prototype.getespecie = function () {
        return this.especie;
    };
    Mascota.prototype.setespecie = function (especie) {
        this.especie = especie;
    };
    return Mascota;
}());
exports.Mascota = Mascota;
