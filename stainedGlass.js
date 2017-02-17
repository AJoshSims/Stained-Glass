var scene = new THREE.Scene();

viewLength = 1000;
var canvasWidth = window.innerWidth - 50;
var canvasHeight = window.innerHeight - 50;
aspRat = canvasWidth/canvasHeight;

var camera = new THREE.OrthographicCamera(
	-aspRat*viewLength/2,
	aspRat*viewLength/2,
	viewLength/2,
	-viewLength/2,
	-1000, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );


// Stained glass frame
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
var stainedGlassFrameMesh = new THREE.Mesh(
	stainedGlassFrameGeometry, stainedGlassFrameMaterial);

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
var rectangleCenterMaterial = new THREE.MeshBasicMaterial({color: 0x614051});
var rectangleCenterMesh = new THREE.Mesh(
	rectangleCenterGeometry, rectangleCenterMaterial);

scene.add(rectangleCenterMesh);

// North pointy triangle
var trianglePointyNorth = new THREE.Shape();

trianglePointyNorth.moveTo(0, 200);
trianglePointyNorth.lineTo(25, 50);
trianglePointyNorth.lineTo(-25, 50);
trianglePointyNorth.lineTo(0, 200);

var trianglePointyNorthGeometry = new THREE.ShapeGeometry(trianglePointyNorth);
var trianglePointyNorthMaterial = new THREE.MeshBasicMaterial(
	{color: 0x96c8a2});
var trianglePointyNorthMesh = new THREE.Mesh(
	trianglePointyNorthGeometry, trianglePointyNorthMaterial);

scene.add(trianglePointyNorthMesh);

// West pointy triangle
var trianglePointyWest = new THREE.Shape();

trianglePointyWest.moveTo(-320, 0);
trianglePointyWest.lineTo(-170, -25);
trianglePointyWest.lineTo(-170, 25);
trianglePointyWest.lineTo(-320, 0);

var trianglePointyWestGeometry = new THREE.ShapeGeometry(trianglePointyWest);
var trianglePointyWestMaterial = new THREE.MeshBasicMaterial(
	{color: 0x96c8a2});
var trianglePointyWestMesh = new THREE.Mesh(
	trianglePointyWestGeometry, trianglePointyWestMaterial);

scene.add(trianglePointyWestMesh);

// South pointy triangle
var trianglePointySouth = new THREE.Shape();

trianglePointySouth.moveTo(0, -200);
trianglePointySouth.lineTo(-25, -50);
trianglePointySouth.lineTo(25, -50);
trianglePointySouth.lineTo(0, -200);

var trianglePointySouthGeometry = new THREE.ShapeGeometry(trianglePointySouth);
var trianglePointySouthMaterial = new THREE.MeshBasicMaterial(
	{color: 0x96c8a2});
var trianglePointySouthMesh = new THREE.Mesh(
	trianglePointySouthGeometry, trianglePointySouthMaterial);

scene.add(trianglePointySouthMesh);

// East pointy triangle
var trianglePointyEast = new THREE.Shape();

trianglePointyEast.moveTo(320, 0);
trianglePointyEast.lineTo(170, 25);
trianglePointyEast.lineTo(170, -25);
trianglePointyEast.lineTo(320, 0);

var trianglePointyEastGeometry = new THREE.ShapeGeometry(trianglePointyEast);
var trianglePointyEastMaterial = new THREE.MeshBasicMaterial(
	{color: 0x96c8a2});
var trianglePointyEastMesh = new THREE.Mesh(
	trianglePointyEastGeometry, trianglePointyEastMaterial);

scene.add(trianglePointyEastMesh);

// Northwest horn
var hornNorthwest = new THREE.Shape();

hornNorthwest.moveTo(-120, 250);
hornNorthwest.lineTo(-170, 50);
hornNorthwest.lineTo(-120, 50);
hornNorthwest.quadraticCurveTo(-170, 50, -120, 250);
hornNorthwest.lineTo(-120, 250);

