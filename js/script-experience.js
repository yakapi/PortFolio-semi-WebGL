(function() {
  var camera, scene, renderer;
  var cylinder;
  var texture;
  var normal_speed = 0.0008;
  var hyperspeed = 53;
  var hyperspeed_mode = false;
  var hyperspeed_upratio = 1.03;
  var hyperspeed_downratio = 1.3;
  var current_speed = normal_speed;

  var hyperspeed_upscale = 1.03;
  var hyperspeed_downscale = 1.3;
  var current_scale = 1;

  let container = document.getElementById('scene-container')

  init();
  animate();

  function init() {

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );

    // Our Javascript will go here.
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 0.1, 10000 );
    camera.position.set(0,0,7);
    camera.lookAt(scene.position);
    scene.add(camera);

    var light	= new THREE.DirectionalLight( 0xff8000, 0.5 );
    light.position.set( 1, 1, 0 ).normalize();
    scene.add( light );

    var light	= new THREE.DirectionalLight( 0xff8000, 0.5 );
    light.position.set( -1, 1, 0 ).normalize();
    scene.add( light );

    var light	= new THREE.PointLight( 0x44FFAA, 10, 25 );
    light.position.set( 0, -3, 0 );
    scene.add( light );

    var light	= new THREE.PointLight( 0xff4400, 15, 30 );
    light.position.set( 3, 3, 0 );
    scene.add( light );

    scene.fog	= new THREE.FogExp2( 0x000000, 0.15 );
    THREE.TextureLoader.prototype.crossOrigin = '';
'';
    texture = new THREE.TextureLoader().load( "https://threejs.org/examples/textures/water.jpg" );
    texture.wrapT = THREE.RepeatWrapping;
    texture.wrapS = THREE.RepeatWrapping;

    var material = new THREE.MeshLambertMaterial( {color: 0xffffff, opacity: 1, map: texture } );
    var cylinder_geometry = new THREE.CylinderGeometry( 1, 1, 30, 32, 1, true );

    cylinder = new THREE.Mesh( cylinder_geometry, material );
    material.side = THREE.BackSide;
    cylinder.rotation.x = Math.PI/2;
    scene.add( cylinder );

//				document.addEventListener( 'keydown', onKeyDown, false );
    // document.addEventListener( 'mousedown', onClick, false );
    // document.addEventListener( 'touchstart', onClick, false );
    // document.addEventListener( 'mouseup', onRelease, false );
    // document.addEventListener( 'touchend', onRelease, false );
    window.addEventListener( 'resize', onWindowResize, false );
  }

  function onKeyDown ( event ) {
    console.log("keydown");
  }

  function onClick ( event ) {
    console.log("click");
    hyperspeed_mode = true;
    console.log(cylinder);
  }

  function onRelease ( event ) {
    console.log("release");
    hyperspeed_mode = false;
  }

  function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
  }

  function animate() {

    requestAnimationFrame( animate );
    render();

  }

  function render () {
    if (hyperspeed_mode) {
      current_speed = current_speed >= hyperspeed ? hyperspeed : current_speed * hyperspeed_upratio;
      current_scale = current_scale <= 0.2 ? 0.2 : current_scale / hyperspeed_upscale;
    } else {
      current_speed = current_speed <= 1 ? 1 : current_speed / hyperspeed_downratio;
      current_scale = current_scale >= 1 ? 1 : current_scale * hyperspeed_downscale;
    }
    cylinder.scale.set(current_scale,1,current_scale);
    texture.offset.y	-= normal_speed * current_speed;
    texture.offset.y	%= 1;
    texture.needsUpdate	= true;

    // move the camera back and forth
    var seconds		= Date.now() / 1000;
    var radius		= 0.70;
    var angle			= 0.2 * seconds;
    //angle	= (seconds*Math.PI)/4;
//				camera.position.x	= Math.cos(angle - Math.PI/2) * radius;
//				camera.position.y	= Math.sin(angle - Math.PI/2) * radius;
    camera.rotation.z	= angle;

    renderer.render( scene, camera );

  }

})();
