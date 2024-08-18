import { NavLink } from "react-router-dom";

const Error=() => {
  return(
      <div className="container d-flex justify-content-center align-items-center " style={{marginTop:"90px"}}>
          <div className="row ">
              <div className="col-12 col-md-6 d-flex justify-content-center" >
              <img src="/images/error.svg" alt="" width="250px" height="250px"/>
              </div>
              <div className="col-12 d-flex justify-content-center">
                  <NavLink to="/" style={{cursor:"pointer"}}><button style={{width:"70px",border:"2px solid hsla(226, 66%, 47%, 0.915)",borderRadius:"5px",backgroundColor:"hsl(240, 77%, 66%)",color:"white",fontWeight:"800"}}>BACK</button></NavLink>
              </div>
          </div>
      </div>
  )
}

export default Error;