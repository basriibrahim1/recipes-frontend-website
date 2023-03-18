import React, { useState } from "react";
import { useDispatch } from "react-redux";
import addMenuAction from "../../../storages/action/menu/addMenu";
import Footer from "../../../utils";
import CreateModals from "../../../utils/modals/modalsCreate";
import NavbarProfileComponent from "../../navbar/navbarProfile";
import NavbarLandingPage from "../../navbar/navbarLandingPage";

const AddMenuComponent = () => {
  const dispatch = useDispatch()
  const name = localStorage.getItem('name')
  const [show, setShow] = useState(false)

  const Open = () => setShow(true)
  const Close = () => setShow(false)

  const handleShow = () => {
     Open()
  }

  const [inputData, setInputData] = useState({
    title: "",
    ingredients: "",
    category_id: 1,
  });
  const [photo, setPhoto] = useState();
  const [image, setImage] = useState('')


  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };
  const handlePhoto = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    }
    reader.readAsDataURL(file);
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("title", inputData.title)
    formData.append("ingredients", inputData.ingredients)
    formData.append("category_id", inputData.category_id)
    formData.append("photo", photo)

    
    await dispatch(addMenuAction(formData))
    
    handleShow()
  
  }
  return (
    <>
      {name ? <NavbarProfileComponent /> : <NavbarLandingPage />}

      <div className="container mt-5">
        <form onSubmit={handleSubmit}>
          <div className="form-group d-flex flex-column">
            <div className="text-center align-items-center justify-content-center">
              {photo && <img className="" style={{width: '400px', height: '250px'}} src={!image ? '' : image} alt="" />}
            </div>
            <label className="form-control-label" for="photo">
              Add Photo
            </label>
            <input type="file" onChange={handlePhoto} className="form-control-file mt-2" name="photo" />
          </div>
          <div className="form-group mt-3">
            <label className="form-control-label" for="title">
              Title
            </label>
            <input type="text" value={inputData.title} name="title" placeholder="Enter Title Recipes" required onChange={handleChange} className="form-control mt-2" />
          </div>
          <div className="form-group mt-3">
            <label className="form-control-label" for="ingredients">
              Ingredients
            </label>
            <textarea value={inputData.ingredients} placeholder="Enter ingredients" required onChange={handleChange} name="ingredients" rows="5" className="form-control mt-2"></textarea>
          </div>
          <div className="form-group mt-3">
            <label className="form-control-label" for="category">
              Category
            </label>
            <select className="form-control" name="category" value={inputData.category_id} onChange={handleChange}>
              <option value="1">Main Course</option>
            </select>
          </div>
          <div className="w-100 align-items-center text-center">
            <button type="submit" className="btn btn-primary mt-3  mb-3 px-5 ">Post</button>
            <CreateModals show={show}  handleClose={Close} url='/profile/recipes'/>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default AddMenuComponent;
