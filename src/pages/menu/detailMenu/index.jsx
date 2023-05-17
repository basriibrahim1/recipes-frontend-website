import React, { useEffect} from "react";
import Footer from "../../../utils";
import NavbarProfileComponent from "../../../components/navbar/navbarProfile";
import NavbarLandingPage from "../../../components/navbar/navbarLandingPage";
import BookmarkIcon from '../../../assets/bookmark.png'
import LikeIcon from '../../../assets/Like.png'
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import idMenuAction from "../../../storages/action/menu/idMenuAction";
import person from '../../../assets/person.jpg'

const DetailMenu = () => {
  const {id} = useParams()
  const name = localStorage.getItem('name')

  const dispatch = useDispatch()


  const data = useSelector(state => state.menuId.data || state.menuId)


  useEffect(() => {
    dispatch(idMenuAction(id))
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },[dispatch, id])

  

  return (
    <>
      {name ? <NavbarProfileComponent /> : <NavbarLandingPage />}

      
      {data?.map(item => {
        return (
        <div className="container pt-5" key={item.id}>
        <div className="d-flex pt-4 justify-content-between" >
          <div className="border-img border-start border-5 border-warning ps-3 d-flex">
            <img className="profile-recipes me-3 mt-3" style={{width: '60px', height: '50px'}} src={person}  alt="img" />
            <div className="d-flex flex-column pt-2 text-center">
              <p className="">
                <a className="text-decoration-none text-secondary" href="./detailMenu.html">
                  {item.creator}
                </a>
              </p>
              <p className="">
                <a className="text-decoration-none text-black fw-bold" href="./login.html">
                  10 Recipes
                </a>
              </p>
            </div>
          </div>

          <div className="align-items-end d-flex text-center flex-column pt-2">
            <p>21 Februari 2023</p>
            <p>20 Likes - 2 Comments</p>
          </div>
        </div>
        <div className="pt-5">
          <div className="w-100 text-center">
            <img className="w-50 pt-5 align-items-center"style={{width: '300px', height: '400px'}} src={item.photo} alt="img" />
            <h2 className="pt-5">{item.title}</h2>
            <div className="text-start pt-5">
              <h3>Ingredients</h3>
              <p>{item.ingredients}</p>
            </div>
          </div>
        </div>

        <div className="pt-5 border-bottom border-warning border-5 pb-2 w-100">
          <img className="me-3 bg-warning p-2" src={BookmarkIcon} alt="" />
          <img className="p-2" src={LikeIcon} alt="" />
        </div>

        <div className="pt-5 border-bottom border-warning border-5 pb-5">
          <div className="d-flex pt-4">
            <div className="border-img border-end border-5 border-warning pe-5 d-flex">
              <img className="profile-recipes me-3 mt-3" src="./Ellipse 128.png" alt="img" />
              <div className="d-flex flex-column pt-2 text-center">
                <p className="">
                  <a className="text-decoration-none text-secondary" href="./detailMenu.html">
                    Karen
                  </a>
                </p>
                <p className="">
                  <a className="text-decoration-none text-black fw-bold" href="./login.html">
                    20 Recipes
                  </a>
                </p>
              </div>
            </div>
            <p className="ps-5 pt-4">Wow, I just made this and it was delicious! Thanks for sharing!</p>
          </div>
          <div className="d-flex pt-4">
            <div className="border-img border-end border-5 border-warning pe-5 d-flex">
              <img className="profile-recipes me-3 mt-3" src="./Ellipse 128.png" alt="img" />
              <div className="d-flex flex-column pt-2 text-center">
                <p className="">
                  <a className="text-decoration-none text-secondary" href="./detailMenu.html">
                    Ariel
                  </a>
                </p>
                <p className="">
                  <a className="text-decoration-none text-black fw-bold" href="./login.html">
                    20 Recipes
                  </a>
                </p>
              </div>
            </div>
            <p className="ps-5 pt-4">Wow, I just made this and it was delicious! Thanks for sharing!</p>
          </div>
        </div>

        <div className="pt-5 mb-5">
          <textarea className="p-5 bg-light-subtle w-50" name="textarea" id="textarea" placeholder="Your Comment Here!"></textarea>
        </div>
        <button className="bg-warning p-2 rounded mt-3 text-white border-0 w-25 mb-5" type="submit">
          Send a comment
        </button>
      </div>
      )
       })
      }

      

      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
}

export default DetailMenu