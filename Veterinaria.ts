import { DatosBase } from "./FinalFIP/DatoBase";
import { Cliente } from "./FinalFIP/Cliente";
import { Proveedor } from "./FinalFIP/Proveedor";
//import * as rsl from "readline-sync";


export class Veterinaria extends DatosBase{
       
  private email:string;
  private listaCLientes:Cliente[]=[];
  private listaProveedores:Proveedor[]=[];


      constructor (id:number,nombre:string,direccion:string,telefono:number,email:string){
        super(id,nombre,direccion,telefono)
        this.email=email;
      }


      public getemail(): string {
                 return this.email;
             }
        
      public setemail(email: string) {
                 this.email = email;
             }

            public altaCliente(nuevoCliente:Cliente):void{
                  // let nuevoCliente= new Cliente(id,nombre,direccion,telefono,email) 
                if (!this.listaCLientes.some(Cliente=>Cliente===nuevoCliente)){
                  this.listaCLientes.push(nuevoCliente);
                } else {
                  console.log(" El cliente ya existe");
                }
              }
            
                
                public altaProveedor(nuevoProveedor:Proveedor):void{  
                  // let nuevoProvedor= new Provedor(id,nombre,direccion,telefono,email) 
                if (!this.listaProveedores.some(Proveedor=>Proveedor===nuevoProveedor)){
                  this.listaProveedores.push(nuevoProveedor);
              } else {
                console.log( "El proveedor ya existe");
                
              }
            }
                
              
    public bajaCliente (clienteAEliminar:Cliente): void{
      if (clienteAEliminar != undefined && this.listaCLientes.includes(clienteAEliminar)){
        let posicionCliente:number =this.listaCLientes.indexOf(clienteAEliminar);
        this.listaCLientes.splice(posicionCliente,1)
      }

    }

  
    public bajaProvedor (ProveedorAEliminar:Proveedor): void{
      if (ProveedorAEliminar != undefined && this.listaProveedores.includes(ProveedorAEliminar)){
        let posicionProveedor:number =this.listaProveedores.indexOf(ProveedorAEliminar);
        this.listaProveedores.splice(posicionProveedor,1)
      }

    }




public modificarCliente(nuevosDatos:Cliente): void {
   let cliente= this.listaCLientes.find(cliente=> cliente === cliente);
    Object.assign(cliente, nuevosDatos);
    console.log(`Cliente ${cliente.nombre} modificado correctamente.`);
}



public modificarProveedor(nuevosDatos:Proveedor): void {
  let proveedor= this.listaProveedores.find(prov=> prov === proveedor);
   Object.assign(proveedor, nuevosDatos);
   console.log(`Proveedor ${proveedor.nombre} modificado correctamente.`);
}




}



