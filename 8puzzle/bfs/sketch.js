
var state;
var src =    [2,8,3,1,6,4,7,0,5];
var target = [1,2,3,8,0,4,7,6,5];
var autoComplete = false;
function setup()
{
  var cnv = createCanvas(110*10, 110*10);
  cnv.parent('sketch-holder');
  bfsSetup(src);
  frameRate(1);
}

function arrayEqual(a,b)
{
  if(a.length == b.length)
  {
    for(var i=0;i<a.length;i++)
      if(a[i]!=b[i])
        return false;
  }
  else
    return false;

  return true;
}

var fr = 50;
function changeFrameRate()
{

  var fr=  document.getElementById('fr').value;
  //console.log(fr);
  frameRate(float(fr));
}
function draw()
{


  if(queue.length!==0)
  {
    background(52);
  //  var tarState = new PuzzleState(target);
  //  tarState.render(100,100,50,0);
  fill(255);
  textSize(30);
  textAlign(LEFT,CENTER);

//  button.mousePressed(greet);
    text("Queue size : "+queue.length+" BFS Iteration : "+stepNumber, 25, 55);
    for(var j=0;j<min(10,queue.length);j++)
    {
      var top = queue[j];
      fill(255);
      textSize(30);
      textAlign(CENTER,CENTER);
      text(j, 25, 165+110*j);
      for(var i=0;i<min(10,top.length);i++)
      {
        var temp = new PuzzleState(top[i]);
        temp.render(100,100,50+110*i,j*110+110);
      }

  }
  if(isVisted(queue[0],target))
    noLoop();
  else{
    //it++;
    if(autoComplete)
    {
    bfsStep();
    }
  }
}


}
