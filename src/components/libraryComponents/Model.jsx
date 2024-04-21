import React, { useRef } from 'react'
import { fragment, vertex } from './Shader';
import { useControls } from 'leva'

import { useFrame, useThree } from '@react-three/fiber';
import { useTexture, useAspect } from '@react-three/drei'
import * as THREE from 'three';
import { transform } from "framer-motion"

export default function Model({scrollProgress,imagesrc}) {

    const image = useRef();
    const texture = useTexture(`/libraryImages/${imagesrc}`);
    const { width, height } = texture.image;
    const { viewport } = useThree();
    const scale = useAspect(
        width,
        height,
        0.3
    )

        const amplitude = 0.2; 
        const waveLength =4;

    const uniforms = useRef({
        uTime: { value: 0 },
        uAmplitude: { value: 0.2 },
        uWaveLength: { value: 4 },
        uTexture: { value: texture },
        vUvScale: { value: new THREE.Vector2(0, 0) },
    })

    useFrame( () => {
        // scale image based on progress of the scroll
        const scaleX = scale[0]*2.9
        const scaleY = scale[1]*2.9
        image.current.scale.x = scaleX;
        image.current.scale.y = scaleY;

        //Adjust texture to new scale
        const scaleRatio = scaleX / scaleY;
        const aspectRatio = width / height
        //scale texture inside shader
       image.current.material.uniforms.vUvScale.value.set(1, aspectRatio / scaleRatio)

        //animate wave based on progress of the scroll
        const modifiedAmplitude = transform(scrollProgress.get(), [0, 1], [amplitude, 0])

        image.current.material.uniforms.uTime.value += 0.04;
        image.current.material.uniforms.uAmplitude.value = amplitude;
        image.current.material.uniforms.uWaveLength.value = waveLength;
    })

    return (
        <mesh ref={image} scale={scale}>
            <planeGeometry args={[1, 1, 15, 15]}/>
            <shaderMaterial
                wireframe={false} 
                fragmentShader={fragment}
                vertexShader={vertex}
                uniforms={uniforms.current}
            />
        </mesh>
    )
}