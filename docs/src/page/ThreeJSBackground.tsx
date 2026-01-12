import { useEffect, useRef } from "react";
import * as THREE from "three";
import { CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer";
import { Font, FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

const ThreeJSBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    /* ======================
       Scene setup
    ====================== */
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xa0a0a0);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 2.5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMappingExposure = 1.2;
    mount.appendChild(renderer.domElement);

    const labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize(window.innerWidth, window.innerHeight);
    labelRenderer.domElement.style.position = "absolute";
    labelRenderer.domElement.style.top = "0";
    labelRenderer.domElement.style.left = "0";
    labelRenderer.domElement.style.pointerEvents = "none";
    mount.appendChild(labelRenderer.domElement);

    /* ======================
       Raycasting
    ====================== */
    const raycaster = new THREE.Raycaster();
    const mouseNDC = new THREE.Vector2();
    let hoveredText: THREE.Mesh | null = null;

    /* ======================
       Data
    ====================== */
    const linkData = [
      { text: "LinkedIn", link: "https://linkedin.com/in/baptistehiggs/" },
      { text: "GitHub", link: "https://github.com/BaptisteHiggs" },
      { text: "CAADRIA Conference Paper", link: "http://dx.doi.org/10.52842/conf.caadria.2020.2.697" },
      { text: "Journal of Architectural Science Paper", link: "https://doi.org/10.1080/00038628.2020.1748869" },
    ];

    /* ======================
       Grid setup
    ====================== */
    const cubes: THREE.Mesh[] = [];
    const texts: THREE.Mesh[] = [];
    const textInfos: { mesh: THREE.Mesh; axis: "x" | "y" }[] = [];

    const aspect = window.innerWidth / window.innerHeight;
    const gridCols = Math.round(16 * aspect);
    const gridRows = 16;
    const size = (1.5 / gridRows) * 2;
    const spacing = size * 1.05;

    /* ======================
       Font loading
    ====================== */
    const fontLoader = new FontLoader();
    let loadedFont: Font;

    fontLoader.load(
      "https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",
      (font) => {
        loadedFont = font;
        create3DText();
      }
    );

    /* ======================
       Create 3D text
    ====================== */
    const create3DText = () => {
      const col = 3;
      let row = 3;

      linkData.forEach((item) => {
        const textSize = size * 0.75;
        const depth = size * 0.25;

        const geometry = new TextGeometry(item.text, {
          font: loadedFont,
          size: textSize,
          depth: depth,
          curveSegments: 8,
          bevelEnabled: true,
          bevelThickness: depth * 0.4,
          bevelSize: depth * 0.2,
          bevelSegments: 4,
        });

        geometry.center();

        const material = new THREE.MeshPhysicalMaterial({
          color: 0xeaeaea,
          emissive: 0xffffff,
          emissiveIntensity: 1.5,
          metalness: 0.15,
          roughness: 0.2,
          clearcoat: 1,
        });

        const mesh = new THREE.Mesh(geometry, material);

        const px = (col - (gridCols - 1) / 2) * spacing;
        const py = (row - (gridRows - 1) / 2) * spacing;

        mesh.position.set(px, py, 0);
        mesh.rotation.x = Math.random() * Math.PI * 2;

        scene.add(mesh);
        texts.push(mesh);
        textInfos.push({ mesh, axis: "x" });

        row += 2;
      });
    };

    /* ======================
       Cubes
    ====================== */
    for (let x = 0; x < gridCols; x++) {
      for (let y = 0; y < gridRows; y++) {
        const geometry = new THREE.BoxGeometry(size, size, size);
        const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
        const cube = new THREE.Mesh(geometry, material);

        cube.position.set(
          (x - (gridCols - 1) / 2) * spacing,
          (y - (gridRows - 1) / 2) * spacing,
          0
        );

        cube.rotation.set(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        );

        scene.add(cube);
        cubes.push(cube);
      }
    }

    /* ======================
       Lighting
    ====================== */
    scene.add(new THREE.AmbientLight(0xffffff, 0.7));

    const dir = new THREE.DirectionalLight(0xffffff, 1.2);
    dir.position.set(5, 8, 10);
    scene.add(dir);

    /* ======================
       Mouse
    ====================== */
    const mouse = { x: 0, y: 0, onScreen: true };

    window.addEventListener("mousemove", (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseNDC.set(mouse.x, mouse.y);
      mouse.onScreen = true;
    });

    window.addEventListener("mouseleave", () => {
      mouse.onScreen = false;
    });

    /* ======================
       Animation
    ====================== */
    const animate = () => {
      cubes.forEach((cube) => {
        cube.rotation.x += 0.003;
        cube.rotation.y += 0.002;
      });

      textInfos.forEach(({ mesh, axis }) => {
        let speed = 0.003;
        if (mouse.onScreen) {
          const v = mesh.position.clone().project(camera);
          const d = Math.hypot(v.x - mouse.x, v.y - mouse.y);
          speed += (1 - Math.min(d, 1)) * 0.04;
        }
        mesh.rotation[axis] += speed;
      });

      /* Hover */
      raycaster.setFromCamera(mouseNDC, camera);
      const hits = raycaster.intersectObjects(texts);

      if (hits.length) {
        const hit = hits[0].object as THREE.Mesh;

        if (hoveredText !== hit) {
          if (hoveredText) {
            const m = hoveredText.material as THREE.MeshPhysicalMaterial;
            m.emissive.set(0xffffff);
            m.emissiveIntensity = 1.5;
          }

          hoveredText = hit;
          const m = hit.material as THREE.MeshPhysicalMaterial;
          m.emissive.set(0x4fa3ff);
          m.emissiveIntensity = 2.5;
        }

        document.body.style.cursor = "pointer";
      } else {
        if (hoveredText) {
          const m = hoveredText.material as THREE.MeshPhysicalMaterial;
          m.emissive.set(0xffffff);
          m.emissiveIntensity = 1.5;
          hoveredText = null;
        }
        document.body.style.cursor = "default";
      }

      renderer.render(scene, camera);
      labelRenderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    /* ======================
       Resize
    ====================== */
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      labelRenderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      mount.removeChild(renderer.domElement);
      mount.removeChild(labelRenderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
      }}
    />
  );
};

export default ThreeJSBackground;
