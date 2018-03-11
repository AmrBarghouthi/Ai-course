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
