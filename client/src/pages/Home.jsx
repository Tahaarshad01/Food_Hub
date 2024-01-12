import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Navbar from "../components/Navbar.jsx";
import Card from "../components/Card.jsx";
import Footer from "../components/Footer.jsx";

import Pasta from "../assets/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table.jpg";
import Grilled from "../assets/flame-grilled-meat-cooking-flames-generative-ai.jpg";
import Burger from "../assets/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai.jpg";
import "../components/Carousal.css";

const Home = () => {
  const [search, setSearch] = useState("");
  const [foodItem, setFoodItem] = useState([]);
  const [foodCategory, setFoodCategory] = useState([]);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const loadData = async () => {
    let response = await fetch("https://food-hub-1246.onrender.com/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/josn",
      },
    });
    response = await response.json();
    setFoodItem(response[0]);
    setFoodCategory(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ marginTop: "-48px" }}
        >
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{ zIndex: 1 }}>
              <div className="d-flex justify-center row">
                <div className="search col-4 col-md-2 col-sm-1 mb-80">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={search}
                    onChange={onChange}
                  />
                  <button
                    className="btn btn-outline-success bg-warning"
                    type="submit"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div className="carousel-item active">
              <img src={Pasta} className="d-block w-100" alt="Pasta" />
            </div>
            <div className="carousel-item">
              <img src={Grilled} className="d-block w-100" alt="Grilled" />
            </div>
            <div className="carousel-item">
              <img src={Burger} className="d-block w-100" alt="Burger" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        />
      </div>
      <div>
        {foodCategory !== []
          ? foodCategory.map((data) => {
              return (
                <div className="mb-3 row">
                  <div key={data._id} className="fs-3 m-3">
                    {data.CategoryName}
                  </div>
                  <hr />
                  {foodItem !== [] ? (
                    foodItem
                      .filter(
                        (item) =>
                          item.CategoryName === data.CategoryName &&
                          item.name.toLowerCase().includes(search.toLowerCase())
                      )
                      .map((filterItems) => {
                        return (
                          <div
                            key={filterItems._id}
                            className="col-12 col-md-6 col-lg-3"
                          >
                            <Card
                              foodItem={filterItems}
                              // Name={filterItems.name}
                              // foodImage={filterItems.img}
                              options={filterItems.options[0]}
                            />
                          </div>
                        );
                      })
                  ) : (
                    <div>no such data</div>
                  )}
                </div>
              );
            })
          : ""}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
