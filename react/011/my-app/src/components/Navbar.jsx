import { ContentsContainer } from "./ContentsContainer";
import React, { useState } from "react";

export function NavBar() {
    const [listName, setListName] = useState("about");
    const checkId = (e) => {
      setListName(e.target.id);
    };
  
    return (
      <>
        <nav>
          <ul>
            <li
              id="about"
              style={
                listName === "about" ? { color: "blue" } : { color: "black" }
              }
              onClick={checkId}
            >
              About
            </li>
            <li
              id="product"
              onClick={checkId}
              style={listName === "product" ? { color: "blue" } : { color: "black" }}
            >
              Product
            </li>
            <li
              id="contact"
              onClick={checkId}
              style={
                listName === "contact" ? { color: "blue" } : { color: "black" }
              }
            >
              Contact
            </li>
          </ul>
        </nav>
        <ContentsContainer listName={listName} />
      </>
    );
  }