var hornNorthwestGeometry = new THREE.ShapeGeometry(hornNorthwest);
var hornNorthwestMaterial = new THREE.MeshBasicMaterial(
	{color: 0xaaf000});
var hornNorthwestMesh = new THREE.Mesh(
	hornNorthwestGeometry, hornNorthwestMaterial);

scene.add(hornNorthwestMesh);

// Southwest horn
var hornSouthwest = new THREE.Shape();

hornSouthwest.moveTo(-120, -250);
hornSouthwest.lineTo(-170, -50);
hornSouthwest.lineTo(-120, -50);
hornSouthwest.quadraticCurveTo(-170, -50, -120, -250);
hornSouthwest.lineTo(-120, -250);

var hornSouthwestGeometry = new THREE.ShapeGeometry(hornSouthwest);
var hornSouthwestMaterial = new THREE.MeshBasicMaterial(
	{color: 0xaaf000});
var hornSouthwestMesh = new THREE.Mesh(
	hornSouthwestGeometry, hornSouthwestMaterial);

scene.add(hornSouthwestMesh);

// Southeast horn
var hornSoutheast = new THREE.Shape();

hornSoutheast.moveTo(120, -250);
hornSoutheast.lineTo(170, -50);
hornSoutheast.lineTo(120, -50);
hornSoutheast.quadraticCurveTo(170, -50, 120, -250);
hornSoutheast.lineTo(120, -250);

var hornSoutheastGeometry = new THREE.ShapeGeometry(hornSoutheast);
var hornSoutheastMaterial = new THREE.MeshBasicMaterial(
	{color: 0xaaf000});
var hornSoutheastMesh = new THREE.Mesh(
	hornSoutheastGeometry, hornSoutheastMaterial);

scene.add(hornSoutheastMesh);

// Northeast horn
var hornNortheast = new THREE.Shape();

hornNortheast.moveTo(120, 250);
hornNortheast.lineTo(170, 50);
hornNortheast.lineTo(120, 50);
hornNortheast.quadraticCurveTo(170, 50, 120, 250);
hornNortheast.lineTo(120, 250);

var hornNortheastGeometry = new THREE.ShapeGeometry(hornNortheast);
var hornNortheastMaterial = new THREE.MeshBasicMaterial(
	{color: 0xaaf000});
var hornNortheastMesh = new THREE.Mesh(
	hornNortheastGeometry, hornNortheastMaterial);

scene.add(hornNortheastMesh);

// West Circle
var circleWestRadius = 15;
var circleWestSegments = 128;

var circleWestGeometry = new THREE.CircleGeometry(
	circleWestRadius, circleWestSegments);
var circleWestMaterial = new THREE.MeshBasicMaterial({color: 0xe6b0aa});
var circleWestMesh = new THREE.Mesh(circleWestGeometry, circleWestMaterial);
circleWestMesh.position.x = -350;
circleWestMesh.position.y = 0;

scene.add(circleWestMesh);

// East circle
var circleEastRadius = 15;
var circleEastSegments = 128;

var circleEastGeometry = new THREE.CircleGeometry(
	circleEastRadius, circleEastSegments);
var circleEastMaterial = new THREE.MeshBasicMaterial({color: 0xe6b0aa});
var circleEastMesh = new THREE.Mesh(circleEastGeometry, circleEastMaterial);
circleEastMesh.position.x = 350;
circleEastMesh.position.y = 0;

scene.add(circleEastMesh);

// Northwest rectangle
var rectangleNorthwest = new THREE.Shape();

rectangleNorthwest.moveTo(-150, 40);
rectangleNorthwest.lineTo(-150, 45);
rectangleNorthwest.lineTo(-50, 45);
rectangleNorthwest.lineTo(-50, 40);
rectangleNorthwest.lineTo(-150, 40);

var rectangleNorthwestGeometry = new THREE.ShapeGeometry(rectangleNorthwest);
var rectangleNorthwestMaterial = new THREE.MeshBasicMaterial({color: 0xebdef0});
var rectangleNorthwestMesh = new THREE.Mesh(
	rectangleNorthwestGeometry, rectangleNorthwestMaterial);

