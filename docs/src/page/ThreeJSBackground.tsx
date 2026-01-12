import { useEffect, useRef } from "react";
import * as THREE from "three";
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer';
// @ts-ignore
// Removed OrbitControls import

const ThreeJSBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);



  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xa0a0a0);
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 2.5); // 3x closer again for even more zoom
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);
    // Add CSS2DRenderer for 2D text labels
    const labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize(window.innerWidth, window.innerHeight);
    labelRenderer.domElement.style.position = 'absolute';
    labelRenderer.domElement.style.top = '0';
    labelRenderer.domElement.style.left = '0';
    labelRenderer.domElement.style.pointerEvents = 'none';
    mount.appendChild(labelRenderer.domElement);

    // No controls: static camera

    // Prism link data
    const linkData = [
      { text: "LinkedIn", link: "https://linkedin.com/in/baptistehiggs/" },
      { text: "GitHub", link: "https://github.com/BaptisteHiggs" },
      { text: "CAADRIA Conference Paper", link: "http://dx.doi.org/10.52842/conf.caadria.2020.2.697" },
      { text: "Journal of Architectural Science Paper", link: "https://doi.org/10.1080/00038628.2020.1748869" },
    ];

    // Grid setup
    const cubes: THREE.Mesh[] = [];
    const prisms: THREE.Mesh[] = [];
    const prismInfos: { mesh: THREE.Mesh, axis: 'x'|'y', length: number }[] = [];
    const aspect = window.innerWidth / window.innerHeight;
    const gridCols = Math.round(16 * aspect);
    const gridRows = 16;
    const size = 1.5 / gridRows * 2;
    const spacing = size * 1.05;
    // Track grid occupancy
    const grid = Array.from({ length: gridCols }, () => Array(gridRows).fill(false));

    // Helper to create a canvas texture with text
    function makeTextTexture(text: string, width: number, height: number) {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d')!;
      ctx.fillStyle = '#0f0c0c';
      ctx.fillRect(0, 0, width, height);
      const fontSize = Math.floor(height * 0.5);
      ctx.font = `bold ${fontSize}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#111';
      ctx.fillText(text, width / 2, height / 2, width * 0.95);
      return new THREE.CanvasTexture(canvas);
    }

    // Place prisms randomly in the grid
    // Place prisms at fixed positions, all horizontal (x axis), less elongated
    // Place prisms left-aligned, stacked from top to bottom
    const prismCol = 3;
    let prismRow = 3;
    linkData.forEach((link, idx) => {
      // Prism length less elongated, text less scrunched
      const minLen = 2, maxLen = Math.floor(gridCols * 0.25);
      const len = Math.max(minLen, Math.min(maxLen, Math.ceil(link.text.length / 6)));
      // Mark grid as occupied
      for (let i = 0; i < len; i++) {
        const cx = prismCol + i;
        const cy = prismRow;
        if (cx < gridCols && cy < gridRows) grid[cx][cy] = true;
      }
      // Prism geometry
      const prismLen = len * spacing;
      const prismGeom = new THREE.BoxGeometry(prismLen, size, size);
      // Textures for all 4 long faces, with emboss effect
      const textTex = makeTextTexture(link.text, 256 * len, 128);
      const glowMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        emissive: 0xffffff,
        emissiveIntensity: 1.5,
        metalness: 0.1,
        roughness: 0.15,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
        transmission: 0.2,
        ior: 1.4,
        thickness: 0.5,
      });
      const textMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        emissive: 0xffffff,
        emissiveIntensity: 1.5,
        metalness: 0.1,
        roughness: 0.15,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
        transmission: 0.2,
        ior: 1.4,
        thickness: 0.5,
        map: textTex,
      });
      const materials = [
        textMaterial, // right
        textMaterial, // left
        textMaterial, // top
        textMaterial, // bottom
        glowMaterial, // front
        glowMaterial, // back
      ];
      const prism = new THREE.Mesh(prismGeom, materials);
      // Left-aligned in grid, stacked vertically
      const px = (prismCol + (len - 1) / 2 - (gridCols - 1) / 2) * spacing;
      const py = (prismRow - (gridRows - 1) / 2) * spacing;
      prism.position.set(px, py, 0);
      // Only rotate around long axis (x)
      prism.rotation.x = Math.random() * Math.PI * 2;
      scene.add(prism);
      prisms.push(prism);
      prismInfos.push({ mesh: prism, axis: 'x', length: len });

      // Add 2D text label above the prism (not as child, so it doesn't rotate)
      const labelDiv = document.createElement('div');
      labelDiv.className = 'prism-label';
      labelDiv.textContent = link.text;
      labelDiv.style.font = 'bold 1.1em sans-serif';
      labelDiv.style.color = '#222';
      labelDiv.style.background = 'rgba(255,255,255,0.85)';
      labelDiv.style.padding = '2px 8px';
      labelDiv.style.borderRadius = '6px';
      labelDiv.style.whiteSpace = 'nowrap';
      labelDiv.style.pointerEvents = 'none';
      labelDiv.style.userSelect = 'none';
      const labelObj = new CSS2DObject(labelDiv);
      // Place label at world position above prism
      labelObj.position.set(px, py + size * 0.18, 0);
      scene.add(labelObj);

      // Next prism, 2 rows apart
      prismRow += 2;
    });

    // Place cubes in remaining grid spots
    for (let x = 0; x < gridCols; x++) {
      for (let y = 0; y < gridRows; y++) {
        if (grid[x][y]) continue;
        const geometry = new THREE.BoxGeometry(size, size, size);
        const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(
          (x - (gridCols - 1) / 2) * spacing,
          (y - (gridRows - 1) / 2) * spacing,
          0
        );
        cube.rotation.x = Math.random() * Math.PI * 2;
        cube.rotation.y = Math.random() * Math.PI * 2;
        cube.rotation.z = Math.random() * Math.PI * 2;
        scene.add(cube);
        cubes.push(cube);
      }
    }

    // On click, reset all cubes so a corner faces outwards, and prisms to 0
    const resetCubesToCorner = () => {
      const cornerAngle = Math.PI / 4;
      cubes.forEach((cube) => {
        cube.rotation.x = cornerAngle;
        cube.rotation.y = cornerAngle;
        cube.rotation.z = cornerAngle;
      });
      prismInfos.forEach(({ mesh, axis }) => {
        if (axis === 'x') {
          mesh.rotation.x = 0;
        } else {
          mesh.rotation.y = 0;
        }
      });
    };
    mount.addEventListener('click', resetCubesToCorner);

    // Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambient);
    const light = new THREE.DirectionalLight(0xffffff, 1.2);
    light.position.set(5, 8, 10);
    scene.add(light);

    // Track mouse position in normalized device coordinates (-1 to 1, but use min dimension for circle)

    let mouse = { x: 0, y: 0, onScreen: true };
    window.addEventListener('mousemove', (event) => {
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
        const vector = cube.position.clone();
        vector.project(camera);
        let speed = 0.003;
        if (mouse.onScreen) {
          const dx = vector.x - mouse.x;
          const dy = vector.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const baseSpeed = 0.003;
          const maxSpeed = 0.04;
          speed = baseSpeed + (1 - Math.min(dist, 1)) * (maxSpeed - baseSpeed);
        }
        cube.rotation.x += speed;
        cube.rotation.y += speed * 0.8;
        (cube.material as THREE.MeshStandardMaterial).color.set(0xffffff);
      });
      // Prisms: only rotate around their long axis
      prismInfos.forEach(({ mesh, axis }) => {
        const vector = mesh.position.clone();
        vector.project(camera);
        let speed = 0.003;
        if (mouse.onScreen) {
          const dx = vector.x - mouse.x;
          const dy = vector.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const baseSpeed = 0.003;
          const maxSpeed = 0.04;
          speed = baseSpeed + (1 - Math.min(dist, 1)) * (maxSpeed - baseSpeed);
        }
        if (axis === 'x') {
          mesh.rotation.x += speed;
        } else {
          mesh.rotation.y += speed;
        }
      });
      frame++;
      renderer.render(scene, camera);
      labelRenderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      labelRenderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mount.removeEventListener('click', resetCubesToCorner);
      mount.removeChild(renderer.domElement);
      mount.removeChild(labelRenderer.domElement);
      renderer.dispose();
      // No controls to dispose
    };
  }, []);

  return <div ref={mountRef} style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 0 }} />;
};

export default ThreeJSBackground;
