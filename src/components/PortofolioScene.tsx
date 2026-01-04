import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { HeroAtom } from './HeroAtom';

export const PortofolioScene = () => {
    return (
        //Positioning the camera 5 units back to visualize the atom entirely, instead of watching it from the inside
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            {/*Implementing Ambient light for less drastic shadows, 
            and a point of light to create highlights and depth on the wire frame*/}
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />

            {/*Implementing Atom base*/}
            <HeroAtom />
            <OrbitControls enableZoom={false} />
        </Canvas>
    )
}