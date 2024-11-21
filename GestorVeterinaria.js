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
    var seleccion = validarEleccion(); //Se llama a la eleccion y validacion
    var _loop_1 = function () {
        if (seleccion == 1) {
            var sucursalNueva = new Veterinaria_1.Veterinaria(generadorID(), " ", " ", 2, "", [], []);
            arrVeterinarias.push(sucursalNueva.altaVeterinaria(generadorID()));
        }
        else if (seleccion == 2) { // se modifica veterinaria2
            for (var i = 0; i < arrVeterinarias.length; i++) {
                console.log("Posicion: ", i, " ", arrVeterinarias[i].getnombre());
            }
            var sucursalAModificar = rsl.questionInt("Ingrese la posicion de la vetinaria a Modificar: ");
            arrVeterinarias[sucursalAModificar].modificarVeterinaria(arrVeterinarias[sucursalAModificar]);
        }
        else if (seleccion == 3) { // se elimina Veterinaria
            for (var i = 0; i < arrVeterinarias.length; i++) {
                console.log("Posicion: ", i, " ", arrVeterinarias[i].getnombre());
            }
            var sucursalAEliminar = rsl.questionInt("Ingrese la posicion de la vetinaria a eliminar: ");
            arrVeterinarias.splice(sucursalAEliminar, 1);
            console.log(arrVeterinarias);
        }
        else if (seleccion == 4) { // Nuevo Cliente
            sucursal.altaCliente(generadorID());
        }
        else if (seleccion == 5) { //ModificarCliente
            sucursal.modificarCliente();
        }
        else if (seleccion == 6) { // baja Cliente
            sucursal.bajaCliente();
        }
        else if (seleccion == 7) { //Nueva Mascota
            console.log(sucursal.mostrarlistaCliente());
            var idDuenio_1 = rsl.questionInt("Ingrese Id del Dueño :");
            var clientesFiltrados = sucursal.getlistaClientes().filter(function (c) { return c.getid() === idDuenio_1; });
            //filter devuelve los ID que cumplen la condicion
            var cliente = clientesFiltrados.length > 0 ? clientesFiltrados[0] : undefined;
            if (!cliente) { // Validamos Si no encuentra el cliente
                console.log("Cliente no encontrado.");
            }
            else {
                var mascotaNueva = new Mascota_1.Mascota(cliente.getid(), "", "Perro"); //= new Mascota(idDuenio, nombreMascota, tipoMascota);
                arrMascotas.push(mascotaNueva.nuevaMascota(cliente.getid()));
            }
        }
        else if (seleccion == 8) { // Modificar Mascota
            console.log(arrMascotas);
            var nombMascota_1 = rsl.question("Ingrese nombre de la mascota a Modificar :");
            var mascotasFiltradas = arrMascotas.filter(function (c) { return c.getnombre() === nombMascota_1; });
            //filter devuelve elementos que cumplen la condicion
            var mascotaAModificar = mascotasFiltradas.length > 0 ? mascotasFiltradas[0] : undefined;
            if (!mascotaAModificar) { // validamos mascota
                console.log(" Mascota no encontrada.");
            }
            else {
                mascotaAModificar.modificarMascota();
            }
        }
        else if (seleccion == 9) {
            for (var i = 0; i < arrMascotas.length; i++) {
                console.log("Posicion: ", i, " ", arrMascotas[i].getnombre());
            }
            var mascotaAEliminar = rsl.questionInt("Ingrese la posicion de la vetinaria a eliminar: ");
            arrMascotas.splice(mascotaAEliminar, 1);
            console.log(arrMascotas);
        }
        else if (seleccion == 10) { //Agregamos proveedor 
            sucursal.altaProveedor(generadorID());
        }
        else if (seleccion == 11) { //Modificar proveedor
            sucursal.modificarProveedor();
        }
        else if (seleccion == 12) { //eliminar proveedor
            sucursal.bajaProveedor();
        }
        else if (seleccion == 13) { //Mostramos Lista de clientes
            sucursal.mostrarlistaCliente();
        }
        else if (seleccion == 14) { // Mostramos Lista de Veterinarias
            console.log(arrVeterinarias);
        }
        else if (seleccion == 15) { //Mostramos arreglo de Proveedores
            sucursal.mostrarlistaProveedores();
        }
        else { // mostramos arreglo de mascotas
            console.log(arrMascotas);
        }
        // Al finalizar una tarea se retoma el menu para poder seguir trabajando .
        menu();
        seleccion = validarEleccion(); //Se llama a la eleccion de juego y validacion
    };
    while (seleccion != 0) {
        _loop_1();
    }
}
//********* ejecucion del Menu *****************/
opcionVeterinaria();
