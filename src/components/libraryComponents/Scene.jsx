import { Canvas } from '@react-three/fiber'
import React from 'react'
import Model from './Model'

export default function Scene({scrollYProgress,imagesrc}) {
    return (
        <Canvas>
            <Model scrollProgress={scrollYProgress} imagesrc={imagesrc}/>
        </Canvas>
    )
}