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
exports.Veterinaria = void 0;
var DatoBase_1 = require("./DatoBase");
var Cliente_1 = require("./Cliente");
var Proveedores_1 = require("./Proveedores");
var rsl = require("readline-sync");
var Veterinaria = /** @class */ (function (_super) {
    __extends(Veterinaria, _super);
    function Veterinaria(id, nombre, direccion, telefono, email, listaClientes, listaProveedores) {
        var _this = _super.call(this, id, nombre, direccion, telefono) || this;
        _this.arrClientes = [];
        _this.arrProveedores = [];
        _this.email = email;
        _this.arrClientes = listaClientes;
        _this.arrProveedores = listaProveedores;
        return _this;
    }
    Veterinaria.prototype.getemail = function () {
        return this.email;
    };
    Veterinaria.prototype.setemail = function (email) {
        this.email = email;
    };
    Veterinaria.prototype.getlistaProveedores = function () {
        return this.arrProveedores;
    };
    Veterinaria.prototype.getlistaClientes = function () {
        return this.arrClientes;
    };
    //////*****metodos********* */
    Veterinaria.prototype.agregarCliente = function (cliente) {
        this.arrClientes.push(cliente);
    };
    Veterinaria.prototype.agregarProveedor = function (proveedor) {
        this.arrProveedores.push(proveedor);
    };
    Veterinaria.prototype.mostrarlistaCliente = function () {
        console.log(this.arrClientes);
    };
    Veterinaria.prototype.mostrarlistaProveedores = function () {
        console.log(this.arrProveedores);
    };
    Veterinaria.prototype.mostrarListaMascotas = function (arrMascotas) {
        console.log(arrMascotas);
    };
    Veterinaria.prototype.mostrarListaSucursales = function (arrVeterinarias) {
        console.log(arrVeterinarias);
    };
    Veterinaria.prototype.validarID = function (id, repetido) {
        for (var _i = 0, _a = this.getlistaProveedores(); _i < _a.length; _i++) {
            var proveedor = _a[_i];
            if (proveedor.getid() === id) {
                repetido = true;
                break;
            }
        }
        for (var _b = 0, _c = this.getlistaClientes(); _b < _c.length; _b++) {
            var cliente = _c[_b];
            if (cliente.getid() === id) {
                repetido = true;
                break;
            }
        }
        return repetido;
    };
    /********************Altas********************** */
    Veterinaria.prototype.altaVeterinaria = function (nuevoid) {
        var id = nuevoid; // Generdo un ID único por parametro
        var nombre = rsl.question("Ingrese Nombre de sucursal: ");
        var direccion = rsl.question("Ingrese Direccion  de sucursal: ");
        var telefono = rsl.questionInt("Ingrese Telefono  de sucursal: ");
        var email = rsl.question("Ingrese Email de sucursal: ");
        var nuevaVete = new Veterinaria(id, nombre, direccion, telefono, email, [], []);
        console.log("Nueva sucursal agregada ");
        console.log(nuevaVete);
        return nuevaVete;
    };
    Veterinaria.prototype.altaCliente = function (nuevoid) {
        var id = nuevoid; // Generdo un ID único por parametro
        var nombre = rsl.question("Ingrese Nombre del Cliente: ");
        var direccion = rsl.question("Ingrese Direccion del Cliente: ");
        var telefono = rsl.questionInt("Ingrese Telefono del Cliente: ");
        var email = rsl.question("Ingrese Email del Cliente: ");
        var nuevoCliente = new Cliente_1.Cliente(id, nombre, direccion, telefono, email, 0, []);
        if (!this.arrClientes.some(function (cliente) { return cliente.getid() === id; })) {
            this.arrClientes.push(nuevoCliente);
            console.log("Cliente agregado exitosamente.");
        }
        else {
            console.log(" Ya existe un cliente con este ID.");
        }
    };
    Veterinaria.prototype.altaProveedor = function (nuevoid) {
        var id = nuevoid; // Generdo un ID único por parametro
        var nombre = rsl.question("Ingrese Nombre del Proveedor: ");
        var direccion = rsl.question("Ingrese Direccion del Proveedor: ");
        var telefono = rsl.questionInt("Ingrese Telefono del Proveedor: ");
        var email = rsl.question("Ingrese Email del Proveedor: ");
        var insumos = rsl.question("Ingrese Insumos que ofrece (separados por comas): ").split(",");
        var nuevoProveedor = new Proveedores_1.Proveedores(id, nombre, direccion, telefono, email, insumos);
        if (!this.arrProveedores.some(function (proveedor) { return proveedor.getid() === id; })) {
            this.arrProveedores.push(nuevoProveedor);
            console.log("Proveedor agregado exitosamente.");
        }
        else {
            console.log(" Ya existe un proveedor con este ID.");
        }
    };
    /********************* Modificaciones *********************** */
    Veterinaria.prototype.modificarCliente = function () {
        console.log(this.arrClientes); //Seleccion de Cliente a Modificar
        var idCliente = rsl.questionInt("Ingrese Id del Cliente a modificar :");
        var clientesFiltrados = this.getlistaClientes().filter(function (c) { return c.getid() === idCliente; });
        //filter devuelve elementos que cumplen la condicion
        var cliente = clientesFiltrados.length > 0 ? clientesFiltrados[0] : undefined;
        if (!cliente) {
            console.log(" Cliente no encontrado.");
        }
        else {
            // consulta si es Visita o Si se modificara algun datodel cliente
            var atencion = rsl.question("Ingrese SI, para ser Atendido sino ingresara a modificaran datos:");
            if (atencion == "SI") {
                var nuevavista = cliente.getcantVisitas() + 1;
                cliente.setcantVisitas(nuevavista);
                console.log("Cantidad de visitas acumuladas: ", cliente.getcantVisitas());
                if (cliente.getcantVisitas() > 4) {
                    console.log("El Cliente es VIP, tiene un Descuento del 15% ");
                }
            }
            else { // seccion para Modificar Datos del Cliente.
                console.log("Del siguiente Cliente solo podra modificar direccion, Telefono o email ");
                var nuevaDireccion = rsl.question("Ingrese nueva Direccion :");
                var nuevoTelefono = rsl.questionInt("Ingrese nuevo Telefono :");
                var nuevoemail = rsl.question("Ingrese nuevo email :");
                cliente.setdireccion(nuevaDireccion);
                cliente.settelefono(nuevoTelefono);
                cliente.setemail(nuevoemail);
                console.log("Nuevo datos del Cliente, ID: ", cliente.getid(), " Nombre :", cliente.getnombre(), " Direccion: ", cliente.getdireccion(), " Telefono: ", cliente.gettelefono(), " email: ", cliente.getemail());
            }
        }
    };
    Veterinaria.prototype.modificarProveedor = function () {
        console.log(this.arrProveedores); // Seleccion de Proveedor a Modificar
        var idProveedor = rsl.questionInt("Ingrese Id del Proveedor a modificar :");
        var proveedoresFiltrados = this.getlistaProveedores().filter(function (c) { return c.getid() === idProveedor; });
        //filter devuelve elementos que cumplen la condicion
        var proveedor = proveedoresFiltrados.length > 0 ? proveedoresFiltrados[0] : undefined;
        if (!proveedor) {
            console.log(" Proveedor no encontrado.");
        }
        else {
            console.log("Del siguiente Proveedor solo podra modificar direccion, Telefono o email ");
            var nuevaDireccion = rsl.question("Ingrese nueva Direccion :");
            var nuevoTelefono = rsl.questionInt("Ingrese nuevo Teleono :");
            var nuevoemail = rsl.question("Ingrese nuevo email :");
            proveedor.setdireccion(nuevaDireccion);
            proveedor.settelefono(nuevoTelefono);
            proveedor.setemail(nuevoemail);
            console.log("Nuevo datos del Cliente, ID: ", proveedor.getid(), " Nombre :", proveedor.getnombre(), " Direccion: ", proveedor.getdireccion(), " Telefono: ", proveedor.gettelefono(), " email: ", proveedor.getemail());
        }
    };
    Veterinaria.prototype.modificarVeterinaria = function (veterinaria) {
        console.log(veterinaria); // Seleccion de Proveedor a Modificar
        console.log("De la siguiente Veterinaria solo podra modificar nombre, direccion, Telefono o email ");
        var nuevoNombre = rsl.question("Ingrese nuevo Nombre :");
        var nuevaDireccion = rsl.question("Ingrese nueva Direccion :");
        var nuevoTelefono = rsl.questionInt("Ingrese nuevo Telefono :");
        var nuevoemail = rsl.question("Ingrese nuevo email :");
        this.setnombre(nuevoNombre);
        this.setdireccion(nuevaDireccion);
        this.settelefono(nuevoTelefono);
        this.setemail(nuevoemail);
        console.log(veterinaria);
        return;
    };
    /***************** Bajas  ********************** */
    Veterinaria.prototype.bajaCliente = function () {
        console.log(this.arrClientes); //Seleccion de Cliente a Eliminar
        var idCliente = rsl.questionInt("Ingrese Id del Cliente a eliminar :");
        var clientesFiltrados = this.getlistaClientes().filter(function (c) { return c.getid() === idCliente; });
        //filter devuelve elementos que cumplen la condicion
        var clienteAEliminar = clientesFiltrados.length > 0 ? clientesFiltrados[0] : undefined;
        if (!clienteAEliminar) {
            console.log(" Cliente no encontrado.");
        }
        else {
            // Seccion para la eliminacion
            var posicionCliente = this.arrClientes.indexOf(clienteAEliminar);
            if (posicionCliente !== -1) {
                this.arrClientes.splice(posicionCliente, 1);
                console.log("cliente eliminado exitosamente.");
            }
        }
    };
    Veterinaria.prototype.bajaProveedor = function () {
        console.log(this.arrProveedores); //Seleccionde Proveedor a eliminar
        var idProveedor = rsl.questionInt("Ingrese Id del Proveedor a Eliminar :");
        var proveedoresFiltrados = this.getlistaProveedores().filter(function (c) { return c.getid() === idProveedor; });
        //filter devuelve elementos que cumplen la condicion
        var proveedorAEliminar = proveedoresFiltrados.length > 0 ? proveedoresFiltrados[0] : undefined;
        if (!proveedorAEliminar) {
            console.log(" Proveedor no encontrado.");
        }
        else {
            // Seccion para la eliminacion
            var posicionProveedor = this.arrProveedores.indexOf(proveedorAEliminar);
            if (posicionProveedor !== -1) {
                this.arrProveedores.splice(posicionProveedor, 1);
            }
        }
    };
    return Veterinaria;
}(DatoBase_1.DatosBase));
exports.Veterinaria = Veterinaria;
