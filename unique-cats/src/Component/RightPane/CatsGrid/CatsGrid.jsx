import React from "react";
import Button from "../../Button/Button";
import "./CatsGrid.css";

class CatsGrid extends React.Component {
  renderSquare(i, imgPath) {
    return <Button value={i} class="square" imageName={imgPath} />;
  }

  render() {
    const printArr = this.props.arraySq;
    return (
      <div className="play-room">
        <div className="board-row">
          {this.renderSquare(0, printArr[0])}
          {this.renderSquare(1, printArr[1])}
          {this.renderSquare(2, printArr[2])}
        </div>
        <div className="board-row">
          {this.renderSquare(3, printArr[3])}
          {this.renderSquare(4, printArr[4])}
          {this.renderSquare(5, printArr[5])}
        </div>
        <div className="board-row">
          {this.renderSquare(6, printArr[6])}
          {this.renderSquare(7, printArr[7])}
          {this.renderSquare(8, printArr[8])}
        </div>
        <div className="board-row">
          {this.renderSquare(9, printArr[9])}
          {this.renderSquare(10, printArr[10])}
          {this.renderSquare(11, printArr[11])}
        </div>
      </div>
    );
  }
}

export default CatsGrid;