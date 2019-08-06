import React from "react";
import PropTypes from 'prop-types';

import cat1 from "../../assets/Images/cat_1.png";
import cat2 from "../../assets/Images/cat_2.png";
import cat3 from "../../assets/Images/cat_3.png";
import cat4 from "../../assets/Images/cat_4.png";
import cat5 from "../../assets/Images/cat_5.png";
import cat6 from "../../assets/Images/cat_6.png";
import cat7 from "../../assets/Images/cat_7.png";
import cat8 from "../../assets/Images/cat_8.png";
import cat9 from "../../assets/Images/cat_9.png";
import cat10 from "../../assets/Images/cat_10.png";
import cat11 from "../../assets/Images/cat_11.png";
import cat12 from "../../assets/Images/cat_12.png";
import CatShapes from "../../Component/LeftPane/CatShapes/CatShapes.jsx";
import CatsGrid from "../../Component/RightPane/CatsGrid/CatsGrid";
import "./CatShapesContainer.scss";
import Button from "../../Component/Button/Button";

class CatShapesContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      catArray: [
        cat1,
        cat2,
        cat3,
        cat4,
        cat5,
        cat6,
        cat7,
        cat8,
        cat9,
        cat10,
        cat11,
        cat12
      ],
      arraySq: Array(12).fill(null),
      calcWin: Array(12).fill(null),
      ctr: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }
  handleClick(i) {
    this.state.arraySq[this.state.ctr] = this.state.catArray[i];
    this.state.calcWin[this.state.ctr] = i;
    this.setState({
      arraySq: this.state.arraySq,
      ctr: this.state.ctr + 1,
      calcWin: this.state.calcWin
    });
    if (this.state.ctr === 11) {
      let flag = calculateWinner(this.state.calcWin);
      if (flag) alert("YOU WIN");
      else alert("YOU LOSE");
    }
  }
  resetGame() {
    this.setState({
      arraySq: Array(12).fill(null),
      calcWin: Array(12).fill(null),
      ctr: 0      
    });
  }

  render() {
    return (
      <div className="main-wrapper">
        <CatShapes
          clickCopy={this.handleClick}
          catArray={this.state.catArray}
        />
        <CatsGrid sizeOfCat={this.state.calcWin} arraySq={this.state.arraySq} />

        <Button class={"reset-btn"} onClick={this.resetGame}>
          Reset
        </Button>
      </div>
    );
  }
}
function calculateWinner(squares) {
  const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10, 11]];
  let flag = false;
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      squares[a] === squares[b] ||
      squares[a] === squares[c] ||
      squares[b] === squares[c]
    ) {
      flag = false;
      return flag;
    } else {
      flag = true;
    }
  }
  return flag;
}

export default CatShapesContainer;
