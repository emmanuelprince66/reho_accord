import React, { useState } from "react";
import "./Card.css";
import ContactService from "../../services/ContactService";
import { Link } from "react-router-dom";

const Item = ({ heading, title, small, btext, pathname }) => {
  return (
    <>
      <div className="gpt3__carder">
        <div className="gpt3__carder-cus">
          <h1>{heading}</h1>
          <p>{title}</p>
          <p>{small}</p>
          <Link to={pathname}>
            <button>{btext}</button>
          </Link>
        </div>
      </div>
    </>
  );
};

const Carder = () => {
  let [state] = useState({
    contacts: ContactService.getContactList(),
  });

  let { contacts } = state;
  return (
    <div className="gpt3__carder-content">
      {contacts.length > 0 &&
        contacts.map((contact) => {
          return (
            <Item
              pathname={contact.pathname}
              heading={contact.heading}
              title={contact.title}
              small={contact.small}
              btext={contact.btext}
              key={contact.id}
            />
          );
        })}
    </div>
  );
};

export default Carder;
