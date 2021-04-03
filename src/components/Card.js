import React from "react";
import Avatar from "./Avatar.js"
import Info from "./Info.js"

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar img={props.img} />
        </div>
        <Info 
        tel={props.tel}
        email={props.email}
        />
      </div>
    </div>
  );
}

export default Card;
