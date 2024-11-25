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

    agregarMascota(mascota:Mascota):void{
      this.mascotas.push(mascota);
    }
    
    public bajaMascota(mascota:Mascota): void {
        this.mascotas.splice (1,1)
    }
    









}