
import { Link, useNavigate } from 'react-router-dom';
import { Container } from "./style"
import { useCookies } from 'react-cookie';
function NavbarC() {

  const [cookies, setCookies] = useCookies(["access_token"])
  const nav = useNavigate()
  const handelclick = () => {
    setCookies("access_token", "")
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
            !cookies.access_token ? (

              <>


                <Link to={"login"}>login</Link>
                <Link to={"register"}>register</Link>

              </>
            ) :
              <>
                <Link to={"/newPost"}>new post</Link>
                <button className='logOut' onClick={handelclick}>   logout</button>
              </>

          }



        </nav>
      </div>
    </Container>
  );
}

export default NavbarC;

