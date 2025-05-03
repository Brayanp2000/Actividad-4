const prompt = require('prompt-sync')();

let facturas = [];
let facturacionTotal = 0;
let litrosArticulo1 = 0;
let facturasMas600 = 0;
 
function agregarFactura(codigo, litros, precio) {
  facturas.push({ codigo, litros, precio });
}

// Solicitar datos de 5 facturas //
for (let i = 0; i < 5; i++) {
  const codigo = parseInt(prompt(`Ingrese código del artículo para factura ${i + 1}: `));
  const litros = parseFloat(prompt(`Ingrese litros vendidos para factura ${i + 1}: `));
  const precio = parseFloat(prompt(`Ingrese precio por litro para factura ${i + 1}: `));
  agregarFactura(codigo, litros, precio);
}

facturas.forEach(factura => {
  const total = factura.litros * factura.precio;
  facturacionTotal += total;
  if (factura.codigo === 1) litrosArticulo1 += factura.litros;
  if (total > 600) facturasMas600++;
});

// Mostrar resultados
console.log(`Facturación total: $${facturacionTotal.toFixed(2)}`);
console.log(`Litros vendidos del artículo 1: ${litrosArticulo1}`);
console.log(`Facturas mayores a $600: ${facturasMas600}`);
