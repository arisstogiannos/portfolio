// WebGLBackground.js
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const WebGLBackground = () => {
  const canvasRef = useRef(null); // Reference to the canvas container

  useEffect(() => {
    // Scene and Renderer Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Append the renderer to the DOM
    if (canvasRef.current) {
      canvasRef.current.appendChild(renderer.domElement);
    }

    // Shader Material
    const shaderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0.0 },
        uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec2 uResolution;
        varying vec2 vUv;

        void main() {
          // Normalized coordinates
          vec2 st = gl_FragCoord.xy / uResolution;
          vec2 pos = st - vec2(0.5);
          float angle = atan(pos.y, pos.x);
          float radius = length(pos);

          // Create a dynamic blue gradient effect
          float gradient = sin(angle * 4.0 + uTime) * 0.5 + 0.5;
          float opacity = smoothstep(0.0, 0.5, radius) * 0.6;

          vec3 color = mix(vec3(0.8, 0, 0), vec3(0.8, 0, 0), gradient);
          gl_FragColor = vec4(color, opacity);
        }
      `,
      transparent: true,
    });

    // Full-screen plane
    const geometry = new THREE.PlaneGeometry(2, 2);
    const plane = new THREE.Mesh(geometry, shaderMaterial);
    scene.add(plane);

    camera.position.z = 1;

    // Resize handler
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      shaderMaterial.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    const animate = () => {
      shaderMaterial.uniforms.uTime.value += 0.01;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Cleanup resources on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      geometry.dispose();
      shaderMaterial.dispose();
    };
  }, []);

  return <div ref={canvasRef} style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }} />;
};

export default WebGLBackground;