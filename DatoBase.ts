
export abstract class DatosBase {
    private id: number;
    private nombre: string;
    protected direccion: string;
    protected telefono: number;

    constructor(id: number, nombre: string, direccion: string, telefono: number) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
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
    }

    public getdireccion(): string {
        return this.direccion;
    }

    public setdireccion(direccion: string) {
        this.direccion = direccion;
    }

    public gettelefono(): number {
        return this.telefono;
    }

    public settelefono(telefono: number) {
        this.telefono = telefono;
    }

    

}
