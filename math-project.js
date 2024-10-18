import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";


// Setup

const scene = new THREE.Scene();
// scene.background = new THREE.Color(0x3D85C6);

const camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight,1, 1000 );

camera.position.set(0,200,100)
// camera.lookAt( 50, 50,50 );

// const gridHelper = new THREE.GridHelper(100,100);
// scene.add(gridHelper);

const canvas = document.querySelector('#three-canvas');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize( canvas.clientWidth, canvas.clientHeight );
renderer.shadowMap.enabled = true;


const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Smooth camera motion
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false; 
// Lights 

const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.5);
directionalLight.position.z = 20; 
directionalLight.position.y = 30; 

scene.add(directionalLight);

// Geometry

const cos = Math.cos;
const sin = Math.sin;
const pi = Math.PI;

// Cube creation function, similar to the one in your Rhino script
function createCube(x, y, z, h) {
  const geometry = new THREE.BoxGeometry(h, h, h);
  const material = new THREE.MeshStandardMaterial({ 
    color: 0xFFFFFC,
    emissive: 0x666666,      // Emissive color (dark gray)
    metalness: 0,          // Semi-metallic appearance
    roughness: 0.5 });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.set(x, y, z);
  // cube.castShadow = true; // Enable shadow casting for the cube
  scene.add(cube);
}

function run() {
  for (let i = 0; i <= 2 * Math.PI; i += Math.PI / 50) {
      for (let t = 0; t <= 3 * Math.PI; t += Math.PI / 50) {
          const x = 10 * Math.cos(t) + 20 * Math.cos(i);
          const z = 10 * Math.sin(t) + 20 * Math.sin(i);
          const y = 15 * t;
          const h = 5;
          createCube(x, y, z, h);
      }
  }
}


function run_02() {
  for (let i = 0; i <= 2 * Math.PI; i += Math.PI / 20) {
      for (let t = 0; t <= 4 * Math.PI; t += Math.PI / 30) {
          const x = 10 * Math.cos(i) + 5 * Math.cos(2*t) - 100;
          const z = 10 * Math.sin(i) + 7 * Math.sin(t) ;
          const y = 15 * t;
          const h = 5;
          createCube(x, y, z, h);
      }
  }
  for (let i = 0; i <= 2 * Math.PI; i += Math.PI / 20) {
    for (let t = 0; t <= 4 * Math.PI; t += Math.PI / 30) {
        const x = 10 * Math.sin(i) + 10 * Math.cos(-t) - 100;
        const z = 10 * Math.cos(i) + 10 * Math.sin(-t) ;
        const y = 15 * t;
        const h = 5;
        createCube(x, y, z, h);
    }
}
}

function run_03() {
  for ( let n = 0; n <=360; n += 180){
    for (let i = 0; i <= 2 * Math.PI; i += Math.PI / 20) {
      for (let t = 0; t <= 4 * Math.PI; t += Math.PI / 30) {
          const x = 10 * Math.sin(i) + 10 * Math.cos(2*t +n) ;
          const z = 10 * Math.cos(i) + 10 * Math.sin(t+n) - 100;
          const y = 10 * t;
          const h = 3;
          createCube(x, y, z, h);
      }
  }
  }


}

run();
run_02();
run_03();

// Animation loop to render the scene
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();



