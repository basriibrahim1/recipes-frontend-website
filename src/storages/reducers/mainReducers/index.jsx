import { combineReducers } from "redux";
import LoginUserReducers from "../auth/login";
import {MenuReducers } from "../MenuReducer/menuReducers";
import { addMenuReducer } from "../MenuReducer/addMenuReducer";
import { deleteMenuReducer } from "../MenuReducer/deleteMenuReducers";
import { menuPayloadReducer } from "../MenuReducer/recipesPayloadReducer";
import { editMenuReducer } from "../MenuReducer/editMenuReducer";
import { idMenuReducer } from "../MenuReducer/idMenuReducer";
import RegisterUserReducers from "../auth/registerReducers";


const rootReducers = combineReducers({
    register: RegisterUserReducers,
    login: LoginUserReducers,
    menu: MenuReducers,
    addMenu: addMenuReducer,
    deleteMenu: deleteMenuReducer,
    userRecipes : menuPayloadReducer,
    editMenu: editMenuReducer,
    menuId: idMenuReducer
})

export default rootReducers