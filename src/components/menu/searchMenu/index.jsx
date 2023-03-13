import React, { useEffect, useState } from "react";
import Karen from "../../../assets/Karen.png";
import axios from "axios";
import Footer from "../../../utils";
import { Link } from "react-router-dom";
import "./style.css";
import NavbarComponent from "../../navbar/navbarMenu";

const MenuComponent = () => {

  
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(process.env.REACT_APP_URL)
    .then((res) => {
      setData(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);


  return (
    <>
      <NavbarComponent />

      <div className="mt-5 container d-flex flex-column">
        <h1 className="pt-5 pb-5 col-lg-4 col-12 align-items-lg-start text-center text-md-start align-items-center">Discover Recipe & Delicious Food</h1>
        <div className="d-flex flex-column">
          <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center">
            <input className="form-control me-0 me-lg-4" id="search" name="search" type="text" placeholder="Search" />
            <button className="button-search bg-warning p-2 border-0 mt-lg-0 mt-2">Search</button>
          </div>
          <div className="category d-flex flex-row mt-5 align-items-lg-start justify-content-center text-center">
            <div className="row col-12">
              <div className="col-xl-2 col-md-6 col-12">
                <button className="btn-category border-0 bg-warning rounded px-5 py-2">New</button>
              </div>
              <div className="col-xl-2 col-md-6  col-12 mt-md-0 mt-3">
                <button className="btn-category border-0 bg-warning rounded px-5 py-2">Popular</button>
              </div>
              <div className="col-xl-2 col-md-6 mt-md-3 mt-xl-0 col-12 mt-md-0 mt-3">
                <button className="btn-category border-0 bg-warning rounded px-5 py-2">Vegetarian</button>
              </div>
              <div className="col-xl-2 col-md-6 mt-xl-0 col-12 mt-md-3 mt-3">
                <button className="btn-category border-0 bg-warning rounded px-5 py-2">Breakfast</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {data?.map((item) => {

        return (
          <div key={item.id} className="container d-flex flex-column mt-5 text-lg-start mb-5">
            <div className="d-flex flex-lg-row flex-column align-items-center text-center mt-5 mb-5">
              <img className="food-product w-50" src={item.photo} alt="img" />
              <div className="d-flex flex-column ms-5 align-items-lg-start align-items-center text-start">
                <Link to={`/menu-detail/${item.id}`} className="title-link text-black text-decoration-none">
                  <h3>{item.title}</h3>
                </Link>
                <p className="mt-3">Ingredients:</p>
                <p className="col-lg-12 ">{item.ingredients}</p>
                <p className="bg-warning text-center px-2">{item.posttime}</p>
                <div className="d-flex justify-content-lg-start justify-content-center">
                  <p>
                    <img src={Karen} alt="img" />
                  </p>
                  <p className="ms-3 pt-3">{item.creator}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <h5 className="text-center p-5 pb-5">
        Show 1-5 From 20 <span className="bg-warning p-1 rounded">Next</span>
      </h5>

      <Footer />
    </>
  );
};

export default MenuComponent;
