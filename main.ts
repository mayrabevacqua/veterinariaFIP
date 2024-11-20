"use strict"
import { Cliente } from "./Cliente"
import { Mascota } from "./Mascota"
import { Proveedores } from "./Proveedores";
import { Veterinaria } from "./Veterinaria";
import * as rsl from "readline-sync";

//****Inicializamos Arreglos ************** */
//let arrProveedores:Proveedores[]=[];
//let arrClientes: Cliente[] =[];
let arrMascotas:Mascota[]=[];
let arrVeterinarias:Veterinaria[]=[];


//*********Proveedores*********** */
let proveedor1:Proveedores =new Proveedores ( generadorID()," Mayorista Veter "," Colon 4000", 2284456589,"mayorveter@hotj.lo",["Antivioticos","Anestecia","Antirravica","Quintuple"]);
let proveedor2:Proveedores=new Proveedores (generadorID(), "Bagoo ", "Torres 2300", 22843564590,"bagoo@hotj.lo",["Analgesico","Antivioticos","Desinfectante"]);
let proveedor3:Proveedores = new Proveedores(generadorID(),"Insumos Rodriguez", "Pellegrini 2276", 2284323401,"Insumosrodriguez@hotj.lo",["Alimento","Correas","Puf","Varios"]);
//arrProveedores=[proveedor1,proveedor2,proveedor3];

//*******Clientes****** */
let cliente1: Cliente = new Cliente(generadorID(), "Lucas Laplace", "Leal 633", 2284766543, "lucas@asdjd.com",5,[]);
let cliente2: Cliente = new Cliente(generadorID(), "Melisa Islas", "Moreno 3413", 22843456543, "Malisa@asdjd.com",3,[]);
let cliente3: Cliente = new Cliente(generadorID(), "Mayra Bevacqua", "San Martin 1233", 22846766543, "Mayra@asdjd.com",2,[]);
//arrClientes= [cliente1, cliente2, cliente3];


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

///******* cargamos arreglos de Veterinaria*********** */

veterinaria1.agregarProveedor(proveedor1);
veterinaria1.agregarProveedor(proveedor2);
veterinaria1.agregarProveedor(proveedor3);
veterinaria1.agregarCliente(cliente1);
veterinaria1.agregarCliente(cliente2);
veterinaria1.agregarCliente(cliente3);

//******************************* */
function validarID(id:number):number{ /// funcion para recorrer arreglos y revisar si el id esta ocupado
    let repetido:boolean=true;
    while (repetido==true){
        repetido=false;
        const sucursal = arrVeterinarias[0];
     
        for (let cliente of sucursal.getlistaClientes()) {
            if (cliente.getid() === id) {
                repetido = true;
                break;
            }
        }
        for (let proveedor of sucursal.getlistaProveedores()) {
            if (proveedor.getid() === id) {
                repetido = true;
                break;
            }
        }
        for (let veterinaria of arrVeterinarias) { ///  FALTA UN ARREGLO DE VETERINARIAS
            if (veterinaria.getid() === id) {
                repetido = true;
                break;
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

//******************************Seleccion Del Menu Principal*********************************************

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
    let seleccion: number = validarEleccion(); //Se llama a la eleccion y validacion
    while (seleccion != 0) {
        if (seleccion == 1) {
            let sucursalNueva :Veterinaria=new Veterinaria (generadorID()," El Ternero "," Del Valle 3000",2284453989, "elternero@sdf.com",[],[]);
            arrVeterinarias.push(sucursalNueva);
            console.log("Ingresada nueva Sucursal ");
            console.log( sucursalNueva );
        } else if (seleccion == 2) {
            console.log(" modificarSucursal() ");
        } else if (seleccion == 3) {
            console.log(" bajaSucursal() ");
        } else if (seleccion == 4) { // Nuevo Cliente
            const sucursal = arrVeterinarias[0]; //  la primera veterinaria
            sucursal.altaCliente(generadorID());
        } else if (seleccion == 5) { //ModificarCliente
            const sucursal = arrVeterinarias[0];
            sucursal.modificarCliente();
        } else if (seleccion == 6) { // baja Cliente
            const sucursal = arrVeterinarias[0];
            sucursal.bajaCliente();
            console.log("hola");
            
        } else if (seleccion == 7) { //Nueva Mascota
            const sucursal = arrVeterinarias[0];
            console.log(sucursal.mostrarlistaCliente());
            let idDuenio: number = rsl.questionInt("Ingrese Id del Dueño :");
            const cliente = sucursal.getlistaClientes().find(c => c.getid() === idDuenio);
            if (!cliente) { // Si no encuentra el cliente
                console.log("Cliente no encontrado.");
            } else {
                let nombreMascota: string = rsl.question("Ingrese el nombre de la mascota: ");
                let tipoMascota: string = rsl.question("Ingrese el tipo de mascota (Perro/Gato/Exótica/etc.): ");
                let mascotaNueva: Mascota = new Mascota(idDuenio, nombreMascota, tipoMascota);

                arrMascotas.push(mascotaNueva);
                cliente.agregarMascota(mascotaNueva);
                console.log(mascotaNueva);
            }
        } else if (seleccion == 8) {// Modificar Mascota
            console.log(arrMascotas);
            let nombMascota:string = rsl.question("Ingrese nombre de la mascota a Modificar :"); 
            const mascotaAModificar = arrMascotas.find(c => c.getnombre() === nombMascota);
            if(!mascotaAModificar) {
                console.log(" Mascota no encontrada.");
            }else{       
                mascotaAModificar.modificarMascota();
            }
        } else if (seleccion == 9) {
            // const mascota = arrClientes [0];
            // mascota.
               

        } else if (seleccion == 10) { //Agregamos proveedor 
            const sucursal = arrVeterinarias[0];
            sucursal.altaProveedor(generadorID());
        } else if (seleccion == 11) { //Modificar proveedor
            const sucursal = arrVeterinarias[0];
            sucursal.modificarCliente();
            
        } else if (seleccion == 12) { //eliminar proveedor
            const sucursal = arrVeterinarias[0];
            sucursal.bajaProveedor();
        
        } else if (seleccion == 13) {
            const sucursal = arrVeterinarias[0];
            sucursal.mostrarlistaCliente();
            
        } else if (seleccion == 14) {
             console.log(arrVeterinarias);

        } else if (seleccion == 15) {
            const sucursal = arrVeterinarias[0];
            sucursal.mostrarlistaProveedores();
            
        } else {
            console.log(arrMascotas);
        } 
        // Al finalizar una tarea se retoma el menu para poder seguir trabajando .
        menu();
        seleccion = validarEleccion(); //Se llama a la eleccion de juego y validacion
    }
}


//********* ejecucion del Menu *****************/

opcionVeterinaria();