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
    
    renderer.setSize(300, 300);
    mountRef.current.appendChild(renderer.domElement);

    // Earth setup with higher detail
    const geometry = new THREE.SphereGeometry(2, 64, 64);
    const textureLoader = new THREE.TextureLoader();
    
    // Create atmosphere glow effect
    const atmosphereGeometry = new THREE.SphereGeometry(2.2, 64, 64);
    const atmosphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x0066ff,
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide,
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);

    // Enhanced Earth material with Matrix-style look
    const material = new THREE.MeshPhongMaterial({
      map: textureLoader.load('/earth-texture.jpg'),
      bumpScale: 0.1,
      specular: new THREE.Color(0x2d4ea3),
      shininess: 15,
      emissive: new THREE.Color(0x112244),
      emissiveIntensity: 0.2
    });

    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    // Matrix-style lighting setup
    const ambientLight = new THREE.AmbientLight(0x222244, 1);
    scene.add(ambientLight);

    // Main directional light (sun-like)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Blue rim light for atmosphere effect
    const rimLight = new THREE.DirectionalLight(0x0066ff, 1.5);
    rimLight.position.set(-5, 0, 0);
    scene.add(rimLight);

    // Soft fill light from below
    const fillLight = new THREE.DirectionalLight(0x0044aa, 0.5);
    fillLight.position.set(0, -5, 0);
    scene.add(fillLight);

    camera.position.z = 5;

    // Smooth rotation animation
    const animate = () => {
      requestAnimationFrame(animate);
      earth.rotation.y += 0.001; // Slower rotation
      atmosphere.rotation.y += 0.001; // Match Earth rotation
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const width = 300;
      const height = 300;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-[300px] h-[300px] mx-auto" />;
};

export default EarthGlobe;