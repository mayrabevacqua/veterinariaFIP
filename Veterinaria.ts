import { DatosBase } from "./DatoBase";
import { Cliente } from "./Cliente";
import { Proveedores } from "./Proveedores";
import * as rsl from "readline-sync";

export class Veterinaria extends DatosBase {
  private email: string;
  protected listaClientes: Cliente[] = [];
  protected listaProveedores: Proveedores[] = [];


  constructor(id: number, nombre: string, direccion: string, telefono: number, email: string, listaClientes: Cliente[], listaProveedores: Proveedores[]) {
    super(id, nombre, direccion, telefono)
    this.email = email;
    this.listaClientes = listaClientes;
    this.listaProveedores = listaProveedores;
  }

  public getemail(): string {
    return this.email;
  }

  public setemail(email: string) {
    this.email = email;
  }

  public getlistaProveedores(): Proveedores[] {
    return this.listaProveedores;
  }

  public getlistaClientes(): Cliente[] {
    return this.listaClientes;
  }
 

  //////*****metodos********* */

  public agregarCliente(cliente: Cliente): void {
    this.listaClientes.push(cliente);
  }

  public agregarProveedor(proveedor: Proveedores): void {
    this.listaProveedores.push(proveedor);
  }

  public mostrarlistaCliente(){
    console.log(this.listaClientes);
  }

  public mostrarlistaProveedores(){
    console.log(this.listaProveedores);
  }


  public validarID(id:number,  repetido:boolean):boolean{ /// funcion para recorrer arreglos y revisar si el id esta ocupado
    for (let proveedor of this.getlistaProveedores()) {
            if (proveedor.getid() === id) {
                repetido = true;
                break;
            }
        }        
        for (let cliente of this.getlistaClientes()) {
            if (cliente.getid() === id) {
                repetido = true;
                break;
            }
        }
        return  repetido
    }

    /********************Altas********************** */

  public altaVeterinaria(nuevoid:number): Veterinaria {
    const id = nuevoid; // Generdo un ID único por parametro
    const nombre = rsl.question("Ingrese Nombre de sucursal: ");
    const direccion = rsl.question("Ingrese Dirección  de sucursal: ");
    const telefono = rsl.questionInt("Ingrese Teléfono  de sucursal: ");
    const email = rsl.question("Ingrese Email de sucursal: ");
    const nuevaVete = new Veterinaria(id, nombre, direccion, telefono, email, [], []);
    console.log("Ingresada nueva Sucursal ");
    console.log( nuevaVete );
    return nuevaVete
  }

  public altaCliente(nuevoid:number): void {
    const id = nuevoid; // Generdo un ID único por parametro
    const nombre = rsl.question("Ingrese Nombre del Cliente: ");
    const direccion = rsl.question("Ingrese Dirección del Cliente: ");
    const telefono = rsl.questionInt("Ingrese Teléfono del Cliente: ");
    const email = rsl.question("Ingrese Email del Cliente: ");
    const nuevoCliente = new Cliente(id, nombre, direccion, telefono, email, 0, []);
    if (!this.listaClientes.some(cliente => cliente.getid() === id)) {
      this.listaClientes.push(nuevoCliente);
      console.log("Cliente agregado exitosamente.");
    } else {
      console.log(" Ya existe un cliente con este ID.");
    }
  }

  public altaProveedor(nuevoid:number): void {
    const id = nuevoid; // Generdo un ID único por parametro
    const nombre = rsl.question("Ingrese Nombre del Proveedor: ");
    const direccion = rsl.question("Ingrese Dirección del Proveedor: ");
    const telefono = rsl.questionInt("Ingrese Teléfono del Proveedor: ");
    const email = rsl.question("Ingrese Email del Proveedor: ");
    const insumos = rsl.question("Ingrese Insumos que ofrece (separados por comas): ").split(",");
    const nuevoProveedor = new Proveedores(id, nombre, direccion, telefono, email ,insumos);
    if (!this.listaProveedores.some(proveedor => proveedor.getid() === id)) {
      this.listaProveedores.push(nuevoProveedor);
      console.log("Proveedor agregado exitosamente.");
    } else {
      console.log(" Ya existe un proveedor con este ID.");
    }
  }
/********************* Modificaciones *********************** */
  

