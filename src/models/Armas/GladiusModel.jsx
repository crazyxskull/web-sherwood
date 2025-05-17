// src/components/models/GladiusModel.jsx

import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// --- Asegúrate que esta es la ruta correcta al nuevo modelo ---
const modelPath = '/web-sherwood/models/Gladius.glb'; // O '/models/SkeletonSW.glb'

export function GladiusModel(props) {
  // Obtenemos 'scene', que es la única forma fiable de acceder
  // a toda la estructura en TU caso, según tus logs.
  const { nodes, scene } = useGLTF(modelPath);

  useEffect(() => {
    // Logs actualizados para claridad
    console.log('SkeletonModel: Claves encontradas en `nodes`:', Object.keys(nodes));
    console.log('SkeletonModel: Renderizando la `scene` completa con primitive:', scene);
  }, [nodes, scene]);

  // --- USA ESTA OPCIÓN ---
  // Renderiza la escena completa tal como se cargó del GLB.
  // Incluirá el Empty "Gladius" y todos sus hijos (`Hoja`, `Guarda`, etc.)
  // Usará los materiales definidos en Blender.
  return (
      // Puedes aplicar scale, position, rotation directamente aquí
      <primitive object={scene} {...props} dispose={null} />
  );
}

useGLTF.preload(modelPath);
export default GladiusModel;