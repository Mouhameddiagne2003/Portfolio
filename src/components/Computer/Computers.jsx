import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import './Computers.css'

import CanvasLoader from "./Loader";

// eslint-disable-next-line react/prop-types
const Computers = ({ isMobile }) => {
    const computer = useGLTF("./desktop_pc/scene.gltf");



    return (
        <mesh>
            {/* eslint-disable-next-line react/no-unknown-property */}
            <hemisphereLight intensity={0.15} groundColor='' />
            {/* eslint-disable-next-line react/no-unknown-property */}
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <pointLight intensity={1} />
            <primitive
                object={computer.scene}
                scale={isMobile ? 2 : 2.5}
                position={isMobile ? [1.2, -2.6, -0.4] : [-0.5, -2.8, -0.5]}
                rotation={[-0.01, 2.5, 0.3]}
            />
        </mesh>
    );
};

const ComputersCanvas = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 900px)");
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <Canvas
            frameloop='demand'
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true, clearColor: '#006DA4' }}
        >
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computers isMobile={isMobile}/>
            </Suspense>

            <Preload all/>
        </Canvas>
    );
};

export default ComputersCanvas;
