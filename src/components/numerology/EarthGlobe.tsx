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
    
    renderer.setSize(400, 400);
    mountRef.current.appendChild(renderer.domElement);

    // Earth setup with higher detail
    const geometry = new THREE.SphereGeometry(2, 64, 64);
    const textureLoader = new THREE.TextureLoader();
    
    // Create atmosphere glow effect
    const atmosphereGeometry = new THREE.SphereGeometry(2.1, 64, 64);
    const atmosphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x00ff99,
      transparent: true,
      opacity: 0.2,
      side: THREE.BackSide,
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);

    // Matrix-style Earth material
    const material = new THREE.MeshPhongMaterial({
      map: textureLoader.load('/earth-texture.jpg'),
      bumpScale: 0.15,
      specular: new THREE.Color(0x00ff99),
      shininess: 25,
      emissive: new THREE.Color(0x002211),
      emissiveIntensity: 0.3,
      transparent: true,
      opacity: 0.95
    });

    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    // Matrix-style lighting setup
    const ambientLight = new THREE.AmbientLight(0x001100, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x00ff99, 2.5);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    const rimLight = new THREE.DirectionalLight(0x00ffaa, 1.5);
    rimLight.position.set(-5, 0, 0);
    scene.add(rimLight);

    // Digital rain effect
    const rainGeometry = new THREE.BufferGeometry();
    const rainCount = 1000;
    const positions = new Float32Array(rainCount * 3);
    const velocities = new Float32Array(rainCount);

    for (let i = 0; i < rainCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      velocities[i] = 0.1 + Math.random() * 0.1;
    }

    rainGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const rainMaterial = new THREE.PointsMaterial({
      color: 0x00ff99,
      size: 0.05,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });

    const rain = new THREE.Points(rainGeometry, rainMaterial);
    scene.add(rain);

    camera.position.z = 5;

    // Time tracking for smooth rotation
    const clock = new THREE.Clock();
    let time = 0;

    // Animation loop with enhanced rotation
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Update time
      time += clock.getDelta();

      // Rotate Earth with varying speed and some wobble
      earth.rotation.y += 0.005; // Increased base rotation speed
      earth.rotation.x = Math.sin(time * 0.5) * 0.1; // Add slight wobble
      
      // Match atmosphere rotation
      atmosphere.rotation.y = earth.rotation.y;
      atmosphere.rotation.x = earth.rotation.x;

      // Animate digital rain
      const positions = rain.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < rainCount; i++) {
        positions[i * 3 + 1] -= velocities[i];
        if (positions[i * 3 + 1] < -10) {
          positions[i * 3 + 1] = 10;
        }
      }
      rain.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const width = 400;
      const height = 400;
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

  return (
    <div ref={mountRef} className="w-[400px] h-[400px] mx-auto relative">
      <div className="absolute inset-0 bg-[#00ff99]/5 blur-3xl rounded-full animate-pulse" />
    </div>
  );
};

export default EarthGlobe;