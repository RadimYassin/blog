
import { Link, useNavigate } from 'react-router-dom';
import { Container } from "./style"
import { useAuth } from '../../hooks/useAuth';
function NavbarC() {
const {dispatch,user }=useAuth()
  const nav = useNavigate()
  const handelclick = () => {
 // remove user from storage
 localStorage.removeItem("userId")

 // dispatch logout action

 dispatch({type:"LOGOUT"})
    nav("/login")
  }





console.log(user);
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
               <Link to={"login"}>login</Link>
                <Link to={"register"}>register</Link>
          
          </> 
         }
               


            

          



        </nav>
      </div>
    </Container>
  );
}

export default NavbarC;

