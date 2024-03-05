let precioCortado = 1500;
let precioCapuchino = 2200;
let precioMoca = 1750;
let totalP = 0;
let continuarComprando = true;

alert("KopCoffe, un aroma diferente. ¿Que vas a llevar hoy?.");

while (continuarComprando) {
    const productoElegido = prompt("Ingrese el número del producto que desea comprar:\n1. Cortado ($1500)\n2. Capuchino ($2200)\n3. Moca ($1750)\n\nSi desea finalizar la compra, por favor ingrese 0:");

    switch (productoElegido) {
        case "1":
            totalP += precioCortado;
            alert("Excelente, usted ha agregado un cortado.");
            break;
        case "2":
            totalP += precioCapuchino;
            alert("Excelente, usted ha agregado un capuchino.");
            break;
        case "3":
            totalP += precioMoca;
            alert("Excelente, usted ha agregado un moca.");
            break;
        case "0":
            continuarComprando = false;
            break;
        default:
            alert("Opción inválida. Por favor, elija un número válido o escriba '0' para finalizar la compra.");
    }
}

if (totalP > 0) {
    alert(`Su compra es de $${totalP}. No tengas un buen día, ten un gran día!`);
}









