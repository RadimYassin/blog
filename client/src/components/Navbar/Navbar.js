import { styled } from 'styled-components'
import Burger from './Burger'
const Nav = styled.nav`
  margin:0 auto;
    max-width:1400px;
width:100%;
height:100%;
padding:10px 0px;
display:flex;
justify-content: space-between;


.logo{
    padding:15px 20px;
}

`
export default function Navbar() {
    return (
        <div style={{height:"80px"}}>
            <Nav>
                <div className='logo'>
                    <h3>
                        blog
                    </h3>                      </div>
                <Burger />
            </Nav>
        </div>

    )
}