"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente_1 = require("./Cliente");
var Mascota_1 = require("./Mascota");
var Proveedores_1 = require("./Proveedores");
var Veterinaria_1 = require("./Veterinaria");
var rsl = require("readline-sync");
//****Inicializamos Arreglos Vacios ************** */
var arrMascotas = [];
var arrVeterinarias = [];
//********* Proveedores *********** */
var proveedor1 = new Proveedores_1.Proveedores(generadorID(), " Mayorista Veter ", " Colon 4000", 2284456589, "mayorveter@hotj.lo", ["Antivioticos", "Anestecia", "Antirravica", "Quintuple"]);
var proveedor2 = new Proveedores_1.Proveedores(generadorID(), "Bagoo ", "Torres 2300", 22843564590, "bagoo@hotj.lo", ["Analgesico", "Antivioticos", "Desinfectante"]);
var proveedor3 = new Proveedores_1.Proveedores(generadorID(), "Insumos Rodriguez", "Pellegrini 2276", 2284323401, "Insumosrodriguez@hotj.lo", ["Alimento", "Correas", "Puf", "Varios"]);
//*******Clientes****** */
var cliente1 = new Cliente_1.Cliente(generadorID(), "Lucas Laplace", "Leal 633", 2284766543, "lucas@asdjd.com", 5, []);
var cliente2 = new Cliente_1.Cliente(generadorID(), "Melisa Islas", "Moreno 3413", 22843456543, "Malisa@asdjd.com", 3, []);
var cliente3 = new Cliente_1.Cliente(generadorID(), "Mayra Bevacqua", "San Martin 1233", 22846766543, "Mayra@asdjd.com", 2, []);
//8******* Mascotas ******//
var mascota1 = new Mascota_1.Mascota(cliente1.getid(), "MaryZabel", "Perro");
var mascota2 = new Mascota_1.Mascota(cliente2.getid(), "Goldy", "Perro");
var mascota3 = new Mascota_1.Mascota(cliente2.getid(), "Junaita", "Perro");
var mascota4 = new Mascota_1.Mascota(cliente3.getid(), "circuno", "Exotica");
var mascota5 = new Mascota_1.Mascota(cliente3.getid(), "anastacio", "Exotica");
var mascota6 = new Mascota_1.Mascota(cliente3.getid(), "Michi", "Gato");
arrMascotas = [mascota1, mascota2, mascota3, mascota4, mascota5, mascota6];
// Se asignan los Id a las Mascotas
cliente1.agregarMascota(mascota1); //uso metodo en cliente para agregar mascotas al cliente
cliente2.agregarMascota(mascota2);
cliente2.agregarMascota(mascota3);
cliente3.agregarMascota(mascota4);
cliente3.agregarMascota(mascota5);
cliente3.agregarMascota(mascota6);
///*******Veterinarias ***** */
var veterinaria1 = new Veterinaria_1.Veterinaria(generadorID(), " El Ombu ", " Pringles 3000", 2284456789, "elOmbu@sdf.com", [], []);
var veterinaria2 = new Veterinaria_1.Veterinaria(generadorID(), " Patitas", "brown 2300", 2284346790, "patitas@hotmasil,com", [], []);
arrVeterinarias = [veterinaria1, veterinaria2];
var sucursal = arrVeterinarias[0]; // se asigna sucursal para en menu llamar metodos Generales
///******* cargamos arreglos de Veterinaria*********** */
veterinaria1.agregarProveedor(proveedor1);
veterinaria1.agregarProveedor(proveedor2);
veterinaria1.agregarProveedor(proveedor3);
veterinaria1.agregarCliente(cliente1);
veterinaria1.agregarCliente(cliente2);
veterinaria1.agregarCliente(cliente3);
veterinaria2.agregarProveedor(proveedor1);
veterinaria2.agregarProveedor(proveedor2);
veterinaria2.agregarProveedor(proveedor3);
veterinaria2.agregarCliente(cliente1);
veterinaria2.agregarCliente(cliente2);
veterinaria2.agregarCliente(cliente3);
//**************Validacion de ID ***************** */
function validarID(id) {
    var repetido = true;
    while (repetido == true) {
        repetido = false;
        //const sucursal = arrVeterinarias[0];
        for (var _i = 0, arrVeterinarias_1 = arrVeterinarias; _i < arrVeterinarias_1.length; _i++) {
            var veterinaria = arrVeterinarias_1[_i];
            if (veterinaria.getid() === id) {
                repetido = true;
                veterinaria.validarID(id, repetido); // Se concatena la Validacion con los cliente y proveedores de cada veterinaria
            }
        }
        if (repetido) {
            id = Math.floor(1000 + Math.random() * 9000);
        }
    }
    return id;
}
function generadorID() {
    var nuevoId = Math.floor(1000 + Math.random() * 9000);
    return validarID(nuevoId);
}
//************* Comienza Menu Principal *************/
function menu() {
    console.log("*********************************************************************************");
    console.log("*      Bienvenido Veterinarias  MALUME                                          *");
    console.log("*                                                                               *");
    console.log("*   1.Nueva Sucursal       2.Modificar Sucursal        3.Baja Sucursal          *");
    console.log("*                                                                               *");
    console.log("*   4.Nuevo Cliente        5.Modificar Cliente         6.Baja Cliente           *");
    console.log("*                           (Para sumar Atenciones)                             *");
    console.log("*                                                                               *");
    console.log("*   7.Nueva Mascota        8.Modificar Mascota         9.Baja Mascota           *");
    console.log("*                                                                               *");
    console.log("*   10.Nuevo Proveedor     11.Modificar Proveedor      12.Baja Proveedor        *");
    console.log("*                                                                               *");
    console.log("*   13.Lista de Clientes    14.Lista de Sucursales     15.Lista de Proveedores  *");
    console.log("*                                                     __________________________*");
    console.log("*   16.Lista de Mascotas                             |                          *");
    console.log("*                                                    |      0.Para salir        *");
    console.log("*********************************************************************************");
}
//******************************Seleccion Del Menu Principal*********************************************8
function validarEleccion() {
    var seleccion = parseInt(rsl.question("Seleccione la opcion Deseada : "), 10);
    while (seleccion < 0 || seleccion > 16 || seleccion == undefined) {
        console.log("La seleccion es invalido");
        var reValidarSeleccion = parseInt(rsl.question("Seleccione nuevamente la opccion Deseada : "), 10);
        seleccion = reValidarSeleccion;
    }
    return seleccion;
}
function opcionVeterinaria() {
    menu();
    var seleccion = validarEleccion(); // Se llama a la eleccion y validación
    var _loop_1 = function () {
        switch (seleccion) {
            case 1:
                // Alta Veterinaria
                var sucursalNueva = new Veterinaria_1.Veterinaria(generadorID(), " ", " ", 2, "", [], []);
                arrVeterinarias.push(sucursalNueva.altaVeterinaria(generadorID()));
                break;
            case 2:
                // Modificar Veterinaria
                for (var i = 0; i < arrVeterinarias.length; i++) {
                    console.log("Posicion: ", i, " ", arrVeterinarias[i].getnombre());
                }
                var sucursalAModificar = rsl.questionInt("Ingrese la posicion de la veterinaria a Modificar: ");
                arrVeterinarias[sucursalAModificar].modificarVeterinaria(arrVeterinarias[sucursalAModificar]);
                console.log("Veterinaria modificada");
                break;
            case 3:
                // Eliminar Veterinaria
                for (var i = 0; i < arrVeterinarias.length; i++) {
                    console.log("Posicion: ", i, " ", arrVeterinarias[i].getnombre());
                }
                var sucursalAEliminar = rsl.questionInt("Ingrese la posicion de la veterinaria a eliminar: ");
                arrVeterinarias.splice(sucursalAEliminar, 1);
                console.log(arrVeterinarias);
                break;
            case 4:
                // Nuevo Cliente
                sucursal.altaCliente(generadorID());
                break;
            case 5:
                // Modificar Cliente
                sucursal.modificarCliente();
                break;
            case 6:
                // Baja Cliente
                sucursal.bajaCliente();
                break;
            case 7:
                // Nueva Mascota
                console.log(sucursal.mostrarlistaCliente());
                var idDuenio_1 = rsl.questionInt("Ingrese Id del Duenio :");
                var clientesFiltrados = sucursal.getlistaClientes().filter(function (c) { return c.getid() === idDuenio_1; });
                var cliente = clientesFiltrados.length > 0 ? clientesFiltrados[0] : undefined;
                if (!cliente) {
                    console.log("Cliente no encontrado.");
                }
                else {
                    var mascotaNueva = new Mascota_1.Mascota(cliente.getid(), "", "Perro");
                    arrMascotas.push(mascotaNueva.nuevaMascota(cliente.getid()));
                }
                break;
            case 8:
                // Modificar Mascota
                console.log(arrMascotas);
                var nombMascota_1 = rsl.question("Ingrese nombre de la mascota a Modificar :");
                var mascotasFiltradas = arrMascotas.filter(function (c) { return c.getnombre() === nombMascota_1; });
                var mascotaAModificar = mascotasFiltradas.length > 0 ? mascotasFiltradas[0] : undefined;
                if (!mascotaAModificar) {
                    console.log("Mascota no encontrada.");
                }
                else {
                    mascotaAModificar.modificarMascota();
                }
                break;
            case 9:
                // Eliminar Mascota
                for (var i = 0; i < arrMascotas.length; i++) {
                    console.log("Posicion: ", i, " ", arrMascotas[i].getnombre());
                }
                var mascotaAEliminar = rsl.questionInt("Ingrese la posicion de la mascota a eliminar: ");
                arrMascotas.splice(mascotaAEliminar, 1);
                console.log(arrMascotas);
                break;
            case 10:
                // Agregar Proveedor
                sucursal.altaProveedor(generadorID());
                break;
            case 11:
                // Modificar Proveedor
                sucursal.modificarProveedor();
                break;
            case 12:
                // Eliminar Proveedor
                sucursal.bajaProveedor();
                break;
            case 13: //Desde acá no funcionan los cases
                // Mostrar Lista de Clientes
                sucursal.mostrarlistaCliente();
                break;
            case 14:
                // Mostrar Lista de Veterinarias
                sucursal.mostrarListaSucursales(arrVeterinarias);
                break;
            case 15:
                // Mostrar Lista de Proveedores
                sucursal.mostrarlistaProveedores();
                break;
            default:
                // Mostrar Lista de Mascotas de un Cliente
                sucursal.mostrarListaMascotas(arrMascotas);
                break;
        }
        menu();
        seleccion = validarEleccion();
    };
    while (seleccion != 0) {
        _loop_1();
    }
}
//********* ejecucion del Menu *****************/
opcionVeterinaria();
