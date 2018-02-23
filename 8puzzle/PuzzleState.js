class PuzzleState {


  constructor(arr,w,h) {
    this.data = arr;
    this.gridWidth = w;
    this.gridHight = h;
  }
  renderCell(pos,val)
  {
      var cellWidth = this.gridWidth/3;
      var cellHight = this.gridHight/3;
      var row = int(pos/3);
      var col = pos%3;
      //console.log(pos);
      var posX = col*cellWidth;
      var posY = row*cellHight;
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
  render()
  {
    for(var i=0;i<9;i++)
        this.renderCell(i,this.data[i]);
  }


}
