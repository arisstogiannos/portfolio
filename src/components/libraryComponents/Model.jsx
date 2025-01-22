import React, { useEffect, useRef, useState } from "react";
import { fragment, vertex } from "./Shader";
import { useFrame, useThree } from "@react-three/fiber";
import { useTexture, useAspect } from "@react-three/drei";
import * as THREE from "three";

export default function Model({ scrollProgress, imagesrc,setLoaded }) {
  const image = useRef();
  const [img,setImg] = useState( imagesrc)
  var texture = useTexture(`/libraryImages/${img}`);
  const { width, height } = texture.image;
  const scale = useAspect(width, height, 0.3);

  const amplitude = 0.2;
  const waveLength = 4;
  
  useEffect(() => {
    setImg(imagesrc)
  }, [imagesrc]);
  
  const uniforms = useRef({
    uTime: { value: 0 },
    uAmplitude: { value: 0.2 },
    uWaveLength: { value: 4 },
    uTexture: { value: texture },
    vUvScale: { value: new THREE.Vector2(0, 0) },
  });
  const [amplitudeState, setAmplitudeState] = useState(uniforms.current.uAmplitude.value);

  useEffect(() => {
    
    setLoaded(amplitudeState==0.2)
  }, [amplitudeState]);

  useFrame(() => {
    // scale image based on progress of the scroll
    const scaleX = scale[0] * 2.9;
    const scaleY = scale[1] * 2.9;
    image.current.scale.x = scaleX;
    image.current.scale.y = scaleY;

    //Adjust texture to new scale
    const scaleRatio = scaleX / scaleY;
    const aspectRatio = width / height;
    //scale texture inside shader
    image.current.material.uniforms.vUvScale.value.set(
      1,
      aspectRatio / scaleRatio
    );

 

    image.current.material.uniforms.uTime.value += 0.02;
    image.current.material.uniforms.uAmplitude.value = amplitude;
    image.current.material.uniforms.uWaveLength.value = waveLength;
    setAmplitudeState(image.current.material.uniforms.uAmplitude.value);

  });

  return (
    <mesh  ref={image} scale={scale}>
      <planeGeometry args={[1, 1, 15, 15]} />
      <shaderMaterial
        wireframe={false}
        fragmentShader={fragment}
        vertexShader={vertex}
        uniforms={uniforms.current}
      />
    </mesh>
  );
}
