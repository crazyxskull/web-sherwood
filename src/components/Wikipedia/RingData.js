// Traer Anillos
const rings = [];

// Itera para crear cada objeto de anillo
for (let i = 0; i <= 12; i++) {
  let title = "";       // Variable para almacenar el título específico
  let description = ""; // Variable para almacenar la descripción específica

  // Asignar título y descripción según el ID del anillo
  switch (i) {
    case 0:
      title = "Ring of Health / Ring of Safekeeping";
      description = "Aumenta la salud máxima o proporciona un escudo protector.";
      break;
    case 1:
      title = "Ring of Hardiness";
      description = "Incrementa la resistencia general del portador.";
      break;
    case 2:
      title = "Ring of Constitution";
      description = "Mejora la vitalidad y la resistencia a dolencias.";
      break;
    case 3:
      title = "Ring of Armor / Ring of Fortification";
      description = "Otorga una bonificación a la armadura física.";
      break;
    case 4:
      title = "Ring of Warding / Ring of Resistance";
      description = "Proporciona resistencia contra ataques mágicos.";
      break;
    case 5:
      title = "Ring of Defense / Ring of Protection";
      description = "Mejora la capacidad de bloqueo o desvío de ataques.";
      break;
    case 6:
      title = "Ring of Preservation / Ring of Imperviousness";
      description = "Ayuda a mantener el estado actual, resistiendo efectos negativos.";
      break;
    case 7:
      title = "Ring of Victory / Ring of Supremacy";
      description = "Incrementa las posibilidades de éxito en combate.";
      break;
    case 8:
      title = "Ring of Eminence / Ring of Dominion";
      description = "Otorga una presencia imponente o mejora habilidades de liderazgo.";
      break;
    case 9:
      title = "Ring of Mastery / Ring of Conquest";
      description = "Mejora la habilidad con armas o hechizos.";
      break;
    case 10:
      title = "Ring of Ascendancy / Ring of Triumph";
      description = "Simboliza un gran logro o poder.";
      break;
    case 11:
      title = "Ring of Dominance / Ring of Adventure";
      description = "Representa el control y la audacia en la exploración.";
      break;
    case 12:
      title = "Ring of Unnatural Health";
      description = "Proporciona una cantidad de salud excepcionalmente alta.";
      break;
    default:
      // Fallback por si acaso el índice no está en el rango esperado
      title = `Anillo Desconocido ${i}`;
      description = `Información no disponible para el anillo ${i}.`;
  }

  // Añade el objeto del anillo al array 'rings'
  rings.push({
    id: i,
    title: title, // Usa el título asignado en el switch
    description: description, // Usa la descripción asignada en el switch
    image: `/web-sherwood/assets/Wikipedia/Items/anillos/${i}.png`, // Asegúrate que esta ruta sea correcta desde tu carpeta 'public'
    type: 'ring'
  });
}

console.log(rings); // Verifica que los títulos y descripciones se hayan asignado correctamente
export default rings;