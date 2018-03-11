let graph = [];

let n = 27;
let nodeRadius = 55;
let edges = [['s','a'],
						['s','b'],
						['a','f'],
						['b','f'],
						['c','e'],
						['c','j'],
						['b','c'],
						['f','h'],
						['d','h'],
						['j','k'],
						['j','l'],
						['k','t'],
						['l','t']];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(52);
	for(let i=0;i<n;i++)
	{
		graph.push([]);
	}
	for(let i=0;i<edges.length;i++)
	{
		let a = edges[i][0].charCodeAt(0)-97;
		let b	= edges[i][1].charCodeAt(0)-97;

		graph[a].push(b);
		graph[b].push(a);
	}
	dfs('s'.charCodeAt(0)-97,[],nodeRadius,0,windowWidth,null,null);
}
function renderNode(name,x,y)
{
 	fill(190);
	noStroke();
	ellipse(x, y, nodeRadius, nodeRadius);
	textAlign(CENTER,CENTER);
	fill(0);
	text(name,x,y)
}
function renderLine(x1,y1,x2,y2) {

	strokeWeight(5);
	stroke(255);
	let d = sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
	let vx = (x1-x2)/d;
	let vy = (y1-y2)/d;
	d= d-nodeRadius/2;
	line(x1,y1,x1-vx*d,y1-vy*d);
}
let target = 't'.charCodeAt(0)-97;
function dfs(node,path,y,xMin,xMax,perX,perY)
{
	let valid = [];
	if(perX!= null && perY != null)
		renderLine(xMin+(xMax-xMin)/2,y,perX,perY);
	renderNode(String.fromCharCode(node+65),xMin+(xMax-xMin)/2,y);
	if(node == target)
		return true;
	for(let i=0;i<graph[node].length;i++)
	{

		let newNode = graph[node][i];
		if(!path.includes(newNode))
			valid.push(newNode);
	}

	sort(valid);
	path.push(node);
	let subTreeWidth = (xMax-xMin)/valid.length;
	for(let i=0;i<valid.length;i++)
	{
		let ret  = dfs(valid[i],path.slice(),y+nodeRadius*2,xMin+subTreeWidth*i,xMin+subTreeWidth*(i+1),xMin+(xMax-xMin)/2,y);
		if(ret)
			return true;
	}
	return false;
}

function draw() {
	//background(52);
}