scene.add(rectangleNorthwestMesh);

// Southwest rectangle
var rectangleSouthwest = new THREE.Shape();

rectangleSouthwest.moveTo(-150, -40);
rectangleSouthwest.lineTo(-150, -45);
rectangleSouthwest.lineTo(-50, -45);
rectangleSouthwest.lineTo(-50, -40);
rectangleSouthwest.lineTo(-150, -40);

var rectangleSouthwestGeometry = new THREE.ShapeGeometry(rectangleSouthwest);
var rectangleSouthwestMaterial = new THREE.MeshBasicMaterial({color: 0xebdef0});
var rectangleSouthwestMesh = new THREE.Mesh(
	rectangleSouthwestGeometry, rectangleSouthwestMaterial);

scene.add(rectangleSouthwestMesh);

// Southeast rectangle
var rectangleSoutheast = new THREE.Shape();

rectangleSoutheast.moveTo(150, -40);
rectangleSoutheast.lineTo(150, -45);
rectangleSoutheast.lineTo(50, -45);
rectangleSoutheast.lineTo(50, -40);
rectangleSoutheast.lineTo(150, -40);

var rectangleSoutheastGeometry = new THREE.ShapeGeometry(rectangleSoutheast);
var rectangleSoutheastMaterial = new THREE.MeshBasicMaterial({color: 0xebdef0});
var rectangleSoutheastMesh = new THREE.Mesh(
	rectangleSoutheastGeometry, rectangleSoutheastMaterial);

scene.add(rectangleSoutheastMesh);

// Northeast rectangle
var rectangleNortheast = new THREE.Shape();

rectangleNortheast.moveTo(150, 40);
rectangleNortheast.lineTo(150, 45);
rectangleNortheast.lineTo(50, 45);
rectangleNortheast.lineTo(50, 40);
rectangleNortheast.lineTo(150, 40);

var rectangleNortheastGeometry = new THREE.ShapeGeometry(rectangleNortheast);
var rectangleNortheastMaterial = new THREE.MeshBasicMaterial({color: 0xebdef0});
var rectangleNortheastMesh = new THREE.Mesh(
	rectangleNortheastGeometry, rectangleNortheastMaterial);

scene.add(rectangleNortheastMesh);

// Teeth
var teethUpperMeshes = [];
var tooth;
var toothGeometry;
var toothMaterial;
var toothMesh;
var positionIncrement = 0;
while (positionIncrement != 850)
{
	tooth = new THREE.Shape();

	tooth.moveTo(-400 + positionIncrement, -400);
	tooth.lineTo(-410 + positionIncrement, -350);
	tooth.lineTo(-390 + positionIncrement, -350);
	tooth.lineTo(-400 + positionIncrement, -400);

	positionIncrement = positionIncrement + 50;

	toothGeometry = new THREE.ShapeGeometry(tooth);
	toothMaterial = new THREE.MeshBasicMaterial(
		{color: 0x641e16});
	toothMesh = new THREE.Mesh(
		toothGeometry, toothMaterial);

	scene.add(toothMesh);
	teethUpperMeshes.push(toothMesh);
}

var teethLowerMeshes = [];
positionIncrement = 0;
while (positionIncrement != 850)
{
	tooth = new THREE.Shape();

	tooth.moveTo(-400 + positionIncrement, -290);
	tooth.lineTo(-410 + positionIncrement, -340);
	tooth.lineTo(-390 + positionIncrement, -340);
	tooth.lineTo(-400 + positionIncrement, -290);

	positionIncrement = positionIncrement + 50;

	toothGeometry = new THREE.ShapeGeometry(tooth);
	toothMaterial = new THREE.MeshBasicMaterial(
		{color: 0x641e16});
	toothMesh = new THREE.Mesh(
		toothGeometry, toothMaterial);

	scene.add(toothMesh);
	teethLowerMeshes.push(toothMesh);
}

// Render
renderer.render(scene, camera);