import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  return (

    <div style={{paddingTop : '90px'}}  class="row mt-4">
    <div  class="col-sm-6 mb-3 mb-sm-0">
      <div class="card" style={{backgroundColor: "#011e31", marginTop: "40px"}}>
        <div class="card-body ">
        <Link to={"/projectItemsWeb"}><img src="/images/Website.png" class="img-fluid" alt="'Nothing to Preview'"/></Link>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="card " style={{backgroundColor: "#011e31", marginTop: "40px"}}>
        <div class="card-body">
          <Link to={"/projectItemsApp"} >
        <img  src="/images/Mobile.jpg" class="img-fluid" alt="'Nothing to Preview'"/>
        </Link>
        </div>
      </div>
    </div>
  </div>

  )
}

export default ProjectsPage