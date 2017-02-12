var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


// var windowFrame = new THREE.Shape();
//
// windowFrame.moveTo(25, 25);
// windowFrame.lineTo(300, 25);
// windowFrame.lineTo(300, 400);
// windowFrame.lineTo(25, 400);
// windowFrame.lineTo(25, 25);
//
// var hole = new THREE.Path();
// hole.absellipse(163, 213, 75, 125, Math.PI/4, Math.PI, false);
// windowFrame.holes.push(hole);
//
// var windowFrameGeometry = new THREE.ShapeGeometry(windowFrame);
// var windowFramMaterial = new THREE.MeshBasicMaterial({color: 0xff0000});
// var windowFrameMesh = new THREE.Mesh(windowFrameGeometry, windowFramMaterial);
//
// scene.add(windowFrameMesh);


var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );


camera.position.z = 10;

function render() {
	requestAnimationFrame( render );
	renderer.render( scene, camera );
}
render();