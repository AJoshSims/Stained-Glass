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

windowFrame.moveTo(-canvasWidth, canvasHeight);
windowFrame.lineTo(-canvasWidth, -canvasHeight);
windowFrame.lineTo(canvasWidth, -canvasHeight);
windowFrame.lineTo(canvasWidth, canvasHeight);
windowFrame.lineTo(-canvasWidth, canvasHeight);

var hole = new THREE.Path();
hole.moveTo(-canvasWidth + 130, canvasHeight - 80);
hole.lineTo(-canvasWidth + 130, -canvasHeight + 80);
hole.lineTo(canvasWidth - 130, -canvasHeight + 80);
hole.lineTo(canvasWidth - 130, canvasHeight - 80);
hole.lineTo(-canvasWidth + 130, canvasHeight - 80);
windowFrame.holes.push(hole);

var windowFrameGeometry = new THREE.ShapeGeometry(windowFrame);
var windowFramMaterial = new THREE.MeshBasicMaterial({color: 0x663300});
var windowFrameMesh = new THREE.Mesh(windowFrameGeometry, windowFramMaterial);

scene.add(windowFrameMesh);

function render() {
	requestAnimationFrame( render );
	renderer.render( scene, camera );
}
render();