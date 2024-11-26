"use strict"
import { Cliente } from "./Cliente"
import { Mascota } from "./Mascota"
import { Proveedores } from "./Proveedores";
import { Veterinaria } from "./Veterinaria";
import * as rsl from "readline-sync";

//****Inicializamos Arreglos Vacios ************** */
let arrMascotas:Mascota[]=[];
let arrVeterinarias:Veterinaria[]=[];

//********* Proveedores *********** */
let proveedor1:Proveedores =new Proveedores ( generadorID()," Mayorista Veter "," Colon 4000", 2284456589,"mayorveter@hotj.lo",["Antivioticos","Anestecia","Antirravica","Quintuple"]);
let proveedor2:Proveedores=new Proveedores (generadorID(), "Bagoo ", "Torres 2300", 22843564590,"bagoo@hotj.lo",["Analgesico","Antivioticos","Desinfectante"]);
let proveedor3:Proveedores = new Proveedores(generadorID(),"Insumos Rodriguez", "Pellegrini 2276", 2284323401,"Insumosrodriguez@hotj.lo",["Alimento","Correas","Puf","Varios"]);

//*******Clientes****** */
let cliente1: Cliente = new Cliente(generadorID(), "Lucas Laplace", "Leal 633", 2284766543, "lucas@asdjd.com",5,[]);
let cliente2: Cliente = new Cliente(generadorID(), "Melisa Islas", "Moreno 3413", 22843456543, "Malisa@asdjd.com",3,[]);
let cliente3: Cliente = new Cliente(generadorID(), "Mayra Bevacqua", "San Martin 1233", 22846766543, "Mayra@asdjd.com",2,[]);

//8******* Mascotas ******//
let mascota1: Mascota = new Mascota(cliente1.getid(), "MaryZabel", "Perro");
let mascota2: Mascota = new Mascota(cliente2.getid(), "Goldy", "Perro");
let mascota3: Mascota = new Mascota(cliente2.getid(), "Junaita", "Perro");
let mascota4: Mascota = new Mascota(cliente3.getid(), "circuno", "Exotica");
let mascota5: Mascota = new Mascota(cliente3.getid(), "anastacio", "Exotica");
let mascota6: Mascota = new Mascota(cliente3.getid(), "Michi", "Gato");

arrMascotas=[mascota1,mascota2,mascota3,mascota4,mascota5,mascota6];

// Se asignan los Id a las Mascotas
cliente1.agregarMascota(mascota1); //uso metodo en cliente para agregar mascotas al cliente
cliente2.agregarMascota(mascota2);
cliente2.agregarMascota(mascota3);
cliente3.agregarMascota(mascota4);
cliente3.agregarMascota(mascota5);
cliente3.agregarMascota(mascota6);

///*******Veterinarias ***** */
let veterinaria1:Veterinaria =new Veterinaria ( generadorID()," El Ombu "," Pringles 3000",2284456789, "elOmbu@sdf.com",[],[]);
let veterinaria2:Veterinaria =new Veterinaria (generadorID(),  " Patitas", "brown 2300", 2284346790,"patitas@hotmasil,com",[],[]);
arrVeterinarias=[veterinaria1,veterinaria2];
const sucursal = arrVeterinarias[0]; // se asigna sucursal para en menu llamar metodos Generales

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
function validarID(id:number):number{ /// funcion para recorrer arreglos y revisar si el id esta ocupado
    let repetido:boolean=true;
    while (repetido==true){
        repetido=false;
        //const sucursal = arrVeterinarias[0];
        for (let veterinaria of arrVeterinarias) {
            if (veterinaria.getid() === id) {
                repetido = true;
                veterinaria.validarID(id, repetido) // Se concatena la Validacion con los cliente y proveedores de cada veterinaria
            }
        }
        if (repetido){
            id = Math.floor(1000 + Math.random() * 9000);
        }
    }return id;
}

function generadorID(): number {
    let nuevoId = Math.floor(1000 + Math.random() * 9000);
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
    console.log("*********************************************************************************");}

//******************************Seleccion Del Menu Principal*********************************************8
function validarEleccion(): number {// Se valida la elecccion del Menu
    let seleccion: number = parseInt(rsl.question("Seleccione la opcion Deseada : "), 10);
    while (seleccion < 0 || seleccion > 16 || seleccion == undefined) {
        console.log("La seleccion es invalido");
        let reValidarSeleccion: number = parseInt(rsl.question("Seleccione nuevamente la opccion Deseada : "), 10);
        seleccion = reValidarSeleccion;
    } return seleccion
}
function opcionVeterinaria() {
    menu();
    let seleccion: number = validarEleccion(); // Se llama a la eleccion y validación
    while (seleccion != 0) {
        switch (seleccion) {
            case 1:
                // Alta Veterinaria
                let sucursalNueva: Veterinaria = new Veterinaria(generadorID(), " ", " ", 2, "", [], []);
                arrVeterinarias.push(sucursalNueva.altaVeterinaria(generadorID()));
                break;

            case 2:
                // Modificar Veterinaria
                for (let i: number = 0; i < arrVeterinarias.length; i++) {
                    console.log("Posicion: ", i, " ", arrVeterinarias[i].getnombre());
                }
                let sucursalAModificar: number = rsl.questionInt("Ingrese la posicion de la veterinaria a Modificar: ");
                arrVeterinarias[sucursalAModificar].modificarVeterinaria(arrVeterinarias[sucursalAModificar]);
                console.log("Veterinaria modificada");
                
                break;

            case 3:
                // Eliminar Veterinaria
                for (let i: number = 0; i < arrVeterinarias.length; i++) {
                    console.log("Posicion: ", i, " ", arrVeterinarias[i].getnombre());
                }
                let sucursalAEliminar: number = rsl.questionInt("Ingrese la posicion de la veterinaria a eliminar: ");
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
                let idDuenio: number = rsl.questionInt("Ingrese Id del Duenio :");
                const clientesFiltrados = sucursal.getlistaClientes().filter(c => c.getid() === idDuenio);
                const cliente = clientesFiltrados.length > 0 ? clientesFiltrados[0] : undefined;
                if (!cliente) {
                    console.log("Cliente no encontrado.");
                } else {
                    let mascotaNueva: Mascota = new Mascota(cliente.getid(), "", "Perro");
                    arrMascotas.push(mascotaNueva.nuevaMascota(cliente.getid()));
                }
                break;

            case 8:
                // Modificar Mascota
                console.log(arrMascotas);
                let nombMascota: string = rsl.question("Ingrese nombre de la mascota a Modificar :");
                const mascotasFiltradas = arrMascotas.filter(c => c.getnombre() === nombMascota);
                const mascotaAModificar = mascotasFiltradas.length > 0 ? mascotasFiltradas[0] : undefined;
                if (!mascotaAModificar) {
                    console.log("Mascota no encontrada.");
                } else {
                    mascotaAModificar.modificarMascota();
                }
                break;

            case 9:
                // Eliminar Mascota
                for (let i: number = 0; i < arrMascotas.length; i++) {
                    console.log("Posicion: ", i, " ", arrMascotas[i].getnombre());
                }
                let mascotaAEliminar: number = rsl.questionInt("Ingrese la posicion de la mascota a eliminar: ");
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
    }
}

//********* ejecucion del Menu *****************/
opcionVeterinaria();
