import { useEffect, useRef } from "react";
import * as THREE from "three";
// @ts-ignore
// Removed OrbitControls import

const ThreeJSBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  console.log("Mount Ref:", mountRef);


  useEffect(() => {
    const mount = mountRef.current;
    console.log("Mount:", mount);
    if (!mount) return;

    console.log("Initializing Three.js scene");
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xa0a0a0);
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 2.5); // 3x closer again for even more zoom
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    // No controls: static camera

    // Many small, randomly colored cubes filling the viewport
    const cubes: THREE.Mesh[] = [];
    // Calculate grid size based on viewport
    const aspect = window.innerWidth / window.innerHeight;
    const gridCols = Math.round(16 * aspect);
    const gridRows = 16;
    const size = 1.5 / gridRows * 2; // size so cubes fill vertically
    const spacing = size * 1.05;
    for (let x = 0; x < gridCols; x++) {
      for (let y = 0; y < gridRows; y++) {
        const geometry = new THREE.BoxGeometry(size, size, size);
        const color = new THREE.Color(Math.random(), Math.random(), Math.random());
        const material = new THREE.MeshStandardMaterial({ color });
        const cube = new THREE.Mesh(geometry, material);
        // Center grid
        cube.position.set(
          (x - (gridCols - 1) / 2) * spacing,
          (y - (gridRows - 1) / 2) * spacing,
          0
        );
        // Start with a slightly random rotation
        cube.rotation.x = Math.random() * Math.PI * 2;
        cube.rotation.y = Math.random() * Math.PI * 2;
        cube.rotation.z = Math.random() * Math.PI * 2;
        scene.add(cube);
        cubes.push(cube);
      }
    }

    console.log(`Created ${cubes.length} cubes`);

    // Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambient);
    const light = new THREE.DirectionalLight(0xffffff, 1.2);
    light.position.set(5, 8, 10);
    scene.add(light);

    // Track mouse position in normalized device coordinates (-1 to 1, but use min dimension for circle)

    let mouse = { x: 0, y: 0, onScreen: true };
    window.addEventListener('mousemove', (event) => {
      // Use true NDC for both axes
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      mouse.onScreen =
        event.clientX >= 0 && event.clientX <= window.innerWidth &&
        event.clientY >= 0 && event.clientY <= window.innerHeight;
    });
    window.addEventListener('mouseleave', () => { mouse.onScreen = false; });
    window.addEventListener('mouseenter', () => { mouse.onScreen = true; });

    let frame = 0;
    const animate = () => {
      cubes.forEach((cube, i) => {
        // Project cube position to screen space (circle normalization)
        const vector = cube.position.clone();
        vector.project(camera);
        // Use min dimension for both axes to get a true circle
        let speed = 0.003; // default slow
        if (mouse.onScreen) {
          const dx = vector.x - mouse.x;
          const dy = vector.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const baseSpeed = 0.003;
          const maxSpeed = 0.08;
          speed = baseSpeed + (1 - Math.min(dist, 1)) * (maxSpeed - baseSpeed);
        }
        cube.rotation.x += speed;
        cube.rotation.y += speed * 0.8;
        // Set all shapes to white
        (cube.material as THREE.MeshStandardMaterial).color.set(0xffffff);
      });
      frame++;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      // No controls to dispose
    };
  }, []);

  return <div ref={mountRef} style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 0 }} />;
};

export default ThreeJSBackground;
