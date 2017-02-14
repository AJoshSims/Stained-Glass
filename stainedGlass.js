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


// Window
var stainedGlassFrame = new THREE.Shape();

stainedGlassFrame.moveTo(-canvasWidth, canvasHeight);
stainedGlassFrame.lineTo(-canvasWidth, -canvasHeight);
stainedGlassFrame.lineTo(canvasWidth, -canvasHeight);
stainedGlassFrame.lineTo(canvasWidth, canvasHeight);
stainedGlassFrame.lineTo(-canvasWidth, canvasHeight);

var hole = new THREE.Path();
hole.moveTo(-canvasWidth + 30, canvasHeight - 30);
hole.lineTo(-canvasWidth + 30, -canvasHeight + 30);
hole.lineTo(canvasWidth - 30, -canvasHeight + 30);
hole.lineTo(canvasWidth - 30, canvasHeight - 30);
hole.lineTo(-canvasWidth + 30, canvasHeight - 30);
stainedGlassFrame.holes.push(hole);

var stainedGlassFrameGeometry = new THREE.ShapeGeometry(stainedGlassFrame);
var stainedGlassFrameMaterial = new THREE.MeshBasicMaterial({color: 0x663300});
var stainedGlassFrameMesh =
	new THREE.Mesh(stainedGlassFrameGeometry, stainedGlassFrameMaterial);

scene.add(stainedGlassFrameMesh);


// Shapes


// Render
renderer.render(scene, camera);