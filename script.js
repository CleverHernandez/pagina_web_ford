const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth * 0.8, 500);
document.getElementById('viewer').appendChild(renderer.domElement);

// Luz
const light = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(2, 2, 2);
scene.add(light);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Crear un material para el video
const video = document.createElement('video');
video.src = 'video.mp4'; // Asegúrate de que el video esté en el directorio correcto
video.load();
video.play();
video.loop = true;  // Reproducir en bucle
video.muted = false;  // Puedes ponerlo en mute si lo prefieres

const texture = new THREE.VideoTexture(video);
const material = new THREE.MeshBasicMaterial({ map: texture });

// Crear un plano para aplicar la textura del video
const geometry = new THREE.PlaneGeometry(16, 9); // Tamaño del plano
const plane = new THREE.Mesh(geometry, material);
scene.add(plane);

// Ajustar la posición del plano
plane.position.z = -5;  // Mover el plano hacia atrás

// Cámara
camera.position.z = 10;

// Animación
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
