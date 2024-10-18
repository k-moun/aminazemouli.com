import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";


// Setup

const scene = new THREE.Scene();
// scene.background = new THREE.Color(0x3D85C6);

const camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight,1, 1000 );

camera.position.set(0,200,100)
// camera.lookAt( 50, 50,50 );



document.addEventListener("DOMContentLoaded", () => {
  // Hover effect on the name in the navbar
  const nameElement = document.querySelector(".logo a"); // The specific selector for your name
  nameElement.addEventListener("mouseenter", () => {
    nameElement.innerText = "Craft & Code"; // Change text on hover
  });

  nameElement.addEventListener("mouseleave", () => {
    nameElement.innerText = "Amina Zemouli"; // Revert to original text
  });

})


