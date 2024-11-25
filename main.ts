// "use strict"
// import { Cliente } from "./Cliente"
// import { Mascota } from "./Mascota"
// //import { Proveedor } from "./Proveedor";
// //import { Veterinaria } from "../Vetenaria";
// import * as rsl from "readline-sync";

// //****Inicializamos Arreglos ************** */
// //let arrProveedores:Proveedor[]=[];
// let arrClientes: Cliente[] =[];
// let arrMascotas:Mascota[]=[];
// //let arrVeterinarias:Veterinaria[]=[];

// //*********Proveedores*********** */
// // let proveedor1:Proveedor =new Proveedor ( generadorID()," Mayorista Veter "," Colon 4000", 2284456589,["Antivioticos","Anestecia","Antirravica","Quintuple"]);
// // let proveedor2:Proveedor=new Proveedor (generadorID(), "Bagoo ", "Torres 2300", 22843564590,["Analgesico","Antivioticos","Desinfectante"]);
// // let proveedor3:Proveedor = new Proveedor(generadorID(),"Insumos Rodriguez", "Pellegrini 2276", 2284323401,["Alimento","Correas","Puf","Varios"]);
// // arrProveedores=[proveedor1,proveedor2,proveedor3];

// //*******Clientes****** */
// let cliente1: Cliente = new Cliente(generadorID(), "Lucas Laplace", "Leal 633", 2284766543, "lucas@asdjd.com",5,[]);
// let cliente2: Cliente = new Cliente(generadorID(), "Melisa Islas", "Moreno 3413", 22843456543, "Malisa@asdjd.com",3,[]);
// let cliente3: Cliente = new Cliente(generadorID(), "Mayra Bevacqua", "San Martin 1233", 22846766543, "Mayra@asdjd.com",2,[]);
// arrClientes= [cliente1, cliente2, cliente3];

// //8******* Mascotas ******//
// let mascota1: Mascota = new Mascota(cliente1.getid(), "MaryZabel", "Perro");
// let mascota2: Mascota = new Mascota(cliente2.getid(), "Goldy", "Perro");
// let mascota3: Mascota = new Mascota(cliente2.getid(), "Junaita", "Perro");
// let mascota4: Mascota = new Mascota(cliente3.getid(), "circuno", "Exotica");
// let mascota5: Mascota = new Mascota(cliente3.getid(), "anastacio", "Exotica");
// let mascota6: Mascota = new Mascota(cliente3.getid(), "Michi", "Gato");
// arrMascotas=[mascota1,mascota2,mascota3,mascota4,mascota5,mascota6];

// // Se asignan los Id a las Mascotas
// cliente1.agregarMascota(mascota1); //uso metodo en cliente para agregar mascotas al cliente
// cliente2.agregarMascota(mascota2);
// cliente2.agregarMascota(mascota3);
// cliente3.agregarMascota(mascota4);
// cliente3.agregarMascota(mascota5);
// cliente3.agregarMascota(mascota6);

// ///*******Veterinarias ***** */

// // let veterinaria1:Veterinaria =new Veterinaria ( generadorID()," El Ombu "," Pringles 3000",2284456789, "elOmbu@sdf.com");
// // let veterinaria2:Veterinaria =new Veterinaria (generadorID(),  " Patitas", "brown 2300", 2284346790,"patitas@hotmasil,com");
// // let veterinaria3:Veterinaria = new Veterinaria(generadorID(),"Mendez Veterinaria", "Munioz 2276", 2284357901,"mendezvete@yahoo.com");
// // arrVeterinarias=[veterinaria1,veterinaria2,veterinaria3];



// //******************************* */
// function validarID(id):boolean{ /// funcion para recorrer arreglos y revisar si el id esta ocupado
//     let repetido:boolean=true;
//     while (repetido==true){
//         repetido=false;
//         // for (let i:number = 0;i<arrProveedores.length ; i++){
//         //     if (arrProveedores[i].getid()==id ){
//         //         repetido=true;
//         //     }
//         // }
//         for (let i:number = 0;i<arrClientes.length ; i++){
//             if (arrClientes[i].getid()==id ){
//                 repetido=true;
//             }
//         }
//         // for (let i:number = 0;i<arrVeterinarias.length ; i++){
//         //     if (arrVeterinarias[i].getid()==id ){
//         //         repetido=true;
//         //     }
//         // }
//     }return repetido;
// }

// function generadorID(): number {
//     let nuevoId = Math.floor(1000 + Math.random() * 9000);
//     validarID(nuevoId);
//     return nuevoId;
// }

// //************* Comienza Menu Principal *************/
// function menu() {
//     console.log("*********************************************************************************");
//     console.log("*      Bienvenido Veterinarias  MALUME                                          *");
//     console.log("*                                                                               *");
//     console.log("*   1.Nueva Sucursal       2.Modificar Sucursal        3.Baja Sucursal          *");
//     console.log("*                                                                               *");
//     console.log("*   4.Nuevo Cliente        5.Modificar Cliente         6.Baja Cliente           *");
//     console.log("*                           (Para sumar Atenciones)                                                    *");
//     console.log("*                                                                               *");
//     console.log("*   7.Nueva Mascota        8.Modificar Mascota         9.Baja Mascota           *");
//     console.log("*                                                                               *");
//     console.log("*   10.Nuevo Proveedor     11.Modificar Proveedor      12.Baja Proveedor        *");
//     console.log("*                                                                               *");
//     console.log("*   13.Lista de Clientes    14.Lista de Sucursales     15.Lista de Proveedores  *");
//     console.log("*                                                     __________________________*");
//     console.log("*   16.Lista de Mascotas                             |                          *");
//     console.log("*                                                    |      0.Para salir        *");
//     console.log("*********************************************************************************");
// }

