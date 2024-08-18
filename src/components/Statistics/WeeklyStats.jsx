// import './Stats.css'
import { Statis } from './MiniAccordion'
export const WeeklyStats=() => {
    return(
        <div className="container " style={{border:"2px solid blue",borderRadius:"8px",marginTop:"25px"}} id="main"> 
            <div className="row">
                <div className="col-12 d-flex justify-content-center mt-3">
                     <h3 style={{fontWeight:"700"}}><img src="/images/Statistics(1).png" alt="" width="52px" height="40px"/>Weekly Statistics</h3>
                </div>
                <div className="col-12 ">
                    <Statis/>
                </div>
            </div>
        </div>
    )
}