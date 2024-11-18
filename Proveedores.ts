export class Proveedores {
    private idProveedor: number;
    private nombreProv: string;
    private direccionProv: string;
    private telProv: number;


    constructor(idProveedor: number, nombreProv: string, direccionProv: string, telProv: number) {
        this.idProveedor = idProveedor;
        this.nombreProv = nombreProv;
        this.direccionProv = direccionProv;
        this.telProv = telProv;
    }

    public getIdProveedor(): number {
        return this.idProveedor;
    }

    public getNombreProv(): string {
        return this.nombreProv;
    }

    public getDireccionProv(): string {
        return this.direccionProv;
    }

    public getTelProv(): number {
        return this.telProv;
    }

    public setIdProveedor(idProveedor: number): void {
        this.idProveedor = idProveedor;
    }

    public setNombreProv(nombreProv: string): void {
        this.nombreProv = nombreProv;
    }

    public setDireccionProv(direccionProv: string): void {
        this.direccionProv = direccionProv;
    }

    public setTelProv(telProv: number): void {
        this.telProv = telProv;
    }

    public static altaProveedor(idProveedor: number, nombreProv: string, direccionProv: string, telProv: number): Proveedores {
        return new Proveedores(idProveedor, nombreProv, direccionProv, telProv);
    }

    public static bajaProveedor(proveedor: Proveedores): void {
        // Para conversar 
    }
    
    public modificarProveedor(nombreProv?: string, direccionProv?: string, telProv?: number): void {
        if (nombreProv) this.setNombreProv(nombreProv);
        if (direccionProv) this.setDireccionProv(direccionProv);
        if (telProv) this.setTelProv(telProv);
    }
}
