import { OrbitControls } from 'https://cdn.jsdelivr.net/gh/mrdoob/three.js/examples/jsm/controls/OrbitControls.js';

window.addEventListener('load', () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.append(renderer.domElement);

  new OrbitControls(camera, renderer.domElement);

  const shape = new THREE.Shape();
  shape.moveTo(-(290 / 2), -(104 / 2));
  shape.lineTo(290 / 2, -(104 / 2));
  shape.lineTo(290 / 2, 104 / 2);
  shape.lineTo(-(290 / 2), 104 / 2);

  const geometry = new THREE.ExtrudeGeometry(shape, { amount: 10, bevelEnabled: false });
  const material = new THREE.MeshPhongMaterial({ color: 0xffffff, emissive: 0x777777 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 300;

  const spotLight = new THREE.SpotLight(0xffffff);
  spotLight.position.set(-0, 30, 60);
  scene.add(spotLight);

  function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.02;
    cube.rotation.z += 0.03;
    camera.lookAt(cube.position);
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  animate();
});
