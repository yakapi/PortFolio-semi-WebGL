var rendu, scene, camera, sphere , cube, cubix, spherix;
var container = document.getElementById('scene-container')

init();
animate();

function init(){
  rendu = new THREE.WebGLRenderer({alpha:true})
  rendu.setSize(window.innerWidth, window.innerHeight)
  container.appendChild(rendu.domElement)

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight,1,10000)
  camera.position.set(0,0,1000);
  scene.add(camera)

  var color_sphere = new THREE.Color('skyblue')
  var geometry_sphere = new THREE.SphereGeometry( 200, 32, 32)
  var material_sphere = new THREE.MeshBasicMaterial( {
    color: color_sphere,
    wireframe:true
  } )
  sphere = new THREE.Mesh(geometry_sphere, material_sphere)
  sphere.position.set(500,0,0)
  scene.add(sphere)

  var color_cube = new THREE.Color('purple');
  var geometry_cube = new THREE.CubeGeometry(200,200,200);
  var material_cube = new THREE.MeshBasicMaterial({
    color: color_cube,
    wireframe: true
  })
  cube = new THREE.Mesh(geometry_cube, material_cube)
  cube.position.set(-500,200,100)
  scene.add(cube)

  var color_cubix = new THREE.Color('green')
  var texture_cubix = new THREE.TextureLoader().load('js/img/gold.jpg')
  var geometry_cubix = new THREE.CubeGeometry(200,200,200)
  var material_cubix = new THREE.MeshBasicMaterial({
    map: texture_cubix,
    // color: color_cubix,
    // wireframe: true
  })
  cubix = new THREE.Mesh(geometry_cubix, material_cubix)
  cubix.position.set(-200,-200,0)
  scene.add(cubix)

  var geometry_spherix = new THREE.SphereGeometry(100, 32, 32)
  spherix = new THREE.Mesh(geometry_spherix, material_cubix)
  spherix.position.set(200,200,0)
  scene.add(spherix)

  // camera.position.z = 100
  // camera.lookAt(particule)
}

function animate(){
  requestAnimationFrame(animate)
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.02;
  cubix.rotation.x += 0.01;
  cubix.rotation.y += 0.02;
  cubix.rotation.z += 0.04;
  spherix.rotation.x += 0.01;
  spherix.rotation.y += 0.02;
  spherix.rotation.z += 0.04;
  rendu.render(scene, camera)
}
