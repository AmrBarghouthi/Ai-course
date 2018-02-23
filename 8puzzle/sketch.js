
var state;
var src = [];
var target = [];

function setup()
{
 createCanvas(110*10, 110*10);
  src = [1,2,3,4,5,6,7,8,0];
  target = [];
  bfsSetup(src);
  frameRate(1);
}

function arrayEqual(a,b)
{
  if(a.length == b.length)
  {
    for(var i=0;i<a.length;i++)
      if(a[i]!==b[i])
        return false;
  }
  else
    return false;

  return true;
}

function draw()
{
  background(52);

  if(queue.length!==0)
  {

    for(var j=0;j<queue.length;j++)
    {
      var top = queue[j];
      for(var i=0;i<top.length;i++)
      {
        var temp = new PuzzleState(top[i]);
        temp.render(100,100,110*j,i*110);
      }
    //  bfsStep();
  }
}


}
