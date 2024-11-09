import { DatosBase } from "./DatoBase";
import { Mascota } from "./Mascota";

export class Cliente extends DatosBase{

    private email:string;
    private mascotas: Mascota[];

    constructor(id:number, nombre:string, direccion:string, telefono:number, email:string, mascotas:Mascota[]){ 
        super(id,nombre,direccion,telefono);
        this.email = email;
        this.mascotas= mascotas;
    }

    public getemail(): string{
           return this.email;
       }
   
       public setemail(email: string) {
           this.email = email;
       }
   
       public getmascotas(): Mascota []{
           return this.mascotas;
       }
   
       public setmascotas(mascotas: Mascota[]) {
           this.mascotas = mascotas;
       }

}