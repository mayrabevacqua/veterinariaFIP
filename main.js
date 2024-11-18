"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente_1 = require("./Cliente");
var Mascota_1 = require("./Mascota");
//import { Proveedor } from "./Proveedor";
//import { Veterinaria } from "../Vetenaria";
var rsl = require("readline-sync");
//****Inicializamos Arreglos ************** */
//let arrProveedores:Proveedor[]=[];
var arrClientes = [];
var arrMascotas = [];
//let arrVeterinarias:Veterinaria[]=[];
//*********Proveedores*********** */
// let proveedor1:Proveedor =new Proveedor ( generadorID()," Mayorista Veter "," Colon 4000", 2284456589,["Antivioticos","Anestecia","Antirravica","Quintuple"]);
// let proveedor2:Proveedor=new Proveedor (generadorID(), "Bagoo ", "Torres 2300", 22843564590,["Analgesico","Antivioticos","Desinfectante"]);
// let proveedor3:Proveedor = new Proveedor(generadorID(),"Insumos Rodriguez", "Pellegrini 2276", 2284323401,["Alimento","Correas","Puf","Varios"]);
// arrProveedores=[proveedor1,proveedor2,proveedor3];
//*******Clientes****** */
var cliente1 = new Cliente_1.Cliente(generadorID(), "Lucas Laplace", "Leal 633", 2284766543, "lucas@asdjd.com", 5);
var cliente2 = new Cliente_1.Cliente(generadorID(), "Melisa Islas", "Moreno 3413", 22843456543, "Malisa@asdjd.com", 3);
var cliente3 = new Cliente_1.Cliente(generadorID(), "Mayra Bevacqua", "San Martin 1233", 22846766543, "Mayra@asdjd.com", 2);
arrClientes = [cliente1, cliente2, cliente3];
//8******* Mascotas ******//
var mascota1 = new Mascota_1.Mascota(0, "MaryZabel", "Perro");
var mascota2 = new Mascota_1.Mascota(0, "Goldy", "Perro");
var mascota3 = new Mascota_1.Mascota(0, "Junaita", "Perro");
var mascota4 = new Mascota_1.Mascota(0, "circuno", "Exotica");
var mascota5 = new Mascota_1.Mascota(0, "anastacio", "Exotica");
var mascota6 = new Mascota_1.Mascota(0, "Michi", "Gato");
arrMascotas = [mascota1, mascota2, mascota3, mascota4, mascota5, mascota6];
// Se asignan los Id a las Mascotas
cliente1.agregarMascota(mascota1); //uso metodo en cliente para agregar mascotas al cliente
cliente2.agregarMascota(mascota2);
cliente2.agregarMascota(mascota3);
cliente3.agregarMascota(mascota4);
cliente3.agregarMascota(mascota5);
cliente3.agregarMascota(mascota6);
///*******Veterinarias ***** */
// let veterinaria1:Veterinaria =new Veterinaria ( generadorID()," El Ombu "," Pringles 3000",2284456789, "elOmbu@sdf.com");
// let veterinaria2:Veterinaria =new Veterinaria (generadorID(),  " Patitas", "brown 2300", 2284346790,"patitas@hotmasil,com");
// let veterinaria3:Veterinaria = new Veterinaria(generadorID(),"Mendez Veterinaria", "Munioz 2276", 2284357901,"mendezvete@yahoo.com");
// arrVeterinarias=[veterinaria1,veterinaria2,veterinaria3];
//******************************* */
function validarID(id) {
    var repetido = true;
    while (repetido == true) {
        repetido = false;
        // for (let i:number = 0;i<arrProveedores.length ; i++){
        //     if (arrProveedores[i].getid()==id ){
        //         repetido=true;
        //     }
        // }
        for (var i = 0; i < arrClientes.length; i++) {
            if (arrClientes[i].getid() == id) {
                repetido = true;
            }
        }
        // for (let i:number = 0;i<arrVeterinarias.length ; i++){
        //     if (arrVeterinarias[i].getid()==id ){
        //         repetido=true;
        //     }
        // }
    }
    return repetido;
}
function generadorID() {
    var nuevoId = Math.floor(1000 + Math.random() * 9000);
    validarID(nuevoId);
    return nuevoId;
}
//************* Comienza Menu Principal *************/
function menu() {
    console.log("*********************************************************************************");
    console.log("*      Bienvenido Veterinarias  MALUME                                          *");
    console.log("*                                                                               *");
    console.log("*   1.Nueva Sucursal       2.Modificar Sucursal        3.Baja Sucursal          *");
    console.log("*                                                                               *");
    console.log("*   4.Nuevo Cliente        5.Modificar Cliente         6.Baja Cliente           *");
    console.log("*                           (Para sumar Atenciones)                                                    *");
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
//************************************ Funcionalidades ******************************
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
    while (seleccion != 0) {
        if (seleccion == 1) {
            //     let sucursalNueva :Veterinaria=new Veterinaria (generadorID()," El Ternero "," Del Valle 3000",2284453989, "elternero@sdf.com");
            //     arrVeterinarias.push(sucursalNueva);
            //     console.log("Ingresada nueva Sucursal ");
            //     console.log( sucursalNueva );
            // } else if (seleccion == 2) {
            console.log(" modificarSucursal() ");
        }
        else if (seleccion == 3) {
            console.log(" bajaSucursal() ");
        }
        else if (seleccion == 4) {
            var clienteNuevo = new Cliente_1.Cliente(generadorID(), " ", "", 2, "", 0);
            arrClientes.push(clienteNuevo.nuevoElemento(generadorID));
            console.log("Ingresada nuevo Cliente ");
            console.log(clienteNuevo);
        }
        else if (seleccion == 5) {
            console.log("modificarClientes()");
        }
        else if (seleccion == 6) {
            console.log("eliminarClientes");
        }
        else if (seleccion == 7) {
            console.log(arrClientes);
            var idDuenio = rsl.questionInt("Ingrese Id del Dueño :");
            var mascotaNueva = new Mascota_1.Mascota(idDuenio, "", "");
            arrMascotas.push(mascotaNueva.nuevoElemento(idDuenio)); //Cargo datos de la mascota en arrayMascotas
            var aux = -1;
            for (var i = 0; i < arrClientes.length; i++) {
                if (idDuenio == arrClientes[i].getid()) {
                    aux = i; // guardo la posicion para signar la mascota l duenio
                }
            }
            arrClientes[aux].agregarMascota(mascotaNueva);
            console.log(arrMascotas);
        }
        else if (seleccion == 8) {
            console.log("Mosdificar Mascota");
        }
        else if (seleccion == 9) {
            console.log("Baja Mascota");
        }
        else if (seleccion == 10) {
            console.log("altaProveedor()");
        }
        else if (seleccion == 11) {
            console.log(" modificarProveedor() ");
        }
        else if (seleccion == 12) {
            console.log(" bajaProveedor() ");
        }
        else if (seleccion == 13) {
            console.log(arrClientes);
        }
        else if (seleccion == 14) {
            console.log("arrVeterinarias");
        }
        else if (seleccion == 15) {
            console.log("arrProveedores");
        }
        else if (seleccion == 16) {
            console.log(arrMascotas);
        }
        else {
            console.log(" () ");
        }
        // Al finalizar una tarea se retoma el menu para poder seguir trabajando .
        menu();
        seleccion = validarEleccion(); //Se llama a la eleccion de juego y validacion
    }
}
//********* ejecucion del Menu *****************/
opcionVeterinaria();
