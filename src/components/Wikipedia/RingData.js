//Traer Anillos
const rings = [];
// import image from '../../assets/Wiki/items/anillos'
// //en este caso se importa desde public ya que este no requiere de un import, trae las imagenes
for (let i = 0; i <= 12; i++) {
  let description = "";
  // Asignar descripción según el ID del anillo
  switch (i) {
    case 0:
      description = "El primer anillo, poderoso y misterioso.";
      break;
    case 1:
      description = "El segundo anillo, otorgado a los valientes.";
      break;
    case 2:
      description = "Un anillo antiguo con runas grabadas.";
      break;
    case 3:
      description = "Este anillo brilla con una luz azulada.";
      break;
    case 4:
      description = "Este anillo brilla con una luz azulada.";
      break;
    case 5:
      description = "Este anillo brilla con una luz azulada.";
      break;
    case 6:
      description = "Este anillo brilla con una luz azulada.";
      break;
    case 7:
      description = "Este anillo brilla con una luz azulada.";
      break;
    case 8:
      description = "Este anillo brilla con una luz azulada.";
      break;
    case 9:
      description = "Este anillo brilla con una luz azulada.";
      break;
    case 10:
      description = "Este anillo brilla con una luz azulada.";
      break;
    case 11:
      description = "Este anillo brilla con una luz azulada.";
      break;
    case 12:
      description = "Este anillo brilla con una luz azulada.";
      break;
    default:
      description = `Este es el anillo número ${i}.`;
  }

  rings.push({
    id: i,
    title: `Anillo ${i}`,
    description: description,
    image: `/web-sherwood/assets/Wikipedia/Items/anillos/${i}.png`, // Import dinámico
    type: 'ring' // <--- AÑADE ESTA LÍNEA
  });
}
console.log(rings); // Esto mostrará todas las rutas generadas en el array
export default rings;
