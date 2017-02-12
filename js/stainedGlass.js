var scene = new THREE.Scene();

viewLength = 1000;
var canvasWidth = window.innerWidth - 50;
var canvasHeight = window.innerHeight - 50;
aspRat = canvasWidth/canvasHeight;
var camera = new THREE.OrthographicCamera(-aspRat*viewLength/2,
	aspRat*viewLength/2,
	viewLength/2,
	-viewLength/2,
	-1000, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


var windowFrame = new THREE.Shape();

windowFrame.moveTo(25, 25);
windowFrame.lineTo(300, 25);
windowFrame.lineTo(300, 400);
windowFrame.lineTo(25, 400);
windowFrame.lineTo(25, 25);

var hole = new THREE.Path();
hole.absellipse(163, 213, 75, 125, Math.PI/4, Math.PI, false);
windowFrame.holes.push(hole);

var windowFrameGeometry = new THREE.ShapeGeometry(windowFrame);
var windowFramMaterial = new THREE.MeshBasicMaterial({color: 0xff0000});
var windowFrameMesh = new THREE.Mesh(windowFrameGeometry, windowFramMaterial);

scene.add(windowFrameMesh);

function render() {
	requestAnimationFrame( render );
	renderer.render( scene, camera );
}
render();