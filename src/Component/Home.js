// import ReactDOM from "react-dom";
// import { Carousel } from "react-responsive-carousel";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "../App.css";
import { useState } from "react";

const Home = ({ handleClick }) => {
  const sliderImages = [
    {
      url: "https://notionpress.com/new-rewamp/images/store_slider/top_trending_books_banner.webp",
    },
    {
      url: "https://cdn.pixabay.com/photo/2016/02/16/21/07/books-1204029_1280.jpg",
    },
    {
      url: "https://img.freepik.com/free-vector/hand-drawn-book-club-twitter-header-template_23-2149753861.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2016/09/08/22/43/books-1655783_1280.jpg",
    },
  ];
  const [activeImageNum, setCurrent] = useState(0);
  const length = sliderImages.length;
  const nextSlide = () => {
    setCurrent(activeImageNum === length - 1 ? 0 : activeImageNum + 1);
  };
  const prevSlide = () => {
    setCurrent(activeImageNum === 0 ? length - 1 : activeImageNum - 1);
  };
  if (!Array.isArray(sliderImages) || sliderImages.length <= 0) {
    return null;
  }
  return (
    <div>
      <h2> </h2>
      <section className="image-slider">
        <div class="left">
          <ArrowBackIosIcon onClick={prevSlide} />
        </div>
        <div class="right">
          <ArrowForwardIosIcon onClick={nextSlide} />
        </div>
        {sliderImages.map((currentSlide, ind) => {
          return (
            <div
              className={
                ind === activeImageNum ? "currentSlide active" : "currentSlide"
              }
              key={ind}
            >
              {ind === activeImageNum && (
                <img src={currentSlide.url} alt="" className="slider-image" />
              )}
            </div>
          );
        })}
      </section>
      <div className="heading2">
        <h2>top trending books</h2>
      </div>
    </div>

    //
  );
};

export default Home;
