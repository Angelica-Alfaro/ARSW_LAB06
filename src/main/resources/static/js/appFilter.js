const productos = [
  { id: "p0", nombre: "camiseta", precio: 500 },
  { id: "p2", nombre: "zapatos", precio: 2000 },
  { id: "p3", nombre: "buzo", precio: 1500 },
];

const productosConDescuentoSin = productos.map(function (producto) {
  //validaciones
  if (producto.precio < 1000) return producto;

  return {
    ...producto,
    precio: producto.precio * 0.9,
  };
});
