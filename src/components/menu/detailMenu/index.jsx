// import axios from "axios"
import React from "react";
import Footer from "../../../utils";
import NavbarProfileComponent from "../../navbar/navbarProfile";

// import { useParams } from "react-router-dom"

const DetailMenuComponent = () => {
  // const {id} = useParams()

  // const [data, setData] = useState()

  // useEffect(() => {
  //    axios.get(`https://grumpy-onesies-cod.cyclic.app/recipes/${id}`)
  //    .then(res => {
  //        setData(res.data.data)
  //    })
  //    .catch(err => console.log(err))
  // },[id])

  // if (!data) {
  //     return <div>Loading...</div>
  // }

  return (
    <>
      <NavbarProfileComponent />

      <div className="container pt-5">
        <div className="d-flex pt-4 justify-content-between">
          <div className="border-img border-start border-5 border-warning ps-3 d-flex">
            <img className="profile-recipes me-3 mt-3" src="./Ellipse 128.png" alt="img" />
            <div className="d-flex flex-column pt-2 text-center">
              <p className="">
                <a className="text-decoration-none text-secondary" href="./detailMenu.html">
                  Ayudia
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
            <h2 className="pt-5">Egg Sandwich</h2>
            <img className="w-50 pt-5 align-items-center" src="./Rectangle 313.png" alt="" />
            <div className="text-start pt-5">
              <h3>Ingredients</h3>
              <p>- 2 eggs</p>
              <p>- 2 tbsp mayonnaise</p>
              <p>- 3 slices bread</p>
              <p>- a little butter</p>
              <p>- ⅓ carton of cress</p>
              <p>- 2-3 slices of tomato or a lettuce leaf and a slice of ham or cheese</p>
              <p>- crisps, to serve</p>
            </div>
          </div>
        </div>

        <div className="pt-5 border-bottom border-warning border-5 pb-5 w-100">
          <img className="me-3 bg-warning p-2" src="./bookmark.png" alt="" />
          <img className="p-2" src="./Vector.png" alt="" />
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

      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
};

export default DetailMenuComponent;
