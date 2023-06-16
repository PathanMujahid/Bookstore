import React, { useState } from "react";
import list from "../Component/Data";
import Card from "../Component/Card";
import "../App.css";

const Booklist = ({ handleClick }) => {
  return (
    <>
      <section className="bookList">
        {list.map((item) => (
          <Card key={item.id} item={item} handleClick={handleClick} />
        ))}
      </section>
    </>
  );
};

export default Booklist;
