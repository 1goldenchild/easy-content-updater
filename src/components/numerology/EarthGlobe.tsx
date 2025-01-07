import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const EarthGlobe = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(300, 300);
    mountRef.current.appendChild(renderer.domElement);

    // Earth setup
    const geometry = new THREE.SphereGeometry(2, 32, 32);
    const textureLoader = new THREE.TextureLoader();
    
    // Load earth texture with enhanced brightness
    const material = new THREE.MeshPhongMaterial({
      map: textureLoader.load('/earth-blue-marble.jpg'),
      bumpMap: textureLoader.load('/earth-topology.jpg'),
      bumpScale: 0.15,
      specularMap: textureLoader.load('/earth-specular.jpg'),
      specular: new THREE.Color('white'),
      shininess: 25
    });

    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    // Enhanced lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6); // Increased ambient light
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x4499ff, 2.5); // Brighter blue-tinted light
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Add a secondary light source for better illumination
    const secondaryLight = new THREE.DirectionalLight(0xffffff, 1.5);
    secondaryLight.position.set(-5, -3, -5);
    scene.add(secondaryLight);

    camera.position.z = 5;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      earth.rotation.y += 0.005;
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