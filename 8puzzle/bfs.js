var queue = [];
function bfsNode(data,x,y)
{

    this.grid = new PuzzleState(data);
    this.x = x;
    this.y = y;
    this.render = function() {
        this.grid.render(x,y);

    }
}
function bfsSetup(src)
{
  queue = [];
  queue.push(src);
}

function bfs(src,target)
{
    bfsSetup(bfsState(src,0,110/2));
    while(queue.length!=0)
    {
        console.log(queue);
        var top = queue[0].slice();
        if(arrayEqual(top[top.length-1],target))
          return top;
        bfsStep();

    }

    console.log("queue is empty");
    return null;
}
function isVisted(prevNodes,newNode)
{
  for(var i=0;i<prevNodes.length;i++)
     if(arrayEqual(prevNodes[i],newNode))
      return true;
  return false;
}
function bfsStep()
{

  var top = queue[0];
  console.log(top);
  queue.shift();
  //console.log(top);
  var currentState = new PuzzleState(top[top.length-1]);
  var left  = currentState.moveLeft();
  var right = currentState.moveRight();
  var up    = currentState.moveUp();
  var down  = currentState.moveDown();

  var temp = top.slice();
  if(left != null)
    if(!isVisted(top,left))
    {
      temp.unshift(left);
      queue.unshift(temp);
    }
// console.log(queue);
  var temp = top.slice();
  if(right != null)
    if(!isVisted(top,right))
    {
      temp.unshift(right);
      queue.unshift(temp);
    }

  var temp = top.slice();
  if(up != null)
    if(!isVisted(top,up))
    {
      temp.unshift(up);
      queue.unshift(temp);
    }

  var temp = top.slice();
  if(down != null)
    if(!isVisted(top,down))
    {
      temp.unshift(down);
      queue.unshift(temp);
    }
}
