var rendu, scene, camera, sphereFx, oeil, contour_oeil
var container = document.getElementById('scene-container')
var size_screen = []
var rectangle_droit = []
var rectangle_gauche = []
let LINE_COUNT = 200;
let geometry = new THREE.BufferGeometry();
geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(6*LINE_COUNT), 3));
geometry.setAttribute("velocity", new THREE.BufferAttribute(new Float32Array(2*LINE_COUNT), 1));
let position = geometry.getAttribute("position");
let pa = position.array;
let vel = geometry.getAttribute("velocity");
let va = vel.array;
init();
animate();

function init(){
  // Initialisation du moteur graphic
  rendu = new THREE.WebGLRenderer({alpha:true})
  rendu.setSize(window.innerWidth, window.innerHeight)
  container.appendChild(rendu.domElement)
  // Resize Screen
  window.addEventListener('resize', function(){
    var width = window.innerWidth
    var height = window.innerHeight
    rendu.setSize(width, height)
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    size_screen = []
    size_screen.push(width,height)
  })
  size_screen.push(window.innerWidth, window.innerHeight)

  // Création de la Scène et de la Camérarro
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight,1,10000)
  camera.position.set(0,0,1000)
  //Ajout de la caméra dans la scène
  scene.add(camera)

  // Création de l'oeil
    //Initialisation de la Sphère Fx
    var color_sphere = new THREE.Color('rgb(23, 23, 102)')
    var geometry_sphere = new THREE.SphereGeometry(200,32,32)
    var material_sphere = new THREE.MeshBasicMaterial({
      color: color_sphere,
      wireframe: true
    })
    sphereFx = new THREE.Mesh(geometry_sphere, material_sphere)
    // Ajout de la Sphère Fx
    scene.add(sphereFx)

    //Initialisation Oeil
    var texture_oeil = new THREE.TextureLoader().load('js/img/eyetexture2.jpg')
    var geometry_oeil = new THREE.SphereGeometry(200,32,32)
    var material_oeil = new THREE.MeshPhongMaterial({
      map: texture_oeil
    })
    oeil = new THREE.Mesh(geometry_oeil, material_oeil)
    // oeil.rotation.x = 600
    // oeil.rotation.y = 900
    //Ajout de l'oeil
    scene.add(oeil)

    //Iniatialisation Contour oeil
    var contour_oeil2, contour_oeil3
    var color_contour = new THREE.Color('rgb(2,2,7)')
    var color_contour2 = new THREE.Color('black')
    var geometry_contour = new THREE.CircleGeometry(250, 32)
    var geometry_contour2 = new THREE.CircleGeometry(210, 32)
    var geometry_contour3 = new THREE.CircleGeometry(190, 32)
    var material_contour = new THREE.MeshBasicMaterial({
      color: color_contour,
      opacity: 0.5
    })
    var material_contour2 = new THREE.MeshBasicMaterial({
      color: color_contour2,
      opacity: 1
    })
    var material_contour3 = new THREE.MeshBasicMaterial({
      color: color_contour2,
      opacity: 0.5
    })
    contour_oeil = new THREE.Mesh(geometry_contour, material_contour)
    contour_oeil2 = new THREE.Mesh(geometry_contour2, material_contour2)
    contour_oeil3 = new THREE.Mesh(geometry_contour3, material_contour3)
    contour_oeil2.position.set(0,0,30)
    contour_oeil3.position.set(0,0,120)
    //Ajout du contour de l'Oeil
    scene.add(contour_oeil)
    scene.add(contour_oeil2)
    scene.add(contour_oeil3)

    // Initialisation Lumière
    var lightcolor = new THREE.Color('white')
    var lumiere = new THREE.DirectionalLight(lightcolor, 1.0)
    lumiere.position.set(0,0,400)
    scene.add(lumiere)
    var lightincolor = new THREE.Color('blue')
    var light = new THREE.AmbientLight( lightincolor ); // soft white light
    scene.add( light );

    // Mouvement de l'Oeil
    document.addEventListener('mousemove', onMouseMove, false)
    function onMouseMove(event){
      var posx = event.clientX - size_screen[0]/2
      var posy = event.clientY - size_screen[1]/2
      oeil.rotation.y = posx / 1000
      oeil.rotation.x = posy / 500
    }

    // Initialisation  des rectangles
    var texture_rectangle = new THREE.TextureLoader().load('js/img/rectangle.png')
    var color_rectangle = new THREE.Color('skyblue')
    var geometry_rectangle = new THREE.CubeGeometry(50,10,10)
    var material_rectangle = new THREE.MeshPhongMaterial({
      map: texture_rectangle,
    })
    for (var i = 0; i < 5; i++) {
      var posx = i*100
      var posy = i*150
      rectangle_droit[i] = new THREE.Mesh(geometry_rectangle, material_rectangle)
      // rectangle.position.set(1000,0,200)
      rectangle_droit[i].position.z = -300 + posy
      rectangle_droit[i].position.y = -400 + posy
      rectangle_droit[i].position.x = 100 + posx
      scene.add(rectangle_droit[i])
  }
    for (var i = 5; i < 10; i++) {
      var posx = i*100
      var posy = i*150
      rectangle_droit[i] = new THREE.Mesh(geometry_rectangle, material_rectangle)
      // rectangle.position.set(1000,0,200)
      rectangle_droit[i].position.z = 1100 - posy
      rectangle_droit[i].position.y = -950 + posy
      rectangle_droit[i].position.x = 150 + posx
      scene.add(rectangle_droit[i])
    }
    for (var i = 0; i < 5; i++) {
      var posx = i*100
      var posy = i*150
      rectangle_gauche[i] = new THREE.Mesh(geometry_rectangle, material_rectangle)
      // rectangle.position.set(1000,0,200)
      rectangle_gauche[i].position.z = -300 + posy
      rectangle_gauche[i].position.y = -400 + posy
      rectangle_gauche[i].position.x = -1000 + posx
      scene.add(rectangle_gauche[i])
  }
    for (var i = 5; i < 10; i++) {
      var posx = i*100
      var posy = i*150
      rectangle_gauche[i] = new THREE.Mesh(geometry_rectangle, material_rectangle)
      // rectangle.position.set(1000,0,200)
      rectangle_gauche[i].position.z = 1100 - posy
      rectangle_gauche[i].position.y = -950 + posy
      rectangle_gauche[i].position.x = -1250 + posx
      scene.add(rectangle_gauche[i])
    }
    // Directionnal Line
    for (let line_index= 0; line_index < LINE_COUNT; line_index++) {
        var x = Math.random() * 400 - 200;
        var y = Math.random() * 200 - 100;
        var z = Math.random() * 500 - 100;
        var xx = x;
        var yy = y;
        var zz = z;
        //line start
        pa[6*line_index] = x;
        pa[6*line_index+1] = y;
        pa[6*line_index+2] = z;
        //line end
        pa[6*line_index+3] = xx;
        pa[6*line_index+4] = yy;
        pa[6*line_index+5] = zz;

        va[2*line_index] = va[2*line_index+1]= 0;
    }
    //debugger;
    let material = new THREE.LineBasicMaterial({color: 0x4b6cb7});
    let lines = new THREE.LineSegments(geometry, material);
    scene.add(lines);
    //Initalisation Triangle
    // var geom = new THREE.Geometry();
    // var v1 = new THREE.Vector3(0,0,0);
    // var v2 = new THREE.Vector3(250,0,0);
    // var v3 = new THREE.Vector3(250,250,0);
    //
    // geom.vertices.push(v1);
    // geom.vertices.push(v2);
    // geom.vertices.push(v3);
    //
    // geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
    // geom.computeFaceNormals();
    //
    // var triangle = new THREE.Mesh( geom, new THREE.MeshNormalMaterial() );
    // triangle.position.set(200,200,200)
    // scene.add(triangle)

}

