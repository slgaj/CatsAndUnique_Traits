import React from "react";
import Button from "../../Button/Button";
import "./CatsGrid.scss";
import PropTypes from 'prop-types';

class CatsGrid extends React.Component {

  renderSquare(i, imgPath) {
    if(i === 0 || i === 1|| i === 2 ||i === 7)
      return <Button bgSize={87} imageName={imgPath} />;
    else
      return <Button bgSize={50} imageName={imgPath} />;
  }
  
  render() {
    const printArr = this.props.arraySq;
    const sizeArray = this.props.sizeOfCat;
    return (
      <div className="play-room">
        <header className={"heading"}>CATS GRID</header>
        <div className="board-row row">
          {this.renderSquare(sizeArray[0], printArr[0])}
          {this.renderSquare(sizeArray[1], printArr[1])}
          {this.renderSquare(sizeArray[2], printArr[2])}
        </div>
        <div className="board-row row">
          {this.renderSquare(sizeArray[3], printArr[3])}
          {this.renderSquare(sizeArray[4], printArr[4])}
          {this.renderSquare(sizeArray[5], printArr[5])}
        </div>
        <div className="board-row row">
          {this.renderSquare(sizeArray[6], printArr[6])}
          {this.renderSquare(sizeArray[7], printArr[7])}
          {this.renderSquare(sizeArray[8], printArr[8])}
        </div>
        <div className="board-row row">
          {this.renderSquare(sizeArray[9], printArr[9])}
          {this.renderSquare(sizeArray[10], printArr[10])}
          {this.renderSquare(sizeArray[11], printArr[11])}
        </div>
      </div>
    );
  }
}

CatsGrid.propTypes = {
  printArr: PropTypes.array,
  sizeArray: PropTypes.array
};

export default CatsGrid;