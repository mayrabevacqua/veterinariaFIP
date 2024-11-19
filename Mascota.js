"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mascota = void 0;
var rsl = require("readline-sync");
var Mascota = /** @class */ (function () {
    function Mascota(id, nombre, especie) {
        this.id = id;
        this.nombre = nombre;
        this.especie = especie;
        //this.setespecie(especie);
    }
    Mascota.prototype.getid = function () {
        return this.id;
    };
    Mascota.prototype.setid = function (id) {
        this.id = id;
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
        var especiesValidas = ["Perro", "Gato", "Exotica"];
        while (especiesValidas.indexOf(especie) === -1) {
            especie = rsl.question("Ingrese Especie (Perro, Gato o Exotica) :");
        }
        return especie;
    };
    Mascota.prototype.nuevoElemento = function (id) {
        var nombre = rsl.question("Ingrese Nombre _:");
        var especie = rsl.question("Ingrese Especie _:");
        var agregarMascota = new Mascota(id, nombre, this.setespecie(especie));
        return agregarMascota;
    };
    Mascota.prototype.modificarMascota = function () {
        console.log("De la siguiente Mascota solo podra modificar el Nombre ");
        var nuevaNombre = rsl.question("Ingrese nuevo Nombre :");
        this.setnombre(nuevaNombre);
        console.log("Nuevo datos de la Mascota, ID: ", this.getid(), " Nombre :", this.getnombre(), " Especie: ", this.getespecie());
    };
    return Mascota;
}());
exports.Mascota = Mascota;
