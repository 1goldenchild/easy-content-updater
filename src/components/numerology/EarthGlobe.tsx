import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const EarthGlobe = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create a sphere geometry with more segments for smoother appearance
    const geometry = new THREE.SphereGeometry(1, 64, 64);
    
    // Create a more sophisticated material with gradient colors
    const material = new THREE.MeshPhongMaterial({
      color: 0x1EAEDB, // Modern blue color
      shininess: 80,
      opacity: 0.9,
      transparent: true,
      wireframe: true,
      wireframeLinewidth: 0.5
    });

    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Add ambient light with a soft blue tint
    const ambientLight = new THREE.AmbientLight(0x33C3F0, 0.4);
    scene.add(ambientLight);

    // Add multiple directional lights for better depth
    const mainLight = new THREE.DirectionalLight(0x0EA5E9, 1);
    mainLight.position.set(5, 3, 5);
    scene.add(mainLight);

    const secondaryLight = new THREE.DirectionalLight(0x0FA0CE, 0.5);
    secondaryLight.position.set(-5, -3, -5);
    scene.add(secondaryLight);

    // Add point light in the center for inner glow
    const pointLight = new THREE.PointLight(0x33C3F0, 0.8);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    // Position camera
    camera.position.z = 2.5;

    // Animation with smooth rotation
    const animate = () => {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.003; // Slower, smoother rotation
      globe.rotation.x += 0.001; // Slight tilt rotation
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={mountRef} className="w-full h-full">
      <div className="absolute inset-0 bg-[#1EAEDB]/5 blur-3xl rounded-full animate-pulse" />
    </div>
  );
};

export default EarthGlobe;