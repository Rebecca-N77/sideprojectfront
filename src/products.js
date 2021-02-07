import React from "react";
import "./App.css";
import Item from "./item";
export default class ItemsGrid extends React.Component {
  state = {
    data: [],
    categories: [],
    filteredData: [],
  };
  async componentDidMount() {
    const response = await fetch("http://localhost:8000/api/items");
    const items = await response.json();
    const response2 = await fetch("http://localhost:8000/api/categories");
    const categories = await response2.json();
    // console.log(items.data);
    this.setState({
      data: items.data,
      categories: categories.data,
      filteredData: items.data,
    });
  }
  filterData = (catID) => {
    console.log(catID);
    let filteredData;
    if (catID == 0) {
      filteredData = [...this.state.data];
    } else {
      filteredData = this.state.data.filter(
        (item) => item.category_id == catID
      );
    }
    this.setState({ filteredData });
  };
  /*  fetchItems = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api/items");
    const items = await response.json();
    // console.log(items.data);
    this.setState({ data: items.data });
  }; */
  render() {
    return (
      <>
        <button onClick={(e) => this.filterData(0)}>all</button>
        {this.state.categories.map((category) => (
          <button onClick={(e) => this.filterData(category.id)}>
            {category.name}
          </button>
        ))}
        {/*  <button onClick={this.fetchItems}>VIEW PRODUCTS</button> */}
        <ul>
          {this.state.filteredData.map((item) => (
            <Item item={item} />
          ))}
          {/*  <li className="adidas">
            <div className="pdiv">
              <h2>I-5923 RUNNER PRIDE</h2>
              <p>£99.95</p>
            </div>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/adidas01.png"
              alt=""
            />
          </li> */}
        </ul>
      </>
    );
  }
}
