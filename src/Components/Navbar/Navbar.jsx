import { Link} from "react-router-dom"
import logo from '../../../src/assets/images/freshcart-logo.svg';
import { useContext } from "react"
import { userContext } from "../../Usercontext/Usercontext"
import { useNavigate } from "react-router-dom"






export default function Navbar(){

 
  let{userToken,setUserToken} =useContext(userContext);
  let Navigation=useNavigate();

  function Logout(){
    localStorage.removeItem('userToken');
    setUserToken(null);
    Navigation('/login');

  }


    return<>
    <nav className="navbar navbar-expand-lg px-5 bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">
      <img src={logo} alt=""></img>
    </Link >
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {userToken!==null ? <>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/"><i class="fas fa-home"></i>Home</Link>
        </li>
        
       
        <li className="nav-item">
          <Link className="nav-link" to="categories">Categories</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="brands">Brands</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link" to="cart"><i class="text-main fas fa-shopping-cart"></i>Cart</Link>
        </li>
       </> : ''}
      </ul>




      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item d-flex align-items-center">
        <i className="fa-brands  mx-2 fa-instagram"></i>
        <i className="fab mx-2 fa-facebook"></i>
        <i className="fab mx-2 fa-tiktok"></i>
        <i className="fab mx-2 fa-twitter"></i>
        <i className="fa-brands mx-2 fa-linkedin"></i>
        <i className="fa-brands mx-2 fa-youtube"></i>
      
        
          
        </li>
        {userToken==null?<>
        <li className="underline cursor-pointer nav-item">
          <Link className="  nav-link" to="login">Login</Link>
        </li>
        <li className=" underline cursor-pointer nav-item">
          <Link className="nav-link" to="register">Register</Link>
          
        </li>
      </> :
      
        <li className=" underline cursor-pointer nav-item">
          <span onClick={()=>Logout()} className="nav-link" to="signout">Sign out</span>
        </li>
        
}
      </ul>


     
      
    </div>
  </div>
</nav>
    
    
    
  
    </>
}