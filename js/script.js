(function() {
  var star = document.getElementById('star-container')
  var width, height, geometry;
  var scene, camera, renderer, particles, material;

  var windowHalfX = window.innerWidth / 2;
  var windowHalfY = window.innerHeight / 2;

  init();
  animate();

  function init() {

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 3000);

    geometry = new THREE.Geometry();

    //Creates 2000000 pixels to fill up the camera
    //With random positions
    for (var i = 0; i < 2000000; i++) {
      var vertex = new THREE.Vector3();
      vertex.x = Math.random() * 2000 - 1000;
      vertex.y = Math.random() * 2000 - 1000;
      vertex.z = -(Math.random() * 1000000 - 1000);
      geometry.vertices.push(vertex);
    }

    //Setting the material of our points to be white
    material = new THREE.PointsMaterial({
      color: 'white'
    });

    particles = new THREE.Points(geometry, material);

    scene.add(particles);

    //Setting up our renderer
    renderer = new THREE.WebGLRenderer({alpha:true});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    star.appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize, false);

  }

  function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function animate() {
    requestAnimationFrame(animate);
    render();
  }

  function render() {
    camera.position.z -= 1;

    renderer.render(scene, camera);
  }

})();
