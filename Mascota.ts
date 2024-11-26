import * as rsl from "readline-sync";
import { Cliente } from "./Cliente";

export class Mascota {

    protected id:number;
    private nombre:string;
    private especie:string;  

    constructor( id:number, nombre:string, especie:string){
        this.id = id;
        this.nombre = nombre;
        this.especie = especie;
        //this.setespecie(especie);
    }

    public getid(): number {
        return this.id;
    }

    public setid(id: number) {
        this.id = id;
    }

    public getnombre(): string {
        return this.nombre;
    }

    public setnombre(nombre: string) {
        this.nombre = nombre;
        return nombre;
    }

    public getespecie(): string {
        return this.especie;
    }

    public setespecie(especie: string) {
        const especiesValidas = ["Perro", "Gato", "Exotica"];
        while (especiesValidas.indexOf(especie) === -1) {
            especie = rsl.question("Ingrese Especie (Perro, Gato o Exotica) :");
        }
        return especie;
    }

    nuevaMascota(id:number):Mascota {// deberia estar en Veterinaria
        let nombre: string = rsl.question("Ingrese Nombre :");
        let especie: string = rsl.question("Ingrese Especie :");
        let agregarMascota: Mascota = new Mascota( id, this.setnombre(nombre), this.setespecie(especie));
        return agregarMascota;
    }
  
    modificarMascota(): void {// :)
        console.log("De la siguiente Mascota solo podra modificar el Nombre ");
        let nuevaNombre: string = rsl.question("Ingrese nuevo Nombre :");
        this.setnombre(nuevaNombre);
        console.log("Nuevo datos de la Mascota, ID: ",this.getid()," Nombre :",this.getnombre()," Especie: ",this.getespecie());
        console.log("Mascota agregada exitosamente");9
        
        
    }
       
   
    
}