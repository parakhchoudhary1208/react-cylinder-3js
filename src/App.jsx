import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import Scene from "./Scene";
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing';

function App() {
    return (
        <Canvas camera={{fov: 35}}>
            <OrbitControls/>
            <ambientLight/>
            <Scene/>
            <EffectComposer>
                <Bloom
                    mipmapBlur
                    intensity={12.0} // The bloom intensity.
                    luminanceThreshold={0.36} // luminance threshold. Raise this value to mask out darker elements in the scene.
                    luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
                />
            </EffectComposer>
        </Canvas>
    )
}

export default App
