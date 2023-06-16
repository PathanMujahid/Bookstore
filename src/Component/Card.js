import React, { useState } from "react";
import "../App.css";
import { Button, Paper } from "@mui/material";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/action";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
// import { Button } from "react-bootstrap";

const Cards = ({ item, handleClick }) => {
  const { title, author, price, img } = item;
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const [cartBtn, setCartBtn] = useState("Add to Cart");

  const dispatch = useDispatch();
  const addProduct = (product) => {
    console.log("product : ", product);
    if (cartBtn === "Add to Cart") {
      dispatch(addItem(product));
      setCartBtn("Remove from Cart");
    } else {
      dispatch(delItem(product));
      setCartBtn("Add to Cart");
    }
  };

  return (
    <div>
      <Paper
        className="paper"
        style={{ padding: "15px", margin: "4rem 0 0 0rem" }}
      >
        <div className="card-image">
          <img src={img} alt="images" />
        </div>
        <div className="details">
          <p style={{ fontWeight: "700", marginTop: "4rem" }}>{title}</p>
          <p>{author}</p>
          <p style={{ fontWeight: "700" }}>Price - {price}Rs</p>
          {/* <button onClick={() => handleClick(item)}>Add to Cart</button> */}
          <Button
            style={{ backgroundColor: "black" }}
            variant="contained"
            onClick={() => addProduct(item)}
          >
            {cartBtn}
          </Button>
          <span style={{ marginLeft: "5px" }}>
            <Link to="/cart">
              <Button style={{ backgroundColor: "black" }} variant="contained">
                Buy Now
              </Button>
            </Link>
          </span>
        </div>
      </Paper>
    </div>
  );
};

export default Cards;
