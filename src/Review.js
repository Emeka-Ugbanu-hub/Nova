import React from "react"
import{
Container
} from "@material-ui/core"

import Message from "./Message.js";


const Review = () => {
return(
    <>
<Container style={{overflowY:`scroll`,height:`${45}vh`}}>
    <Message/>
</Container>
    </>
)
}

export default Review;