import React, { useEffect, useState } from "react";
import Headers from "../../headers";
import { Link } from "react-router-dom";
import Footer from "../../../utils";
import axios from "axios";
import DeleteModals from "../../../utils/modals/modalsDelete";
import NavbarProfileComponent from "../../navbar/navbarProfile";

const RecipesProfileComponent = () => {

  const [data, setData] = useState([])
  const [selectId, setSelectId] = useState()

  const [show, setShow] = useState(false);

  const Open = () => setShow(true)

  const handleShow = (id) => {
    setSelectId(id)
    Open()
  };

  const handleClose = () => setShow(false)

 
  useEffect(() => {
      getDataPayload()
  },[])


  const getDataPayload = () => {
    axios.get(process.env.REACT_APP_URL + 'user-recipes/recipes', {
      headers:{
        "Authorization" : process.env.REACT_APP_TOKEN
      }
    })
    .then((res) => {
      setData(res.data.data)
      console.log(res)
    })
  
    .catch(err => console.log(err))
  }


  const deleteData = async (id) => {
    axios.delete(process.env.REACT_APP_URL + id, {
      headers:{
        "Authorization": process.env.REACT_APP_TOKEN
      }
    })
    .then((res) => {
      getDataPayload()
    })
    .catch((err) => {
      alert('failed to delete')
    })
  }


  return (
    <>
      <NavbarProfileComponent />

      <Headers />

      {data?.map((item, index) => {
        return <div className="container mb-5" key={item.id}>
        <div className="d-flex flex-lg-row flex-column align-items-center text-lg-start text-center mt-5">
          <img className="food-product w-25" src={item.photo} alt="img" />
          <div className="product-ingredients ms-5">
            <h3>{item.title}</h3>
            <p>Ingredients:</p>
            <p className="col-lg-12">{item.ingredients}</p>
            <p className="bg-warning col-lg-7">{item.created_at}</p>
            <div className="d-flex justify-content-lg-start justify-content-center">
              <Link to={'/editmenu/' + item.id}>
                <button className="border-0 me-3 text-white bg-info px-3 py-2 rounded">Edit</button>
              </Link>
              <button className="border-0 bg-warning p-2 rounded" onClick={() =>handleShow(item.id)}>Delete</button>
              <div className="justify-content-center align-items-center">
              <DeleteModals show={show} onDelete={deleteData} handleClose={handleClose} selected={selectId} />
              </div>
            </div>
          </div>
        </div>
      </div>
      })}

      <div className="d-flex text-center align-items-center justify-content-center mt-5 mb-5">
        <button className="border-0 bg-warning me-2 mt-5">Prev</button>
        <h5 className="mt-5">Show 6-10 From 10</h5>
      </div>

      <Footer />
    </>
  );
};

export default RecipesProfileComponent;
