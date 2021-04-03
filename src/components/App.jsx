import React from "react";
import Card from "./Card.js";
import contacts from "../contacts.js";
import Avatar from "./Avatar.js"


var bluepic = "./components/bluepic.jpg"

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
        <Avatar img="https://avatars.githubusercontent.com/u/76222310?v=4"/>
      <Card
        name="Future"
        img="https://pyxis.nymag.com/v1/imgs/59d/4be/39c740bb94d7b239ec21c0415ca0f07e41-15-future-rapper.rsquare.w700.jpg"
        email="freebands@gmail.com"
        tel="+07384477245"
      />
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        email={contacts[0].email}
        tel={contacts[0].phone}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        email={contacts[1].email}
        tel={contacts[1].phone}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        email={contacts[2].email}
        tel={contacts[2].phone}
      />
    </div>
  );
}

export default App;
