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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var DatoBase_1 = require("./DatoBase");
var rsl = require("readline-sync");
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente(id, nombre, direccion, telefono, email, cantVisitas, mascotas) {
        var _this = _super.call(this, id, nombre, direccion, telefono) || this;
        _this.mascotas = [];
        _this.email = email;
        _this.cantVisitas = cantVisitas;
        _this.mascotas = mascotas;
        return _this;
    }
    Cliente.prototype.getemail = function () {
        return this.email;
    };
    Cliente.prototype.setemail = function (email) {
        this.email = email;
    };
    Cliente.prototype.getcantVisitas = function () {
        return this.cantVisitas;
    };
    Cliente.prototype.setcantVisitas = function (cantVisitas) {
        this.cantVisitas = cantVisitas;
    };
    Cliente.prototype.nuevoElemento = function (id) {
        var nombre = rsl.question("Ingrese Nombre :");
        var direccion = rsl.question("Ingrese Direccion :");
        var telefono = rsl.question("Ingrese Telefono :");
        var email = rsl.question("Ingrese Direccion email :");
        var agregarCliente = new Cliente(id, nombre, direccion, telefono, email, 1, []);
        return agregarCliente;
    };
    Cliente.prototype.modificarCliente = function () {
        var atencion = rsl.question("Ingrese SI, para ser Atendido sino se modificaran datos:");
        if (atencion == "SI") {
            var nuevavista = this.getcantVisitas() + 1;
            this.setcantVisitas(nuevavista);
            console.log("Cantidad de visitas acumuladas: ", this.getcantVisitas());
            if (this.getcantVisitas() > 4) {
                console.log("El Cliente es VIP, tiene un Descuento del 15% ");
            }
        }
        else {
            console.log("Del siguiente Cliente solo podra modificar direccion, Telefono o email ");
            var nuevaDireccion = rsl.question("Ingrese nueva Direccion :");
            var nuevoTelefono = rsl.questionInt("Ingrese nuevo Teleono :");
            var nuevoemail = rsl.question("Ingrese nuevo email :");
            this.setdireccion(nuevaDireccion);
            this.settelefono(nuevoTelefono);
            this.setemail(nuevoemail);
            console.log("Nuevo datos del Cliente, ID: ", this.getid(), " Nombre :", this.getnombre(), " Direccion: ", this.getdireccion(), " Telefono: ", this.gettelefono(), " email: ", this.getemail());
        }
    };
    Cliente.prototype.agregarMascota = function (mascota) {
        this.mascotas.push(mascota);
    };
    return Cliente;
}(DatoBase_1.DatosBase));
exports.Cliente = Cliente;
