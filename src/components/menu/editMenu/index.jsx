import React, {useEffect, useState} from "react";
import Footer from "../../../utils";
import NavbarProfileComponent from "../../navbar/navbarProfile";
import { useParams } from "react-router-dom";
import axios from "axios";
import './style.css'
import EditModals from "../../../utils/modals/modalsEdit";


const EditMenuComponent = () => {

  const { id } = useParams();

  const [show, setShow] = useState(false)

  const Open = () => setShow(true)
  const Close = () => setShow(false)

  const handleShow = () => {
     Open()
  }

  const [data, setData] = useState({})
  const [editData, setEditData] = useState({
    title: data.title || '',
    ingredients: data.ingredients || '' ,
    category_id: data.category_id || ''
  })
  const [photo, setPhoto] = useState('')
  const [image, setImage] = useState('')

  useEffect(() => {
    axios.get(process.env.REACT_APP_URL + id)
    .then((res) => {
      setData(res.data.data[0])
      setEditData(res.data.data[0])
    })
    .catch((err) => console.log(err))
  },[id])


  const handleEdit = (e) => {
    setEditData({
      ...editData,
      [e.target.name] : e.target.value
    })
  }

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    }
    reader.readAsDataURL(file);
    setPhoto(e.target.files[0]);
  }
  

  const SubmitForm = (e) => {
    e.preventDefault()
    const editForm =  new FormData()
    editForm.append('title', editData.title)
    editForm.append('ingredients', editData.ingredients)
    editForm.append('category_id', editData.category_id)
    editForm.append('photo', photo)


    console.log(process.env.REACT_APP_URL + id)
    axios.put(process.env.REACT_APP_URL + id, editForm, {
      headers:{
        "Content-Type": "multipart/form-data",
        "Authorization" : process.env.REACT_APP_TOKEN
      }
    })

    .then((res) => {
      handleShow()
    })
    .catch((err) => {
      alert('failed to edit data')
      console.log(err.response)
    })
    
    
  }
  
  return (
    <>
      <NavbarProfileComponent />

      <div className="container pt-5 w-50 text-center">
        <form onSubmit={SubmitForm}>
          <div className="form-group d-flex flex-column justify-items-center align-items-center">
            <div className="d-flex flex-column position-relative text-center align-items-center">
              <img src={!photo ? data.photo : image} alt="img" className="preview-image" style={{width: '380px', height: '230px'}}/>
              <input type="file" onChange={handlePhoto} className="form-control-file mt-2" name="photo" />
            </div>
          </div>

          <div className="form-group mt-3 text-start">
            <label className="form-control-label" for="title">Title</label>
            <input type="text" className="form-control" value={editData.title} onChange={handleEdit}  name="title" />
          </div>
          <div className="form-group mt-3 text-start">
            <label className="form-control-label" for="ingredients">Ingredients</label>
            <textarea className="form-control" rows="5" value={editData.ingredients} onChange={handleEdit} name="ingredients"></textarea>
          </div>
          <div className="form-group mt-3 text-start">
            <label className="form-control-label" for="category">Category </label>
            <select className="form-control" name="category_id" value={editData.category_id} onChange={handleEdit}>
              <option value="1">Main Course</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary mt-3 align-items-center text-center">Update</button>
          <EditModals show={show}  handleClose={Close} url='/profile/recipes'/>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default EditMenuComponent;
