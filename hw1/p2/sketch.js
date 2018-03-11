let graph = [];
let queue = [];
let n = 27;
let nodeRadius = 150;
let edges = [['S','A',2],
						['S','B',10],
						['A','F',4],
						['B','F',2],
						['C','E',5],
						['C','J',12],
						['B','C',5],
						['F','H',8],
						['D','H',3],
						['J','K',1],
						['J','L',4],
						['K','T',7],
						['L','T',5]];



function getNodeFromName(name)
{
	for(let i=0;i<graph.length;i++)
		if(graph[i].name == name)
			return graph[i];
	graph.push(new node(name,1e9));
	return graph[graph.length-1];
}
let bestCost=Infinity;
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(52);

	for(let i=0;i<edges.length;i++)
	{
		 let a = getNodeFromName(edges[i][0]);
		 let b = getNodeFromName(edges[i][1]);
		 let c = edges[i][2];
		 a.addEdge(b,c);
		 b.addEdge(a,c);

	}
	dfs(getNodeFromName('S'),[],0,150,0,windowWidth);
}
function renderNode(name,x,y,cost)
{
	if(cost>bestCost)
 		fill('rgb(255,0,0)');
	else
	 	fill(255);

	noStroke();
	ellipse(x, y, nodeRadius, nodeRadius);
	textAlign(CENTER,CENTER);
	textSize(64);
	fill(0);
	text(name,x,y)
	fill('rgb(0,255,0)')
	textAlign(LEFT,CENTER);
	text(str(cost),x+nodeRadius/2+2,y);
	fill('rgb(0,0,255)');
	textAlign(RIGHT,CENTER);
	text(str(bestCost),x-nodeRadius/2-15,y )

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
let target = getNodeFromName('T');
function dfs(node,path,cost,y,xMin,xMax,perX,perY)
{
	if(cost>bestCost)
		return false;
	let valid = [];
	if(perX!= null && perY != null)
		renderLine(xMin+(xMax-xMin)/2,y,perX,perY);
	renderNode(node.name,xMin+(xMax-xMin)/2,y,cost);

	if(node == target)
	{
		bestCost = cost<bestCost?cost:bestCost;
		return true;
	}
	for(let i=0;i<node.edges.length;i++)
	{

		let newNode = node.edges[i].to;
		if(!path.includes(newNode))
			valid.push(node.edges[i]);
	}

	sort(valid);
	path.push(node);
	let subTreeWidth = (xMax-xMin)/valid.length;
	for(let i=0;i<valid.length;i++)
	{

		let newCost = cost+valid[i].cost;
		let ret  = dfs(valid[i].to,path.slice(),newCost,y+250,xMin+subTreeWidth*i,xMin+subTreeWidth*(i+1),xMin+(xMax-xMin)/2,y);
		//if(ret)
			//return true;
	}
	return false;
}

function draw() {
	//background(52);
}
