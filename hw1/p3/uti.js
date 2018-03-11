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
