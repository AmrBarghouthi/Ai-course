var queue = [];
var stepNumber;
function dfsSetup(src)
{
  queue = [];
  stepNumber = 0;
  queue.push([src.slice()]);
}


function isVisted(prevNodes,newNode)
{
  for(var i=0;i<prevNodes.length;i++)
     if(arrayEqual(prevNodes[i],newNode))
     {
      // console.log(prevNodes);
     //  console.log(newNode);
      // noLoop();
      return true;
    }
  return false;
}
function dfsStep()
{
  stepNumber++;
  var top = queue.pop();
  //console.log(top);

  //console.log(top);
  var currentState = new PuzzleState(top[0]);
  var left  = currentState.moveLeft();
  var right = currentState.moveRight();
  var up    = currentState.moveUp();
  var down  = currentState.moveDown();
  if(top.length < 50)
  {
    var temp = top.slice();
    if(left != null)
      if(!isVisted(top,left))
      {
        temp.unshift(left.slice());
        queue.push(temp.slice());
      }
  // console.log(queue);
    var temp = top.slice();
    if(right != null)
      if(!isVisted(top,right))
      {
        temp.unshift(right.slice());
        queue.push(temp.slice());
      }

    var temp = top.slice();
    if(up != null)
      if(!isVisted(top,up))
      {
        temp.unshift(up.slice());
        queue.push(temp.slice());
      }

    var temp = top.slice();
    if(down != null)
      if(!isVisted(top,down))
      {
        temp.unshift(down.slice());
        queue.push(temp.slice());
      }
  }
}
