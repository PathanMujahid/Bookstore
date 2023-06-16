import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              Book Catalog: The website showcases an extensive catalog of books
              across different genres, categories, and formats. Users can browse
              through various sections or use search filters to find specific
              books of interest. Book Details: Each book listed on the website
              includes detailed information such as the title, author, ISBN,
              publication date, synopsis, and customer reviews. This information
              helps users make informed decisions about their book choices. Book
              Recommendations: The website may feature personalized book
              recommendations based on user preferences, browsing history, or
              past purchases. These recommendations help users discover new
              books that align with their interests. User Reviews and Ratings:
              Customers can provide reviews and ratings for books they have
              read, helping other users gauge the quality and popularity of a
              particular book. Secure Shopping Cart: The website incorporates a
              secure shopping cart system that allows users to add books to
              their cart, review their selections, and proceed to the checkout
              page for payment. Multiple Payment Options: Bookstore websites
              typically offer various payment methods to cater to different user
              preferences. These options may include credit/debit cards, digital
              wallets, and sometimes even cash on delivery. Wishlists: Users can
              create wishlists to save books they are interested in for future
              reference or purchase. Wishlists serve as a personalized
              collection of books that users can review and update over time.
              Book Availability and Delivery: The website provides information
              about the availability of books, indicating whether they are in
              stock or need to be ordered. Users can choose their preferred
              delivery method, such as home delivery or in-store pickup. Author
              and Publisher Information: Bookstore websites often include
              sections or pages dedicated to authors and publishers, providing
              biographies, interviews, and additional information about the
              people behind the books. Blog or Content Section: Some bookstore
              websites feature a blog or content section where users can find
              articles, book recommendations, author interviews, and literary
              news. This section adds value to the website by providing engaging
              and informative content related to books and reading. A
              well-designed bookstore website aims to create an enjoyable and
              seamless online book-buying experience, offering a vast selection
              of books, user-friendly navigation, secure transactions, and
              additional features to enhance the overall book discovery and
              purchasing process.
            </p>
            <Link to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
            </Link>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-21300.jpg?w=740&t=st=1683711011~exp=1683711611~hmac=f54ea5a6831464d1e30f89b6ef7d36a47c75239a2393cacce09cb831390a9dad"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
