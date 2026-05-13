class Contrato extends Empleado {
    constructor(cc, nombre, direccion, email, telefono, sueldoBase, tipoEmpleado, tipoBonificacion, tiempoEmpleado) {
        super(cc, nombre, direccion, email, telefono, sueldoBase, tipoEmpleado, tipoBonificacion);
        this.tiempoEmpleado = tiempoEmpleado;
    }
}