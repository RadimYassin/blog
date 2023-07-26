import React from 'react'

import { Container} from './style'
import Post from '../Post/Post'
import { useData } from "../../hooks/useData";
import PlaceholderComponent from '../Placeholder/Placeholder';

export default function Home() {
  // posts:[],
  // loading:true,
  // error:"",
  // user:null
  const {posts}=useData()
  console.log(posts);
    return (
        <Container>
{/* <PlaceholderComponent/> */}
        {
          posts.map(i=>{
            return(
              <Post key={i._id} item={i} />
            )
          })
        }
         

        </Container>

    )
}
