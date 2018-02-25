var queue = [];
var stepNumber;
function bfsSetup(src)
{
  queue = [];
  stepNumber = 0;
  queue.push([src.slice()]);
}

function bfs(src,target)
{
    bfsSetup(bfsState(src,0,110/2));
    while(queue.length!=0)
    {
        console.log(queue);
        var top = queue[0].slice();
        if(arrayEqual(top[0],target)){
          queue = [];
          return top;
        }
        bfsStep();

    }

    console.log("queue is empty");
    return null;
}
function isVisted(prevNodes,newNode)
{
  for(var i=0;i<prevNodes.length;i++)
     if(arrayEqual(prevNodes[i],newNode))
     {
    //   console.log(prevNodes);
    //   console.log(newNode);
       //noLoop();
      return true;
    }
  return false;
}
function bfsStep()
{
  stepNumber++;
  var top = queue[0];
  //console.log(top);
  queue.shift();
  //console.log(top);
  var currentState = new PuzzleState(top[0]);
  var left  = currentState.moveLeft();
  var right = currentState.moveRight();
  var up    = currentState.moveUp();
  var down  = currentState.moveDown();

  var temp = top.slice();
  if(left != null)
    if(!isVisted(top,left))
    {
      temp.unshift(left);
      queue.push(temp.slice());
    }
// console.log(queue);
  var temp = top.slice();
  if(right != null)
    if(!isVisted(top,right))
    {
      temp.unshift(right);
      queue.push(temp.slice());
    }

  var temp = top.slice();
  if(up != null)
    if(!isVisted(top,up))
    {
      temp.unshift(up);
      queue.push(temp.slice());
    }

  var temp = top.slice();
  if(down != null)
    if(!isVisted(top,down))
    {
      temp.unshift(down);
      queue.push(temp.slice());
    }
}
