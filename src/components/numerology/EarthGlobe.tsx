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

    // Load textures with absolute paths and error handling
    const textureLoader = new THREE.TextureLoader();
    const loadTexture = (url: string) => {
      return new Promise<THREE.Texture>((resolve, reject) => {
        textureLoader.load(
          url,
          (texture) => {
            console.log(`Successfully loaded texture: ${url}`);
            resolve(texture);
          },
          undefined,
          (error) => {
            console.error(`Failed to load texture ${url}:`, error);
            reject(error);
          }
        );
      });
    };

    // Load all textures concurrently
    Promise.all([
      loadTexture('/earth-map.jpg'),
      loadTexture('/earth-bump.jpg'),
      loadTexture('/earth-specular.jpg'),
      loadTexture('/earth-clouds.png')
    ]).then(([earthMap, bumpMap, specularMap, cloudsMap]) => {
      // Create star background
      const starGeometry = new THREE.BufferGeometry();
      const starMaterial = new THREE.PointsMaterial({
        color: 0xFFFFFF,
        size: 0.05,
        transparent: true
      });

      const starVertices = [];
      for (let i = 0; i < 10000; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = -Math.random() * 2000;
        starVertices.push(x, y, z);
      }

      starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
      const stars = new THREE.Points(starGeometry, starMaterial);
      scene.add(stars);

      // Create Earth with proper material settings
      const earthGeometry = new THREE.SphereGeometry(1, 64, 64);
      const earthMaterial = new THREE.MeshPhongMaterial({
        map: earthMap,
        bumpMap: bumpMap,
        bumpScale: 0.05,
        specularMap: specularMap,
        specular: new THREE.Color('grey'),
        shininess: 5
      });

      const earth = new THREE.Mesh(earthGeometry, earthMaterial);
      scene.add(earth);

      // Create cloud layer
      const cloudGeometry = new THREE.SphereGeometry(1.02, 64, 64);
      const cloudMaterial = new THREE.MeshPhongMaterial({
        map: cloudsMap,
        transparent: true,
        opacity: 0.4
      });

      const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
      scene.add(clouds);

      // Lighting setup for realistic appearance
      const ambientLight = new THREE.AmbientLight(0x555555);
      scene.add(ambientLight);

      const sunLight = new THREE.DirectionalLight(0xffffff, 1);
      sunLight.position.set(5, 3, 5);
      scene.add(sunLight);

      // Add subtle blue atmosphere glow
      const atmosphereGeometry = new THREE.SphereGeometry(1.1, 64, 64);
      const atmosphereMaterial = new THREE.MeshPhongMaterial({
        color: 0x0077ff,
        transparent: true,
        opacity: 0.1,
        side: THREE.BackSide
      });

      const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
      scene.add(atmosphere);

      // Position camera
      camera.position.z = 2.5;

      // Animation
      const animate = () => {
        requestAnimationFrame(animate);
        earth.rotation.y += 0.001;
        clouds.rotation.y += 0.0012;
        stars.rotation.y -= 0.0001;
        renderer.render(scene, camera);
      };

      animate();
    }).catch(error => {
      console.error('Failed to load one or more textures:', error);
    });

    // Handle cleanup
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={mountRef} className="w-full h-full relative">
      <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full animate-pulse" />
    </div>
  );
};

export default EarthGlobe;