
import { Link, useNavigate } from 'react-router-dom';
import { Container } from "./style"
import { useAuth } from '../../hooks/useAuth';
import { useCookies } from 'react-cookie';
function NavbarC() {
  
const {dispatch,user }=useAuth()
const [cookies, setCookies,removeToken] = useCookies(["access_token"])
  const nav = useNavigate()
  const handelclick = () => {
 // remove user from storage
 localStorage.removeItem("userId")
// removeres.cookie('name', value);

removeToken(['access_token']);
 // dispatch logout action

 dispatch({type:"LOGOUT"})
    nav("/login")
  }

  return (
    <Container>
      <div className='content'>
        <div className='logo'>
          <h3>Blog</h3>
        </div>
        <nav>
         {
          user && <>
                 <Link to={"/newPost"}>new post</Link>
                
                <button className='logOut' onClick={handelclick} >   logout</button>
          
          </> 
         }
   {
          user==null && <>
               <Link to={"/login"}>login</Link>
                <Link to={"/register"}>register</Link>
          
          </> 
         }
               


            

          



        </nav>
      </div>
    </Container>
  );
}

export default NavbarC;

