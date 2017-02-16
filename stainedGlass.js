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
// Center rectangle
var rectangleCenter = new THREE.Shape();

rectangleCenter.moveTo(-150, 30);
rectangleCenter.lineTo(-150, -30);
rectangleCenter.lineTo(150, -30);
rectangleCenter.lineTo(150, 30);
rectangleCenter.lineTo(-150, 30);

var rectangleCenterGeometry = new THREE.ShapeGeometry(rectangleCenter);
var rectangleCenterMaterial = new THREE.MeshBasicMaterial({color: 0xbb0000});
var rectangleCenterMesh =
	new THREE.Mesh(rectangleCenterGeometry, rectangleCenterMaterial);

scene.add(rectangleCenterMesh);

// North pointy triangle
var trianglePointyNorth = new THREE.Shape();

trianglePointyNorth.moveTo(0, 200);
trianglePointyNorth.lineTo(25, 50);
trianglePointyNorth.lineTo(-25, 50);
trianglePointyNorth.lineTo(0, 200);

var trianglePointyNorthGeometry = new THREE.ShapeGeometry(trianglePointyNorth);
var trianglePointyNorthMaterial =
	new THREE.MeshBasicMaterial({color: 0xaaf000});
var trianglePointyNorthMesh =
	new THREE.Mesh(trianglePointyNorthGeometry, trianglePointyNorthMaterial);

scene.add(trianglePointyNorthMesh);

// West pointy triangle
var trianglePointyWest = new THREE.Shape();

trianglePointyWest.moveTo(-320, 0);
trianglePointyWest.lineTo(-170, -25);
trianglePointyWest.lineTo(-170, 25);
trianglePointyWest.lineTo(-320, 0);

var trianglePointyWestGeometry = new THREE.ShapeGeometry(trianglePointyWest);
var trianglePointyWestMaterial =
	new THREE.MeshBasicMaterial({color: 0xaaf000});
var trianglePointyWestMesh =
	new THREE.Mesh(trianglePointyWestGeometry, trianglePointyWestMaterial);

scene.add(trianglePointyWestMesh);

// South pointy triangle
var trianglePointySouth = new THREE.Shape();

trianglePointySouth.moveTo(0, -200);
trianglePointySouth.lineTo(-25, -50);
trianglePointySouth.lineTo(25, -50);
trianglePointySouth.lineTo(0, -200);

var trianglePointySouthGeometry = new THREE.ShapeGeometry(trianglePointySouth);
var trianglePointySouthMaterial =
	new THREE.MeshBasicMaterial({color: 0xaaf000});
var trianglePointySouthMesh =
	new THREE.Mesh(trianglePointySouthGeometry, trianglePointySouthMaterial);

scene.add(trianglePointySouthMesh);

// East pointy triangle
var trianglePointyEast = new THREE.Shape();

trianglePointyEast.moveTo(320, 0);
trianglePointyEast.lineTo(170, 25);
trianglePointyEast.lineTo(170, -25);
trianglePointyEast.lineTo(320, 0);

var trianglePointyEastGeometry = new THREE.ShapeGeometry(trianglePointyEast);
var trianglePointyEastMaterial =
	new THREE.MeshBasicMaterial({color: 0xaaf000});
var trianglePointyEastMesh =
	new THREE.Mesh(trianglePointyEastGeometry, trianglePointyEastMaterial);

scene.add(trianglePointyEastMesh);

// Northwest horn
// TODO 


// Render
renderer.render(scene, camera);