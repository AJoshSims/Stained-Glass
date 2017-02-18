var canvasWidth;
var canvasHeight;

var scene;

var viewLength;
var aspRat;
var camera;

var slider;

var renderer;

init();

var shapes = [];

draw();

render();

function init()
{
	window.color = new THREE.Color(0.0, 0.0, 0.0);

	canvasWidth = window.innerWidth - 50;
	canvasHeight = window.innerHeight - 50;

	scene = new THREE.Scene();

	viewLength = 1000;
	aspRat = canvasWidth/canvasHeight;
	camera = new THREE.OrthographicCamera(
		-aspRat*viewLength/2,
		aspRat*viewLength/2,
		viewLength/2,
		-viewLength/2,
		-1000, 1000);

	slider = document.getElementById("slider1");
	slider.addEventListener("change", onSlideChange);

	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild(renderer.domElement);
}

function draw()
{
	scene.add(drawBorder());

	shapes.push(drawAllRects());
	shapes.push(drawAllTris());
	shapes.push(drawAllCircles());
	shapes.push(drawAllCurvedShapes());

	for (var shapeIndex = 0; shapeIndex < shapes.length; ++shapeIndex)
	{
		for (var thing = 0; thing < shapes[shapeIndex].length; ++thing)
		{
			scene.add(shapes[shapeIndex][thing]);
		}
	}
}

function drawBorder()
{
	var border = new THREE.Shape();
	border.moveTo(-canvasWidth, canvasHeight);
	border.lineTo(-canvasWidth, -canvasHeight);
	border.lineTo(canvasWidth, -canvasHeight);
	border.lineTo(canvasWidth, canvasHeight);
	border.lineTo(-canvasWidth, canvasHeight);

	var hole = new THREE.Path();
	hole.moveTo(-canvasWidth + 30, canvasHeight - 30);
	hole.lineTo(-canvasWidth + 30, -canvasHeight + 30);
	hole.lineTo(canvasWidth - 30, -canvasHeight + 30);
	hole.lineTo(canvasWidth - 30, canvasHeight - 30);
	hole.lineTo(-canvasWidth + 30, canvasHeight - 30);
	border.holes.push(hole);

	var borderGeometry = new THREE.ShapeGeometry(border);
	var borderMaterial = new THREE.MeshBasicMaterial(
		{color: 0x663300, transparent: false});

	var borderMesh = new THREE.Mesh(
		borderGeometry, borderMaterial);
	
	return borderMesh;
}

function drawAllRects()
{
	var rects = [];
	
	rects.push(rectThing(-150, 30, -150, -30, 150, -30, 150, 30, 0x614051));
	rects.push(rectThing(-150, 40, -150, 45, -50, 45, -50, 40, 0xebdef0));
	rects.push(rectThing(-150, -40, -150, -45, -50, -45, -50, -40, 0xebdef0));
	rects.push(rectThing(150, -40, 150, -45, 50, -45, 50, -40, 0xebdef0));
	rects.push(rectThing(150, 40, 150, 45, 50, 45, 50, 40, 0xebdef0));
	
	return rects;
}

function rectThing(
	topLeftX, topLeftY,
	bottomLeftX, bottomLeftY,
	bottomRightX, bottomRightY,
	topRightX, topRightY, 
	color)
{
	var rect = new THREE.Shape();
	rect.moveTo(topLeftX, topLeftY);
	rect.lineTo(bottomLeftX, bottomLeftY);
	rect.lineTo(bottomRightX, bottomRightY);
	rect.lineTo(topRightX, topRightY);
	rect.lineTo(topLeftX, topLeftY);

	var rectGeometry = new THREE.ShapeGeometry(rect);
	var rectMaterial = new THREE.MeshBasicMaterial(
		{color: color, transparent: true, opacity: slider.value});

	var rectMesh = new THREE.Mesh(
		rectGeometry, rectMaterial);
	
	return rectMesh;
}

