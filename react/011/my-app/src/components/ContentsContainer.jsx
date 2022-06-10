import About from "./About";
import Product from "./Product";
import Contact from "./Contact";

export const ContentsContainer = ({ listName }) => {
    if (listName === "about") {
      return <About />;
    } else if (listName === "product") {
      return <Product />;
    } else if (listName === "contact") {
      return <Contact />;
    }
  };