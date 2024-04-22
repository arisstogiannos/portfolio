import { Canvas } from '@react-three/fiber'
import React from 'react'
import dynamic from "next/dynamic";

const Model = dynamic(() => import('./Model'), {
    ssr: false,
    // loading: () => <div className="bg-red-500">load</div>, // Loading indicator
  });

export default function Scene({scrollYProgress,imagesrc}) {
    return (
        <Canvas>
            <Model scrollProgress={scrollYProgress} imagesrc={imagesrc}/>
        </Canvas>
    )
}