export interface IMovements{
    descripcion: string;
    fecha:string;
    log_movimiento_id:string;
    usuario_id:string | any;
    [key:string]:any
}