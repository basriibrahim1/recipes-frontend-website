import React, {useEffect, useState } from "react";
import player from "../../../assets/p4.jpeg";
import Footer from "../../../utils";
import { Link } from "react-router-dom";
import "./style.css";
import NavbarProfileComponent from "../../navbar/navbarProfile";
import NavbarLandingPage from "../../navbar/navbarLandingPage";
import { useDispatch, useSelector } from "react-redux";
import  getAllMenu  from "../../../storages/action/menu/menu";

const MenuComponent = () => {

  const dispatch = useDispatch()
  const name = localStorage.getItem('name')

  const [currentPage, setCurrentPage] = useState(1)
  const [sort, setSort] = useState('asc')
  const data = useSelector(state => state.menu.data)
  const loading = useSelector(state => state.menu)

  const [search, setSearch] = useState('')
  const [text, setText] = useState('')

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleText = () => {
    setText(search)
  }
  
  const previousPage = () => {
    setCurrentPage((prev) => prev - 1)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const handleSort = (e) => {
    e.preventDefault()
    if(sort === 'asc'){
       setSort('desc')
    } else if(sort === 'desc'){
       setSort('asc')
    }
  }

  useEffect(() => {
    dispatch(getAllMenu(currentPage, sort, text))
  }, [dispatch, currentPage, sort, text])


  return (
    <>
      {name ? <NavbarProfileComponent /> : <NavbarLandingPage />}
        
      
      <div className="mt-5 container d-flex flex-column">
        <h1 className="pt-5 pb-5 col-lg-4 col-12 align-items-lg-start text-center text-md-start align-items-center">Discover Recipe & Delicious Food</h1>
        <div className="d-flex flex-column">
          <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center">
            <input className="form-control me-0 me-lg-4" name="search" type="text" placeholder="Search" onChange={handleSearch}/>
            <button className="button-search bg-warning p-2 border-0 mt-lg-0 mt-2" onClick={() => handleText()}>Search</button>
          </div>
          <div className="category d-flex flex-row mt-5 align-items-lg-start justify-content-center text-center">
            <div className="row col-12">
              <div className="col-xl-2 col-md-6 col-12">
                <button onClick={handleSort} className="btn-category border-0 bg-warning rounded px-5 py-2">New</button>
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

      {loading.isLoading && <h2 className="mt-5 text-center align-items-center">Loading</h2>}


      {data.length > 0 ? (
        data.map((item) => (
            <div className="container d-flex flex-column mt-5 text-lg-start mb-5" key={item.id}>
            <div className="d-flex flex-lg-row flex-column align-items-center text-center mt-5 mb-5">
              <img className="food-product w-50" src={item.photo} alt="img" />
              <div className="d-flex flex-column ms-5 align-items-lg-start align-items-center text-start">
                <Link to={'/detailMenu/'+ item.id} className="title-link text-black text-decoration-none">
                  <h3>{item.title}</h3>
                </Link>
                <p className="mt-3">Ingredients:</p>
                <p className="col-lg-12 ">{item.ingredients}</p>
                <p className="bg-warning text-center px-2">{item.posttime}</p>
                <div className="d-flex justify-content-lg-start justify-content-center">
                  <p>
                    <img style={{width:'70px', height:'80px'} } src={player} alt="img" />
                  </p>
                  <p className="ms-3 pt-3">{item.creator}</p>
                </div>
              </div>
            </div>
          </div>
          ))
        ) : (
          <h2 className="text-center mt-5">No data has found</h2>
        )}

      <h5 className="text-center p-5 pb-5">
      {currentPage > 1 && <button onClick={previousPage} className="bg-warning border-0 p-2 rounded me-3">Previous</button>}Show 1-5 From 20
      {data.length > 0 && <button onClick={nextPage} className="bg-warning border-0 p-2 rounded ms-3">Next</button> }
      </h5>

      <Footer />
    </>
  );
};

export default MenuComponent;
