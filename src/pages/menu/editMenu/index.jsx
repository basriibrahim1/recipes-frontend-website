import React, {useEffect, useState} from "react";
import Footer from "../../../utils";
import NavbarProfileComponent from "../../../components/navbar/navbarProfile";
import NavbarLandingPage from "../../../components/navbar/navbarLandingPage";
import { useParams } from "react-router-dom";
import EditModals from "../../../utils/modals/modalsEdit";
import { useDispatch, useSelector } from "react-redux";
import editMenuAction from "../../../storages/action/menu/editMenuAction";
import idMenuAction from "../../../storages/action/menu/idMenuAction";


const EditMenu = () => {
  const [show, setShow] = useState(false)
  
  const Open = () => setShow(true)
  const Close = () => setShow(false)
  
  const handleShow = () => {
    Open()
  }
  
  const { id } = useParams();
  const name = localStorage.getItem('name')
  const dispatch = useDispatch()


  const menuId = useSelector(state => {
    if (state.menuId.data.length > 0) {
      return state.menuId.data[0];
    } else {
      return {
        title: '',
        ingredients: '',
        category_id: ''
      };
    }
  });
 

  const [editData, setEditData] = useState({
    title: menuId?.title ||'',
    ingredients: menuId?.ingredients || '',
    category_id: menuId?.category_id || '',
  })


  useEffect(() => {
    dispatch(idMenuAction(id))
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },[dispatch, id])
  
  
  const [photo, setPhoto] = useState('')
  const [image, setImage] = useState('')

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
  

  const SubmitForm = async (e) => {
    e.preventDefault()
    const editForm =  new FormData()
    editForm.append('title', editData.title)
    editForm.append('ingredients', editData.ingredients)
    editForm.append('category_id', editData.category_id)
    editForm.append('photo', photo)

    await dispatch(editMenuAction(editForm,id))
    handleShow()
  }
  
  return (
    <>
      {name ? <NavbarProfileComponent /> : <NavbarLandingPage />}

      <div className="container pt-5 w-50 text-center">
        <form onSubmit={SubmitForm}>
          <div className="form-group d-flex flex-column justify-items-center align-items-center">
            <div className="d-flex flex-column position-relative text-center align-items-center">
              <img src={!photo ? menuId.photo : image} alt="img" className="preview-image" style={{width: '380px', height: '230px'}}/>
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
}

export default EditMenu