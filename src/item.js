import React from "react";
import { Link } from "react-router-dom";
export default function item(props) {
  return (
    <li className={props.item.category.name}>
      <div className="pdiv">
        {/*  <Link
          to={{
            pathname: "/detail",
            state: {
              item: props.item,
            },
          }}
        > */}
        <Link to={`/detail/${props.item.id}`}>
          <h2>{props.item.name}</h2>
        </Link>
        <p>£{props.item.price}</p>
      </div>
      <img src={props.item.image} alt={props.item.name} />
    </li>
  );
}
