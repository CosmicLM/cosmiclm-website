// HeroAtom component that renders an interactive 3D atom visualization.
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export const HeroAtom = () => {
    //Referencing Mesh to rotate the atom
    const sphereRef = useRef<Mesh>(null);

// Animation loop, so the component may constnatly be in motion when running the website, running at 60fps
//"_state" to indicate that the function useFrame() will only use the second arugment, 'delta'
useFrame((_state, delta ) => {
    if (sphereRef.current) {
        //Rotate constantly and steadily regarless of the frame rate
        //setting this rule to run smoothly on any device, regardless of the performance or hardware.
        sphereRef.current.rotation.y += delta * 0.5;
        sphereRef.current.rotation.x += delta * 0.2;
    }
});

return (
  <mesh ref={sphereRef} scale={2}>
    {/*// Using an Icosahedron (20-sided) instead of a Sphere for a sharper base for the atom visualizer*/}
    <icosahedronGeometry args={[1, 2]}/>
    <meshStandardMaterial color="#00FF88" wireframe />
    </mesh>
    );
};