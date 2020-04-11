import React from "react"
import {Link} from "gatsby"
import Layout from "../components/Layout"

export default () => (

<Layout>
<Link to="/blog"> blog </Link>
<br></br>
   <h1 > Hello world! doom </h1> 
   <div className="container">
       <div className="row">
       <div className="col-4"> 
<button type="button" class="btn btn-primary">Primary</button> </div>
       <div className="col-4"> damn </div>
       <div className="col-4"> damn </div>
       </div>
   </div>
    </Layout>


)