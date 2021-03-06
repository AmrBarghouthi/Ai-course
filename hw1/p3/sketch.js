let graph = [];

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

let queue = [];
let nodes = [
	['S',10],
	['A',6],
	['B',5],
	['C',2],
	['D',5],
	['E',1],
	['F',100],
	['H',2],
	['J',3],
	['K',100],
	['L',4],
	['T',0]

];
let expanded = 0;
function getNodeFromName(name)
{
	for(let i=0;i<graph.length;i++)
		if(graph[i].name == name)
			return graph[i];
//	console.log("node not found "+name);
	graph.push(new node(name,Infinity));
	return graph[graph.length-1];
}
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(52);
	for(let i=0;i<nodes.length;i++)
	{

		graph.push(new node(nodes[i][0],nodes[i][1]));
	}
 for(let i=0;i<edges.length;i++)
	{
	//	console.log(edges[i]);
		 let a = getNodeFromName(edges[i][0]);
		 let b = getNodeFromName(edges[i][1]);
		let c = edges[i][2];
		 a.addEdge(b,c);
		 b.addEdge(a,c);

	}
	target =  getNodeFromName('T');
 	//aStar();
	frameRate(1);
	aStarSetup();
	//noLoop();
}


let target = null;
let done = false;
function aStar()
{
	aStarSetup();
	while(queue.length !=0 && !done)
	{
		aStarIt();
	}
}
function aStarSetup()
{
	let firstNode = getNodeFromName('S');

	queue.push(new aStarNode(firstNode,firstNode.heru,0,[],0,windowWidth,250));
	let top = queue[0];
	let xMin = top.renderXMin;
	let xMax = top.renderXMax;
	let y = top.renderY;
	renderNode(top.node.name,xMin+(xMax-xMin)/2,y,top.acummCost,top.aStarCost,0,"new");
}
function aStarIt()
{
	queue.sort(aStarComp);

	let top = queue[0];
	let xMin = top.renderXMin;
	let xMax = top.renderXMax;
	let y = top.renderY;
	expanded++;
	renderNode(top.node.name,xMin+(xMax-xMin)/2,y,top.acummCost,top.aStarCost,expanded,"vis");
	if(top.node == target){
		done = true;
		noLoop();
		return;
	}
	queue.shift();
	let valid = [];
	for (var i = 0; i < top.node.edges.length; i++) {
		if(!isVisted(top.path,top.node.edges[i].to))
		{
			let edge = top.node.edges[i];
			let acummCost = top.acummCost+edge.cost;
			let aStarCost = acummCost+edge.to.heru;
			let path = top.path.slice();
			path.push(top.node);
			valid.push(new aStarNode(edge.to,aStarCost,acummCost,path));

		}
	}

	let subTreeWidth = (xMax-xMin)/valid.length;
	for (var i = 0; i < valid.length; i++) {
		let added = valid[i];
		added.renderXMin = xMin+i*subTreeWidth;
		added.renderXMax = xMin+(i+1)*subTreeWidth;
		added.renderY = y+500;
		added.preX = xMin+(xMax-xMin)/2;
		added.preY = y;
		queue.push(added);

		renderLine(added.renderXMin +(added.renderXMax-added.renderXMin)/2,added.renderY,added.preX,added.preY);
		renderNode(added.node.name,added.renderXMin+(added.renderXMax-added.renderXMin)/2,added.renderY,added.acummCost,added.aStarCost,0,"new");
	}
	renderNode(top.node.name,xMin+(xMax-xMin)/2,y,top.acummCost,top.aStarCost,expanded,"vis");

}
function isVisted(path,node)
{
	for (var i = 0; i < path.length; i++) {
		if(path[i].name ==node.name)
			return true;
	}
	return false;
}
function aStarComp (a,b)
{
 	return a.aStarCost-b.aStarCost;
}
function draw() {
	//background(52);
	aStarIt();
}
