/**
 * Creates an interactive stained glass window. The opacity of the shapes
 * that appear in the stained glass can be decreased by moving the slider to
 * the left and increased by moving the slider to the right.
 *
 * <p>Should be executed in the Google Chrome web browser.
 *
 * @author Joshua Sims
 *
 * @version 19 February 2017
 */

/**
 * The width of the canvas.
 */
var canvasWidth;

/**
 * The height of the canvas.
 */
var canvasHeight;

/**
 * The scene in which the stained glass window appears.
 */
var scene;

/**
 * The view length of the camera.
 */
var viewLength;

/**
 * The aspect ratio.
 */
var aspRat;

/**
 * The camera that is directed at the stained glass window.
 */
var camera;

/**
 * The interactive slider widget with which the user may change the opacity
 * of the shapes that appear in the stained glass.
 */
var slider;

/**
 * Renders the scene.
 */
var renderer;

/**
 * The shapes that appear in the stained glass.
 */
var shapes = [];

init();

draw();

renderScene();

/**
 * Sets the window color, the canvas width and height, creates a new scene and
 * orthographic camera, and adds an event handler that listens for the alpha
 * change.
 */
function init()
{
	// Sets color of window to black
	window.color = new THREE.Color(0.0, 0.0, 0.0);

	// Establishes canvas dimensions
	canvasWidth = window.innerWidth - 50;
	canvasHeight = window.innerHeight - 50;

	// Creates scene
	scene = new THREE.Scene();

	// Sets up camera
	viewLength = 1000;
	aspRat = canvasWidth/canvasHeight;
	camera = new THREE.OrthographicCamera(
		-aspRat*viewLength/2,
		aspRat*viewLength/2,
		viewLength/2,
		-viewLength/2,
		-1000, 1000);

	// Sets up slider
	slider = document.getElementById("slider1");
	slider.addEventListener("change", onSlideChange);

	// Sets up slider
	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild(renderer.domElement);
}

/**
 * Creates the shapes that constitute the stained glass pattern and adds them
 * to the scene.
 */
function draw()
{
	scene.add(drawBorder());

	shapes.push(drawAllRects());
	shapes.push(drawAllTris());
	shapes.push(drawAllCircles());
	shapes.push(drawAllCurvedShapes());

	for (var shapesSubset = 0; shapesSubset < shapes.length; ++shapesSubset)
	{
		for (var shape = 0; shape < shapes[shapesSubset].length; ++shape)
		{
			scene.add(shapes[shapesSubset][shape]);
		}
	}
}

/**
 * Creates and returns the mesh of the stained glass border.
 *
 * @return The mesh of the stained glass border
 */
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

/**
 * Creates and returns the meshes of the rectangles that appear in the 
 * stained glass.
 *
 * @return The meshes of the rectangles that appear in the stained glass
 */
function drawAllRects()
{
	var rects = [];
	
	rects.push(createRect(-150, 30, -150, -30, 150, -30, 150, 30, 0x614051));
	rects.push(createRect(-150, 40, -150, 45, -50, 45, -50, 40, 0xebdef0));
	rects.push(createRect(-150, -40, -150, -45, -50, -45, -50, -40, 0xebdef0));
	rects.push(createRect(150, -40, 150, -45, 50, -45, 50, -40, 0xebdef0));
	rects.push(createRect(150, 40, 150, 45, 50, 45, 50, 40, 0xebdef0));
	
	return rects;
}

/**
 * Creates and returns the mesh of the specified rectangle.
 *
 * @param firstX - The x coordinate of the first vertex
 * @param firstY - The y coordinate of the first vertex
 * @param secondX - The x coordinate of the second vertex
 * @param secondY - The y coordinate of the second vertex
 * @param thirdX - The x coordinate of the third vertex
 * @param thirdY - The y coordinate of the third vertex
 * @param fourthX - The x coordinate of the fourth vertex
 * @param fourthY - The y coordinate of the fourth vertex
 * @param color - The color of the rectangle
 * 
 * @return The mesh of the specified rectangle
 */
function createRect(
	firstX, firstY,
	secondX, secondY,
	bottomRightX, thirdY,
	fourthX, fourthY,
	color)
{
	var rect = new THREE.Shape();
	rect.moveTo(firstX, firstY);
	rect.lineTo(secondX, secondY);
	rect.lineTo(bottomRightX, thirdY);
	rect.lineTo(fourthX, fourthY);
	rect.lineTo(firstX, firstY);

	var rectGeometry = new THREE.ShapeGeometry(rect);
	var rectMaterial = new THREE.MeshBasicMaterial(
		{color: color, transparent: true, opacity: slider.value});

	var rectMesh = new THREE.Mesh(
		rectGeometry, rectMaterial);
	
	return rectMesh;
}

