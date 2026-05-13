class Empleado {

    constructor(
        cc,
        nombre,
        direccion,
        email,
        telefono,
        sueldoBase,
        tipoEmpleado,
        tipoBonificacion
    ) {

        this.cc = cc;
        this.nombre = nombre;
        this.direccion = direccion;
        this.email = email;
        this.telefono = telefono;

        this.sueldoBase = parseFloat(sueldoBase);

        this.tipoEmpleado = tipoEmpleado;

        this.tipoBonificacion = tipoBonificacion;

        this.adicion = this.calcularBonificacion();

        this.sueldoTotal =
            this.sueldoBase + this.adicion;
    }

    calcularBonificacion() {

        switch(this.tipoBonificacion) {

            case "A":
                return 200000;

            case "B":
                return 150000;

            case "C":
                return 100000;

            case "D":
                return 50000;

            default:
                return 0;
        }
    }
}