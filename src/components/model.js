import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = () => {
  const [rotation, setRotation] = useState(0);
  const modelRef = useRef();

  // Load the GLB model
  const { scene } = useGLTF('./images/gg.glb'); // Make sure to adjust the path correctly

  // Handle the scroll event to rotate the model
  useEffect(() => {
    const handleScroll = (e) => {
      // Adjust the sensitivity of scroll
      setRotation(prev => prev + e.deltaY * 0.001);
    };

    window.addEventListener('wheel', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div style={{ height: '100vh', overflow: 'hidden' ,width:'100%'}}>
      <Canvas style={{cursor:"pointer"}}>
        <ambientLight intensity={0.5} />
        <pointLight position={[-10, 10, 10]} intensity={1} />
        <mesh ref={modelRef} rotation={[0, rotation, 0]} position={[0, -10, -40]}>
          <primitive object={scene} />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default Model;
