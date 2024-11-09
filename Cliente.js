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
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente(id, nombre, direccion, telefono, email, mascotas) {
        var _this = _super.call(this, id, nombre, direccion, telefono) || this;
        _this.email = email;
        _this.mascotas = mascotas;
        return _this;
    }
    Cliente.prototype.getemail = function () {
        return this.email;
    };
    Cliente.prototype.setemail = function (email) {
        this.email = email;
    };
    Cliente.prototype.getmascotas = function () {
        return this.mascotas;
    };
    Cliente.prototype.setmascotas = function (mascotas) {
        this.mascotas = mascotas;
    };
    return Cliente;
}(DatoBase_1.DatosBase));
exports.Cliente = Cliente;
