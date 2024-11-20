import { DatosBase } from "./DatoBase";

export class Proveedores extends DatosBase{
    private email: string;
    private insumos: string[]=[];


    constructor(id: number, nombre: string, direccion: string, telefono: number, email:string, insumos:string[]) {
        super(id, nombre, direccion, telefono);
        this.email=email;
        this.insumos=insumos;
    }
    
    
    public getemail() : string {
        return this.email
    }
    
    
    public setemail(email : string) {
        this.email = email;
    }
    

    public getinsumos() : string[] {
        return this.insumos
    }

    public setinsumos(insumos : string[]) {
        this.insumos = insumos;
    }


}