function drawAllTris()
{
	var tris = [];
	
	tris.push(triThing(0, 200, 25, 50, -25, 50, 0x96c8a2));
	tris.push(triThing(-320, 0, -170, -25, -170, 25, 0x96c8a2));
	tris.push(triThing(0, -200, -25, -50, 25, -50, 0x96c8a2));
	tris.push(triThing(320, 0, 170, 25, 170, -25, 0x96c8a2));

	var positionIncrement = 0;
	while (positionIncrement != 850)
	{
		tris.push(triThing(
			-400 + positionIncrement, -400, 
			-410 + positionIncrement, -350, 
			-390 + positionIncrement, -350, 
			0x641e16));

		positionIncrement += 50;
	}
	
	positionIncrement = 0;
	while (positionIncrement != 850)
	{
		tris.push(triThing(
			-400 + positionIncrement, -290,
			-410 + positionIncrement, -340,
			-390 + positionIncrement, -340,
			0x641e16));

		positionIncrement += 50;
	}
	
	return tris;
}

function triThing(
	firstX, firstY,
	secondX, secondY,
	thirdX, thirdY,
	color)
{
	var tri = new THREE.Shape();
	
	tri.moveTo(firstX, firstY);
	tri.lineTo(secondX, secondY);
	tri.lineTo(thirdX, thirdY);
	tri.lineTo(firstX, firstY);
	
	var triGeometry = new THREE.ShapeGeometry(tri);
	var triMaterial = new THREE.MeshBasicMaterial(
		{color: color, transparent: true, opacity: slider.value});

	var triMesh = new THREE.Mesh(
		triGeometry, triMaterial);
	
	return triMesh;
}

function drawAllCircles()
{
	var circles = [];

	circles.push(circleThing(15, 128, -350, 0, 0xe6b0aa));
	circles.push(circleThing(15, 128, 350, 0, 0xe6b0aa));

	return circles;
}

function circleThing(radius, segments, x, y, color)
{
	var circleGeometry = new THREE.CircleGeometry(
		radius, segments);
	var circleMaterial = new THREE.MeshBasicMaterial(
		{color: color, transparent: true, opacity: slider.value});
	var circleMesh = new THREE.Mesh(circleGeometry, circleMaterial);

	circleMesh.position.x = x;
	circleMesh.position.y = y;

	return circleMesh;
}

function drawAllCurvedShapes()
{
	var curvedShapes = [];

	curvedShapes.push(curveThing(-120, 250, -170, 50, -120, 50, 0xaaf000));
	curvedShapes.push(curveThing(-120, -250, -170, -50, -120, -50, 0xaaf000));
	curvedShapes.push(curveThing(120, -250, 170, -50, 120, -50, 0xaaf000));
	curvedShapes.push(curveThing(120, 250, 170, 50, 120, 50, 0xaaf000));

	return curvedShapes;
}

function curveThing(firstX, firstY, secondX, secondY, thirdX, thirdY, color)
{
	var curvedShape = new THREE.Shape();
	curvedShape.moveTo(firstX, firstY);
	curvedShape.lineTo(secondX, secondY);
	curvedShape.lineTo(thirdX, thirdY);
	curvedShape.quadraticCurveTo(secondX, secondY, firstX, firstY);
	curvedShape.lineTo(firstX, firstY);

	var curvedShapeGeometry = new THREE.ShapeGeometry(curvedShape);
	var curvedShapeMaterial = new THREE.MeshBasicMaterial(
		{color: color, transparent: true, opacity: slider.value});

	var curvedShapeMesh = new THREE.Mesh(
		curvedShapeGeometry, curvedShapeMaterial);

	return curvedShapeMesh;
}

function render()
{
	renderer.render(scene, camera);
}

function onSlideChange()
{
	for (var shapeIndex = 0; shapeIndex < shapes.length; ++shapeIndex)
	{
		for (var thing = 0; thing < shapes[shapeIndex].length; ++thing)
		{
			shapes[shapeIndex][thing].material.opacity = slider.value;
		}
	}

	render();
}