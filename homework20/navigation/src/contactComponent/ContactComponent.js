import React from "react";
import "../contactComponent/ContactComponent.css";

const ContactComponent = () => {
  const contacts = [
    {
      firstName: "Барней",
      lastName: "Стинсовський",
      phone: "+380956319521",
      gender: "male",
    },
    {
      firstName: "Робін",
      lastName: "Щербатська",
      phone: "+380931460123",
      gender: "female",
    },
    {
      firstName: "Анонімний",
      lastName: "Анонімус",
      phone: "+380666666666",
    },
    {
      firstName: "Лілія",
      lastName: "Олдровна",
      phone: "+380504691254",
      gender: "female",
    },
    {
      firstName: "Маршен",
      lastName: "Еріксонян",
      phone: "+380739432123",
      gender: "male",
    },
    {
      firstName: "Теодор",
      lastName: "Мотсбес",
      phone: "+380956319521",
      gender: "male",
    },
  ];
  return (
    <div className="contactBlock">
      {contacts.map((element, i) => {
        return (
          <div className="contactDiv" key={i}>
            <div className="name">
              <p className="firstName">{element.firstName}</p>
              <p className="lastName">{element.lastName}</p>
            </div>
            <p className="phone">{element.phone}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ContactComponent;
