import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const EarthGlobe = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup with a darker background
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    
    renderer.setSize(300, 300);
    mountRef.current.appendChild(renderer.domElement);

    // Earth setup
    const geometry = new THREE.SphereGeometry(2, 64, 64); // Increased segments for smoother sphere
    const textureLoader = new THREE.TextureLoader();
    
    // Create atmosphere glow effect
    const atmosphereGeometry = new THREE.SphereGeometry(2.1, 64, 64);
    const atmosphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x0099ff,
      transparent: true,
      opacity: 0.2,
      side: THREE.BackSide,
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);
    
    // Enhanced Earth material with better colors
    const material = new THREE.MeshPhongMaterial({
      map: textureLoader.load('/earth-texture.jpg'),
      bumpScale: 0.1,
      specular: new THREE.Color(0x2d4ea3), // Blue-tinted specular highlights
      shininess: 15,
      emissive: new THREE.Color(0x112244), // Slight self-illumination
      emissiveIntensity: 0.1
    });

    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    // Enhanced lighting for Matrix-style look
    const ambientLight = new THREE.AmbientLight(0x333333, 1);
    scene.add(ambientLight);

    // Main directional light (sun-like)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Rim light for atmosphere effect
    const rimLight = new THREE.DirectionalLight(0x0099ff, 1);
    rimLight.position.set(-5, 0, 0);
    scene.add(rimLight);

    // Soft fill light
    const fillLight = new THREE.DirectionalLight(0x0044aa, 0.5);
    fillLight.position.set(0, -5, 0);
    scene.add(fillLight);

    camera.position.z = 5;

    // Smooth rotation animation
    const animate = () => {
      requestAnimationFrame(animate);
      earth.rotation.y += 0.002;
      atmosphere.rotation.y += 0.002;
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