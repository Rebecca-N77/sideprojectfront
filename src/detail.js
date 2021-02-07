import React from "react";
import "./detail.css";

export default class Detail extends React.Component {
  state = {
    data: this.props.match.params.id,
  };
  async componentDidMount() {
    const response = await fetch(
      `http://localhost:8000/api/items/${this.state.data}`
    );
    const item = await response.json();
    // console.log(items.data);
    this.setState({ data: item.data });
  }
  render() {
    return (
      <div className="single-item">
        <div className="left-set">
          <img src={this.state.data.image} alt="" />
          <img src={this.state.data.image} alt="" />
        </div>
        <div className="right-set">
          <div className="name"></div>
          <div className="subname">{this.state.data.name}</div>
          <div className="price">${this.state.data.price}</div>
          <div className="description">
            <p>{this.state.data.description}</p>
          </div>
          <button>ADD TO CART</button>
        </div>
      </div>
    );
  }
}
