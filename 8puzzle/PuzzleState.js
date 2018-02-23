class PuzzleState {


  constructor(arr) {
    this.data = arr.slice();

  }
  renderCell(pos,val,cellWidth,cellHight,shiftX,shiftY)
  {
      var row = int(pos/3);
      var col = pos%3;
      //console.log(pos);
      var posX = col*cellWidth+shiftX;
      var posY = row*cellHight+shiftY;
      fill(52);
      rect( posX,posY, cellWidth, cellHight);
      if(val !=0)
      {
        fill(255);
        textSize(cellWidth/3);
        textAlign(CENTER,CENTER);
        text(val, posX+cellWidth/2, posY+cellHight/2);
      }
  }
  render(w,h,shiftX,shiftY)
  {
    for(var i=0;i<9;i++)
        this.renderCell(i,this.data[i],w/3,h/3,shiftX,shiftY);
  }
  getBlankPos()
  {
    var blankPos = 0;
    for(var i=0;i<9;i++)
      if(this.data[i]==0)
        blankPos = i;
    return blankPos;
  }
  moveDown()
  {
    console.log("down");
    var blankPos = this.getBlankPos();
    var row = int(blankPos/3);
    var col = blankPos%3;
    if(row == 0)
    {
      console.log("cant move down");

      return null;
    }
    var newBlankPos = (row-1)*3+col;
    var newData = this.data.slice();
    newData[blankPos] = newData[newBlankPos];
    newData[newBlankPos] = 0;
    return newData.slice();
  }

  moveUp()
  {
    console.log("up");
    var blankPos = this.getBlankPos();
    var row = int(blankPos/3);
    var col = blankPos%3;
    if(row == 2)
    {
      console.log("cant move up");

      return null;
    }
    var newBlankPos = (row+1)*3+col;
    var newData = this.data.slice();
    newData[blankPos] = newData[newBlankPos];
    newData[newBlankPos] = 0;
    return newData.slice();
  }


  moveRight()
  {
    console.log("going right");
    var blankPos = this.getBlankPos();
    var row = int(blankPos/3);
    var col = blankPos%3;
    if(col == 0)
    {
      console.log("cant move right");

      return null;
    }
    var newBlankPos = (row)*3+col-1;
    var newData = this.data.slice();
    newData[blankPos] = newData[newBlankPos];
    newData[newBlankPos] = 0;
    return newData.slice();
  }
  moveLeft()
  {
    console.log("left");
    var blankPos = this.getBlankPos();
    var row = int(blankPos/3);
    var col = blankPos%3;
    if(col == 2)
    {
      console.log("cant move left");

      return null;
    }
    var newBlankPos = (row)*3+col+1;
    var newData = this.data.slice();
    newData[blankPos] = newData[newBlankPos];
    newData[newBlankPos] = 0;
    return newData.slice();
  }
}
