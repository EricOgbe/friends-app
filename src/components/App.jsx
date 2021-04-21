import React from "react";
import Card from "./Card.js";
import contacts from "../contacts.js";
import Avatar from "./Avatar.js"
import CreateCard from "./CreateCard.js"


var bluepic = "./components/bluepic.jpg"

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
        <Avatar img="https://avatars.githubusercontent.com/u/76222310?v=4"/>
        {contacts.map(CreateCard)}
    </div>
  );
}

export default App;