// //************************************ Funcionalidades ******************************




// //******************************Seleccion Del Menu Principal*********************************************8
// function validarEleccion(): number {// Se valida la elecccion del Menu
//     let seleccion: number = parseInt(rsl.question("Seleccione la opcion Deseada : "), 10);
//     while (seleccion < 0 || seleccion > 16 || seleccion == undefined) {
//         console.log("La seleccion es invalido");
//         let reValidarSeleccion: number = parseInt(rsl.question("Seleccione nuevamente la opccion Deseada : "), 10);
//         seleccion = reValidarSeleccion;
//     } return seleccion
// }

// function opcionVeterinaria() {
//     menu();
//     let seleccion: number = validarEleccion(); //Se llama a la eleccion y validacion
//     while (seleccion != 0) {
//         if (seleccion == 1) {
//         //     let sucursalNueva :Veterinaria=new Veterinaria (generadorID()," El Ternero "," Del Valle 3000",2284453989, "elternero@sdf.com");
//         //     arrVeterinarias.push(sucursalNueva);
//         //     console.log("Ingresada nueva Sucursal ");
//         //     console.log( sucursalNueva );
//         // } else if (seleccion == 2) {
//             console.log(" modificarSucursal() ");
//         } else if (seleccion == 3) {
//             console.log(" bajaSucursal() ");
//         } else if (seleccion == 4) { // Nuevo Cliente
//             let clienteNuevo :Cliente=new Cliente (generadorID()," ","",2,"",0,[]);
//             arrClientes.push(clienteNuevo.nuevoElemento(clienteNuevo.getid()));
//             console.log(arrClientes);
//         } else if (seleccion == 5) {
//             console.log(arrClientes);
//             let idcliente:number = rsl.questionInt("Ingrese Id del Cliente a modificar :");
//             let aux:number=-1;
//             for (let i:number = 0;i<arrClientes.length ; i++) {
//                 if (idcliente==arrClientes[i].getid()){
//                     aux=i; // guardo la posicion para signar la mascota l duenio
//                 }
//             }
//             arrClientes[aux].modificarCliente();
//         } else if (seleccion == 6) {
//              console.log("eliminarClientes");
//         } else if (seleccion == 7) {
//             console.log(arrClientes);
//             let idDuenio:number = rsl.questionInt("Ingrese Id del Dueño :");
//             let mascotaNueva :Mascota=new Mascota (idDuenio,"NN","Perro");// inicio Mascota Nueva
//             arrMascotas.push(mascotaNueva.nuevoElemento(idDuenio));//Cargo datos de la mascota en arrayMascotas
//             let aux:number=-1;
//             for (let i:number = 0;i<arrClientes.length ; i++) {
//                 if (idDuenio==arrClientes[i].getid()){
//                     aux=i; // guardo la posicion para signar la mascota l duenio
//                 }
//             }
//             arrClientes[aux].agregarMascota(mascotaNueva);//Asignamos mascota al Cliente
//             console.log(arrMascotas);
//         } else if (seleccion == 8) {// Mosificar Mascota
//                 console.log(arrMascotas);
//                 let nombMascota:string = rsl.question("Ingrese nombre de la mascota a Modificar :");        
//                 let aux:number=-1;
//                 for (let i:number = 0;i<arrMascotas.length ; i++) {
//                     if (nombMascota==arrMascotas[i].getnombre()){
//                         aux=i; // guardo la posicion para signar la mascota l duenio
//                     }
//                 }
//                 arrMascotas[aux].modificarMascota();
//             } else if (seleccion == 9) {
//              console.log("Baja Mascota")
//         } else if (seleccion == 10) { //Agregamos proveedor 
//             //arrProveedores.push( nuevoProveedor(generadorID(),"Pedegree", "Pringles 4000",18274491,["Alimento Perros","Alimento Gatos"]));
//         } else if (seleccion == 11) { //Modificar proveedor
//             // console.log(arrProveedor);
//             // let idProveedor:number = rsl.questionInt("Ingrese Id del Proveedor a modificar :");
//             // let aux:number=-1;
//             // for (let i:number = 0;i<arrProveedor.length ; i++) {
//             //     if (idProveedor==arrProveedor[i].getid()){
//             //         aux=i; // guardo la posicion para signar la mascota l duenio
//             //     }
//             // }
//             // arrProveedor[aux].modificarProveedor();
            
//         } else if (seleccion == 12) { //eliminar proveedor

//             console.log(" bajaProveedor() ");
//         } else if (seleccion == 13) {
//             console.log(arrClientes);
//         } else if (seleccion == 14) {
//             console.log("arrVeterinarias");
//         } else if (seleccion == 15) {
//             console.log("arrProveedores");
//         } else if (seleccion == 16) {
//             console.log(arrMascotas);
//         } else {
//             console.log(" () ");
//         }
//         // Al finalizar una tarea se retoma el menu para poder seguir trabajando .
//         menu();
//         seleccion = validarEleccion(); //Se llama a la eleccion de juego y validacion
//     }
// }


// //********* ejecucion del Menu *****************/

// opcionVeterinaria();
