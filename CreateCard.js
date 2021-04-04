import React from "react"
import contacts from "../contacts.js"
import Card from "./Card.js"

function CreateCard(contact) {
   return <Card
   name={contact.name}
   img={contact.imgURL}
   tel={contact.phone}
   email={contact.email}
   />
}

export default CreateCard;