function animate(){
  for (let line_index= 0; line_index < LINE_COUNT; line_index++) {
      va[2*line_index] += 0.003; //bump up the velocity by the acceleration amount
      va[2*line_index+1] += 0.005;

      //pa[6*line_index]++;                       //x Start
      //pa[6*line_index+1]++;                     //y
      pa[6*line_index+2] += va[2*line_index];     //z
      //pa[6*line_index+3]++;                     //x End
      //pa[6*line_index+4]                        //y
      pa[6*line_index+5] += va[2*line_index+1];   //z

      if(pa[6*line_index+5] > 1200) {
          var z= Math.random() * 200 - 100;
          pa[6*line_index+2] = z;
          pa[6*line_index+5] = z;
          va[2*line_index] = 0;
          va[2*line_index+1] = 0;
      }
  }
  position.needsUpdate = true;
  //Lancement des Animations
  requestAnimationFrame(animate)
  sphereFx.rotation.x += 0.01;
  sphereFx.rotation.y += 0.02;
  for (var i = 0; i < 10; i++) {

    rectangle_droit[i].rotation.x += 0.02;
    rectangle_droit[i].position.x -= 1;
    if (rectangle_droit[i].position.x < -1000) {
      rectangle_droit[i].position.x = 1000
    }
  }
  for (var i = 0; i < 10; i++) {

    rectangle_gauche[i].rotation.x += 0.02;
    rectangle_gauche[i].position.x += 1;
    if (rectangle_gauche[i].position.x > 1000) {
      rectangle_gauche[i].position.x = -1000
    }
  }

  //Affichage du rendu
  rendu.render(scene, camera)
}
