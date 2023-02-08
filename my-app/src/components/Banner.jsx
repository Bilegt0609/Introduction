
import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { Model } from './Model'
export const Banner = () => {
    const ref = useRef()
    return (
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
            <Suspense fallback={null}>
                <ambientLight />
                <Model  position={[0, -1, 0]}/>
            </Suspense>
      <OrbitControls ref={ref} autoRotate />
    </Canvas>
    );
}
export default Banner;