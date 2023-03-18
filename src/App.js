import './App.css';
import Login from './pages/login';
import Register from './pages/register';
import ForgotPassword from './pages/forgotpassword';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import './custom.scss'
import Menu from './pages/menu/searchMenu';
import AddMenu from './pages/menu/addMenu';
import DetailMenu from './pages/menu/detailMenu';
import RecipesProfile from './pages/profile/recipes';
import Bookmark from './pages/profile/bookmark';
import Liked from './pages/profile/liked';
import EditMenu from './pages/menu/editMenu';
import LandingPage from './pages/landingPage';
import AuthChecker from './utils/authChecker';

function App() {
  return (
    <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to='landingPage' replace="true"/>} />
      <Route path='/landingPage' element={<LandingPage />} />
      <Route path='/login' element={<Login />}/> 
      <Route path='/register' element={<Register />}/> 
      <Route path='/forgotPassword' element={<ForgotPassword />}/>
      <Route path='/menu' element={<Menu />}/>
      <Route path='/detailMenu/:id' element={<DetailMenu />}/>
      <Route path='/add-menu' element={
       <AuthChecker>
         <AddMenu />
       </AuthChecker>
      }/>
      <Route path='/editmenu/:id' element={
        <AuthChecker>
          < EditMenu />
        </AuthChecker>
      }/>
      <Route path='/profile/recipes' element={
        <AuthChecker>
          < RecipesProfile/>
        </AuthChecker>}/>
      <Route path='/profile/bookmark' element={
        <AuthChecker>
          < Bookmark />
        </AuthChecker>
      }/>
      <Route path='/profile/liked' element={
        <AuthChecker>
          < Liked />
        </AuthChecker>
      }/>  
       
      <Route path='/menu/:id' element={<DetailMenu />}/>
      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
