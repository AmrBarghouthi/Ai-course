class node{

  constructor(name,heur)
  {
    this.name = name;
    this.edges = [];
    this.heru = heur;
  }

  addEdge(dist,cost)
  {
      this.edges.push(new edge(dist,cost));
  }


}
class edge {
  constructor(to,cost) {
      this.to = to;
      this.cost = cost;
  }
}
class aStarNode {

  constructor(node,aStarCost,acummcost,path,xMin,xMax,y,preX,preY) {
      this.node = node;
      this.aStarCost = aStarCost;
      this.acummCost = acummcost;
      this.path = path;
      this.renderXMin = xMin;
      this.renderXMax = xMax;
      this.renderY = y;
      this.preX = preX;
      this.preY = preY;
    }
}

function renderLine(x1,y1,x2,y2) {

	strokeWeight(15);
	stroke(0);
	let d = sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
	let vx = (x1-x2)/d;
	let vy = (y1-y2)/d;
	d= d-nodeRadius/2;
	line(x1,y1,x1-vx*d,y1-vy*d);
}
function renderNode(name,x,y,cost,aStarCost,expandedId,mode)
{
	textStyle(BOLD);
	if(mode == "new")
		fill(190);
	else
		fill('rgb(255,0,0)');
	noStroke();
	ellipse(x, y, nodeRadius, nodeRadius);
	textAlign(CENTER,CENTER);
	textSize(64);
	fill(0);
	text(name,x,y)
	//if(mode == "new")
	{

		textSize(80);
		fill('rgb(0,255,0)')
		textAlign(LEFT,CENTER);
		text(str(cost),x+nodeRadius/2+2,y);
		fill(255);
		textAlign(RIGHT,CENTER);
		text(str(aStarCost),x-nodeRadius/2-15,y );


	}
  if(mode == 'vis')
  {
    textAlign(CENTER,TOP);
    text(str(expandedId),x,y +nodeRadius/2+15);
  }

}
