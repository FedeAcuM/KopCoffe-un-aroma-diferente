
let Cafe = [
    { nombre: "Ristretto", precio: 3870, cantidad: 250 },
    { nombre: "Americano", precio: 2960, cantidad: 320 },
    { nombre: "Lungo", precio: 1190, cantidad: 400 },
    { nombre: "Macchiato", precio: 4661, cantidad: 380 },
    { nombre: "Latte", precio: 1350, cantidad: 270 }
]

function buscarCafe(nombre) {
    return Cafe.find(cafe => cafe.nombre.toLowerCase() === nombre.toLowerCase());
}

function filtrarPorPrecioMaximo(precioMaximo) {
    return Cafe.filter(cafe => cafe.precio <= precioMaximo);
}

let usuario = {
    nombre: "",
    registrado: false
}

function registrarUsuario() {
    let nombre;
    let regex = /^[a-zA-Z\s]*$/; 

    do {
        nombre = prompt("Bienvenido Sr./Sra.:");
        if (!regex.test(nombre) || nombre.trim() === "") {
            alert("Por favor, ingrese un nombre válido. No se permiten números ni caracteres especiales.");
        }
    } while (!regex.test(nombre) || nombre.trim() === "");

    usuario.nombre = nombre;
    usuario.registrado = true;
    alert("Te damos la bienvenida " + usuario.nombre + ". Gracias por registrarse.");
}

if (!usuario.registrado) {
    registrarUsuario();
}

function obtenerPresupuesto() {
    while (true) {
        const presupuesto = prompt("Ingrese su presupuesto máximo para la compra, mínimo $1200:");

        
        const monto = parseFloat(presupuesto);
        if (!isNaN(monto) && monto >= 1200) {
            alert(`Entendido, su presupuesto es de $${monto}. Por favor, vea nuestro menu`);
            return monto;
        } else {
            alert("Por favor, ingrese un monto válido mayor o igual a 1200.");
        }
    }
}

let presupuestoMaximo = obtenerPresupuesto();

function determinarCafe(opcion) {
    switch (opcion) {
        case 1:
            return "Ristretto";
        case 2:
            return "Americano";
        case 3:
            return "Lungo";
        case 4:
            return "Macchiato";
        case 5:
            return "Latte";
        default:
            alert("Opción inválida. Por favor, seleccione una opción válida.");
            return null;
    }
}

let cafesDisponibles = filtrarPorPrecioMaximo(presupuestoMaximo);
let mensajeCafe = "Cafes disponibles segun su presupuesto $" + presupuestoMaximo + ":\n";

for (let i = 0; i < cafesDisponibles.length; i++) {
    mensajeCafe += "- " + cafesDisponibles[i].nombre + " - Precio: $" + cafesDisponibles[i].precio + " - Cantidad disponible: " + cafesDisponibles[i].cantidad + "\n";
}

alert(mensajeCafe);

let continuar;

do {
    let opcion;
    do {
        opcion = parseInt(prompt("Seleccione un cafe de nuestro menu: \n1. Ristretto \n2. Americano \n3. Lungo \n4. Macchiato \n5. Latte"));
        
        if (isNaN(opcion) || opcion < 1 || opcion > 5) {
            alert("Por favor, ingrese un número válido entre 1 y 5, acorde a los tipos de Cafe");
        }
    } while (isNaN(opcion) || opcion < 1 || opcion > 5);
    
    let cantidad;
    do {
        cantidad = parseInt(prompt("Ingresar cuantos cafes desea comprar:"));
    
        if (isNaN(cantidad) || cantidad <= 0) {
            alert("Por favor, ingrese una cantidad válida y mayor que cero.");
        } else if (cantidad > 10) { 
            let confirmarCantidad = confirm(`La cantidad ingresada es muy alta (${cantidad} unidades). ¿Desea continuar de todas formas?`);
            if (!confirmarCantidad) {
                continue;
            }
        }
    } while (isNaN(cantidad) || cantidad <= 0);

    let cafeElegida = determinarCafe(opcion);

    if (cafeElegida) {
        let cafeEncontrada = buscarCafe(cafeElegida);
        if (cafeEncontrada) {
            if (cantidad <= cafeEncontrada.cantidad) {
                let subtotal = cafeEncontrada.precio * cantidad;
                alert(`Usted selecciono ${cantidad} ${cafeElegida}(s). Subtotal: ${subtotal.toFixed(2)}`);
            } else {
                alert(`Lo sentimos, solo hay ${cafeEncontrada.cantidad} ${cafeElegida}(s) disponibles en stock.`);
            }
        } else {
            alert("El cafe seleccionado no se encuentra disponible.");
        }
    }

    do {
        continuar = prompt("¿Desea agregar algo mas? (Si/No)").toLowerCase();
    } while (continuar !== "si" && continuar !== "no");
} while (continuar === "si");

alert("¡Gracias por su compra, vuelva pronto!");