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
exports.Proveedores = void 0;
var DatoBase_1 = require("./DatoBase");
var Proveedores = /** @class */ (function (_super) {
    __extends(Proveedores, _super);
    function Proveedores(id, nombre, direccion, telefono, email, insumos) {
        var _this = _super.call(this, id, nombre, direccion, telefono) || this;
        _this.insumos = [];
        _this.email = email;
        _this.insumos = insumos;
        return _this;
    }
    Proveedores.prototype.getemail = function () {
        return this.email;
    };
    Proveedores.prototype.setemail = function (email) {
        this.email = email;
    };
    Proveedores.prototype.getinsumos = function () {
        return this.insumos;
    };
    Proveedores.prototype.setinsumos = function (insumos) {
        this.insumos = insumos;
    };
    return Proveedores;
}(DatoBase_1.DatosBase));
exports.Proveedores = Proveedores;
