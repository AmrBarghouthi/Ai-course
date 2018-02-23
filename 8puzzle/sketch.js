
var state;
function setup()
{
 createCanvas(800, 600);
  var arr = [1,2,3,4,5,6,7,8,0];
  state = new PuzzleState(arr,500,500);
}


function draw()
{
  //background(52);
  state.render();

}
