import React from "react";
import Button from "../../Button/Button";
import "./CatShapes.scss";

class CatShapes extends React.PureComponent {
  renderCatButton(key, bgCat, size) {
    return (
      <Button
        value={key}
        size={size}
        class={"catHome"}
        onClick={() => this.props.clickCopy(key)}
        imageName={bgCat}
        catH={"auto"}
      />
    );
  }

  render() {
    const catArr = this.props.catArray;
    const defaultSize = 35;
    return (
      <div className="cat-room">
        <div className="cat-row row">
          {this.renderCatButton(0, catArr[0], defaultSize)}
          {this.renderCatButton(1, catArr[1], defaultSize)}
          {this.renderCatButton(2, catArr[2], defaultSize)}
          {this.renderCatButton(3, catArr[3], 25)}
        </div>
        <div className="cat-row row">
          {this.renderCatButton(4, catArr[4], defaultSize)}
          {this.renderCatButton(5, catArr[5], defaultSize)}
          {this.renderCatButton(6, catArr[6], 20)}
          {this.renderCatButton(7, catArr[7], 55)}
        </div>
        <div className="cat-row row">
          {this.renderCatButton(8, catArr[8], defaultSize)}
          {this.renderCatButton(9, catArr[9], defaultSize)}
          {this.renderCatButton(10, catArr[10], defaultSize)}
          {this.renderCatButton(11, catArr[11], defaultSize)}
        </div>
      </div>
    );
  }
}

export default CatShapes;