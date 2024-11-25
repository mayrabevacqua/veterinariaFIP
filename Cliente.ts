import { DatosBase } from "./DatoBase";
import { Mascota } from "./Mascota";
import * as rsl from "readline-sync";

export class Cliente extends DatosBase {
    private email: string;
    private cantVisitas: number;
    private mascotas: Mascota[]=[];


    constructor(id: number, nombre: string, direccion: string, telefono: number, email: string, cantVisitas: number, mascotas:Mascota[]) {
        super(id, nombre, direccion, telefono);
        this.email = email;
        this.cantVisitas = cantVisitas;
        this.mascotas = mascotas;
    }

    public getemail(): string {
        return this.email;
    }

    public setemail(email: string) {
        this.email = email;
    }


    public getcantVisitas(): number {
        return this.cantVisitas;
    }

    public setcantVisitas(cantVisitas: number) {
        this.cantVisitas = cantVisitas;
    }

    nuevoElemento(id):Cliente {// deberia estar en Veterinaria
        let nombre: string = rsl.question("Ingrese Nombre :");
        let direccion: string = rsl.question("Ingrese Direccion :");
        let telefono: number = parseFloat(rsl.question("Ingrese Telefono :"));
        let email: string = rsl.question("Ingrese Direccion email :");
        let agregarCliente: Cliente = new Cliente( id, nombre, direccion, telefono, email,1,[]);
        return agregarCliente;
    }

    modificarCliente(): void {// :)
        let atencion: string = rsl.question("Ingrese SI, para ser Atendido sino se modificaran datos:");
        if (atencion=="SI"){
                let nuevavista=this.getcantVisitas()+1
                this.setcantVisitas(nuevavista);
                console.log("Cantidad de visitas acumuladas: ",this.getcantVisitas());
                if(this.getcantVisitas()>4){
                    console.log("El Cliente es VIP, tiene un Descuento del 15% ");
                }
        } else{       
            console.log("Del siguiente Cliente solo podra modificar direccion, Telefono o email ");
            let nuevaDireccion: string = rsl.question("Ingrese nueva Direccion :");
            let nuevoTelefono: number = rsl.questionInt("Ingrese nuevo Teleono :");
            let nuevoemail: string = rsl.question("Ingrese nuevo email :");
            this.setdireccion(nuevaDireccion);
            this.settelefono(nuevoTelefono);
            this.setemail(nuevoemail);
            console.log("Nuevo datos del Cliente, ID: ",this.getid()," Nombre :",this.getnombre()," Direccion: ",this.getdireccion()," Telefono: ",this.gettelefono()," email: ",this.getemail());
        }
    }

    agregarMascota(mascota:Mascota):void{
      this.mascotas.push(mascota);
    }
    
    
}