  public modificarCliente(): void {// :)
    console.log(this.listaClientes); //Seleccion de Cliente a Modificar
    let idCliente: number = rsl.questionInt("Ingrese Id del Cliente a modificar :");
    const clientesFiltrados =this.getlistaClientes().filter(c => c.getid() ===idCliente);
    //filter devuelve elementos que cumplen la condicion
    const cliente = clientesFiltrados.length >0 ? clientesFiltrados[0]:undefined;
    if (!cliente) {
      console.log(" Cliente no encontrado.");
    }else{
        // consulta si es Visita o Si se modificara algun datodel cliente
      let atencion: string = rsl.question("Ingrese SI, para ser Atendido sino ingresara a modificaran datos:");
      if (atencion == "SI") {
        let nuevavista = cliente.getcantVisitas() + 1
        cliente.setcantVisitas(nuevavista);
        console.log("Cantidad de visitas acumuladas: ", cliente.getcantVisitas());
        if (cliente.getcantVisitas() > 4) {
          console.log("El Cliente es VIP, tiene un Descuento del 15% ");
        }
      } else {// seccion para Modificar Datos del Cliente.
        console.log("Del siguiente Cliente solo podra modificar direccion, Telefono o email ");
        let nuevaDireccion: string = rsl.question("Ingrese nueva Direccion :");
        let nuevoTelefono: number = rsl.questionInt("Ingrese nuevo Teleono :");
        let nuevoemail: string = rsl.question("Ingrese nuevo email :");
        cliente.setdireccion(nuevaDireccion);
        cliente.settelefono(nuevoTelefono);
        cliente.setemail(nuevoemail);
        console.log("Nuevo datos del Cliente, ID: ", cliente.getid(), " Nombre :", cliente.getnombre(), " Direccion: ", cliente.getdireccion(), " Telefono: ", cliente.gettelefono(), " email: ", cliente.getemail());
      }
    }
  }

  public modificarProveedor(): void {// :)
    console.log(this.listaProveedores);// Seleccion de Proveedor a Modificar
    let idProveedor: number = rsl.questionInt("Ingrese Id del Proveedor a modificar :");
    const proveedoresFiltrados =this.getlistaProveedores().filter(c => c.getid() ===idProveedor);
    //filter devuelve elementos que cumplen la condicion
    const proveedor = proveedoresFiltrados.length >0 ? proveedoresFiltrados[0]:undefined;
    if (!proveedor) {
      console.log(" Proveedor no encontrado.");
      
    }else{
      console.log("Del siguiente Proveedor solo podra modificar direccion, Telefono o email ");
      let nuevaDireccion: string = rsl.question("Ingrese nueva Direccion :");
      let nuevoTelefono: number = rsl.questionInt("Ingrese nuevo Teleono :");
      let nuevoemail: string = rsl.question("Ingrese nuevo email :");
      proveedor.setdireccion(nuevaDireccion);
      proveedor.settelefono(nuevoTelefono);
      proveedor.setemail(nuevoemail);
      console.log("Nuevo datos del Cliente, ID: ", proveedor.getid(), " Nombre :", proveedor.getnombre(), " Direccion: ", proveedor.getdireccion(), " Telefono: ", proveedor.gettelefono(), " email: ", proveedor.getemail());
    }
  }

  public modificarVeterinaria(veterinaria:Veterinaria): void {// :)
    console.log(veterinaria);// Seleccion de Proveedor a Modificar
      console.log("Del siguiente Veterinaria solo podra modificar nombre, direccion, Telefono o email ");
      let nuevoNombre: string = rsl.question("Ingrese nuevo Nombre :");
      let nuevaDireccion: string = rsl.question("Ingrese nueva Direccion :");
      let nuevoTelefono: number = rsl.questionInt("Ingrese nuevo Teleono :");
      let nuevoemail: string = rsl.question("Ingrese nuevo email :");
      this.setnombre(nuevoNombre);
      this.setdireccion(nuevaDireccion);
      this.settelefono(nuevoTelefono);
      this.setemail(nuevoemail);
      console.log(veterinaria);
      return 
    }
  /***************** Bajas  ********************** */
  public bajaCliente(): void {
    console.log(this.listaClientes); //Seleccion de Cliente a Eliminar
    let idCliente: number = rsl.questionInt("Ingrese Id del Cliente a eliminar :");
    const clientesFiltrados =this.getlistaClientes().filter(c => c.getid() ===idCliente);
    //filter devuelve elementos que cumplen la condicion
    const clienteAEliminar = clientesFiltrados.length >0 ? clientesFiltrados[0]:undefined;
    if(!clienteAEliminar) {
      console.log(" Cliente no encontrado.");
    }else{
      // Seccion para la eliminacion
      let posicionCliente: number = this.listaClientes.indexOf(clienteAEliminar);
      if (posicionCliente !== -1) {
          this.listaClientes.splice(posicionCliente, 1);
          console.log("cliente eliminado exitosamente.");
      }
    }
  }

  public bajaProveedor(): void {
    console.log(this.listaProveedores);  //Seleccionde Proveedor a eliminar
    let idProveedor: number = rsl.questionInt("Ingrese Id del Proveedor a Eliminar :");
    const proveedoresFiltrados =this.getlistaProveedores().filter(c => c.getid() ===idProveedor);
    //filter devuelve elementos que cumplen la condicion
    const proveedorAEliminar = proveedoresFiltrados.length >0 ? proveedoresFiltrados[0]:undefined;
    if (!proveedorAEliminar) {
      console.log(" Proveedor no encontrado.");
    }else{
      // Seccion para la eliminacion
      let posicionProveedor: number = this.listaProveedores.indexOf(proveedorAEliminar);
      if (posicionProveedor !== -1) {
        this.listaProveedores.splice(posicionProveedor, 1);
      }
    }
  }

}
  
