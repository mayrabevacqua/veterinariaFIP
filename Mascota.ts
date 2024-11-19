

export class Mascota {

    private idCliente:number;
    private nombre:string;
    private especie:string;  

    constructor( idCliente:number, nombre:string, especie:string){
        this.idCliente = idCliente;
        this.nombre = nombre;
        this.especie = especie;
    }

    public getidCliente(): number {
        return this.idCliente;
    }

    public setidCliente(idCliente: number) {
        this.idCliente = idCliente;
    }

    public getnombre(): string {
        return this.nombre;
    }

    public setnombre(nombre: string) {
        this.nombre = nombre;
    }

    public getespecie(): string {
        return this.especie;
    }

    public setespecie(especie: string) {
        this.especie = especie;
    }
  

}