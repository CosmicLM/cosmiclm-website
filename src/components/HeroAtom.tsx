// HeroAtom component that renders an interactive 3D atom visualization.
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

// This is an exported constant component that uses React Three Fiber to create and animate 
// a 3D sphere mesh representing an atom. It's exported to allow it to be imported and used 
// in other parts of the application, such as in page layouts or other component compositions.

export const HeroAtom = () => {
    //Referencing Mesh to rotate the atom
    const sphereRef = useRef<Mesh>(null);

// Animation loop, so the component may constnatly be in motion when running the website, running at 60fps
//"_state" to indicate that the function useFrame() will only use the second arugment, 'delta'
useFrame((_state, delta ) => {
    if (sphereRef.current) {
        //Rotate constantly and steadily regarless of the frame rate
        sphereRef.current.rotation.y += delta * 0.5;
        sphereRef.current.rotation.x += delta * 0.2;
    }
});

return (
  <mesh ref={sphereRef} scale={2}>
    {/* Implementing the geometric sphere */}
    <icosahedronGeometry args={[1, 1]}/>
    {/* imposing specific theme to sphere*/}
    <meshStandardMaterial color="#00FF88" wireframe />
    </mesh>
    );
};