/**
 * Creates and returns the meshes of the triangles that appear in the
 * stained glass.
 *
 * @return The meshes of the triangles that appear in the stained glass
 */
function drawAllTris()
{
	var tris = [];
	
	tris.push(createTri(0, 200, 25, 50, -25, 50, 0x96c8a2));
	tris.push(createTri(-320, 0, -170, -25, -170, 25, 0x96c8a2));
	tris.push(createTri(0, -200, -25, -50, 25, -50, 0x96c8a2));
	tris.push(createTri(320, 0, 170, 25, 170, -25, 0x96c8a2));

	var positionIncrement = 0;
	while (positionIncrement != 850)
	{
		tris.push(createTri(
			-400 + positionIncrement, -400, 
			-410 + positionIncrement, -350, 
			-390 + positionIncrement, -350, 
			0x641e16));

		positionIncrement += 50;
	}
	
	positionIncrement = 0;
	while (positionIncrement != 850)
	{
		tris.push(createTri(
			-400 + positionIncrement, -290,
			-410 + positionIncrement, -340,
			-390 + positionIncrement, -340,
			0x641e16));

		positionIncrement += 50;
	}
	
	return tris;
}

/**
 * Creates and returns the mesh of the specified triangle.
 *
 * @param firstX - The x coordinate of the first vertex
 * @param firstY - The y coordinate of the first vertex
 * @param secondX - The x coordinate of the second vertex
 * @param secondY - The y coordinate of the second vertex
 * @param thirdX - The x coordinate of the third vertex
 * @param thirdY - The y coordinate of the third vertex
 * @param color - The color of the triangle
 *
 * @return The mesh of the specified triangle
 */
function createTri(
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

/**
 * Creates and returns the meshes of the circles that appear in the
 * stained glass.
 *
 * @return The meshes of the circles that appear in the stained glass
 */
function drawAllCircles()
{
	var circles = [];

	circles.push(createCircle(15, 128, -350, 0, 0xe6b0aa));
	circles.push(createCircle(15, 128, 350, 0, 0xe6b0aa));

	return circles;
}

/**
 * Creates and returns the mesh of the specified circle.
 * 
 * @param radius - The radius of the circle
 * @param segments - The number of line segments which together form the
 *     circumference
 * @param x - The x coordinate of the center of the circle
 * @param y - The y coordinate of the center of the circle
 * @param color - The color of the circle
 *
 * @return The mesh of the specified circle
 */
function createCircle(radius, segments, x, y, color)
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

/**
 * Creates and returns the meshes of the curved shapes (other than circles) 
 * that appear in the stained glass.
 *
 * @return The meshes of the curved shapes (other than circles) that appear in 
 *     the stained glass
 */
function drawAllCurvedShapes()
{
	var curvedShapes = [];

	curvedShapes.push(createCurvedShape(-120, 250, -170, 50, -120, 50, 0xaaf000));
	curvedShapes.push(createCurvedShape(-120, -250, -170, -50, -120, -50, 0xaaf000));
	curvedShapes.push(createCurvedShape(120, -250, 170, -50, 120, -50, 0xaaf000));
	curvedShapes.push(createCurvedShape(120, 250, 170, 50, 120, 50, 0xaaf000));

	return curvedShapes;
}

/**
 * Creates and returns the mesh of the specified curved shape.
 *
 * @param firstX - The x coordinate of the first vertex
 * @param firstY - The y coordinate of the first vertex
 * @param secondX - The x coordinate of the second vertex
 * @param secondY - The y coordinate of the second vertex
 * @param thirdX - The x coordinate of the third vertex
 * @param thirdY - The y coordinate of the third vertex
 * @param color - The color of the curved shape
 *
 * @return The mesh of the specified curved shape
 */
function createCurvedShape(
	firstX, firstY,
	secondX, secondY,
	thirdX, thirdY,
	color)
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

/**
 * Renders the scene.
 */
function renderScene()
{
	renderer.render(scene, camera);
}

/**
 * Decreases the opacity of each of the stained glass shapes when the slider
 * is moved to the left and increases the opacity of each of the stained
 * glass shapes when the slider is moved to the right. Then renders the scene
 * again.
 */
function onSlideChange()
{
	for (var shapesSubset = 0; shapesSubset < shapes.length; ++shapesSubset)
	{
		for (var shape = 0; shape < shapes[shapesSubset].length; ++shape)
		{
			shapes[shapesSubset][shape].material.opacity = slider.value;
		}
	}

	renderScene();
}