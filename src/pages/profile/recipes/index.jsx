import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../../utils";
import DeleteModals from "../../../utils/modals/modalsDelete";
import Headers from '../../../components/headers'
import NavbarProfileComponent from "../../../components/navbar/navbarProfile";
import NavbarLandingPage from "../../../components/navbar/navbarLandingPage";
import { useDispatch, useSelector } from "react-redux";
import deleteMenuAction from "../../../storages/action/menu/deleteMenu";
import menuPayloadAction from "../../../storages/action/menu/recipesPayload";

const RecipesProfile = () => {
  const dispatch = useDispatch()

  const data = useSelector(state => state.userRecipes.data)
  const deleteMenu = useSelector(state => state.deleteMenu)
  const [selectId, setSelectId] = useState()

  const [show, setShow] = useState(false);

  const Open = () => setShow(true)

  const handleShow = (id) => {
    setSelectId(id)
    Open()
  };

  const handleClose = () => setShow(false)

 
  useEffect(() => {
      dispatch(menuPayloadAction())
  },[dispatch])


  useEffect(() => {
    dispatch(menuPayloadAction())
  },[dispatch, deleteMenu.data])


  const deleteData = async (id) => {
    dispatch(deleteMenuAction(id))
  }


  const name = localStorage.getItem('name')


  return (
    <>
      {name ? <NavbarProfileComponent /> : <NavbarLandingPage />}
      

      <Headers />

      {data?.map((item) => {
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
}

export default RecipesProfile