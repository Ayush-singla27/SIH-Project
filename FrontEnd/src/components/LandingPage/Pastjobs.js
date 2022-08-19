import React from "react";
import Jobdetails from "./Jobdetails";
import { Link } from "react-router-dom";
import Addprevjobs from "./Addprevjobs";
import { useEffect,useState } from "react";
import { useRequest } from "../../hooks/request-hook";

const Pastjobs = () => {
  const {sendRequest} = useRequest()
  const [prevJobs,setJobs] = useState([])

  useEffect(() => {
      const fetchJobs = async () => {
        try {
          if (localStorage.hasOwnProperty("userid")) {
          const responseData = await sendRequest(
            'http://localhost:5002/jobs/getprevjobs',
            'POST',
            JSON.stringify({
              userid: localStorage.getItem("userid")
            }),
            {
              "Content-Type": "application/json",
            }
          );
          // responseData.info.map(data=>setData(data))
          // console.log(responseData)
        //  setData(responseData.info)
        setJobs(responseData)
        } }catch (err) {
          console.log(err)
        }
      };
      fetchJobs();
    
  
  }, [sendRequest]);


  return (
    <>
      <div className="addjobs d-flex justify-content-center m-4">
       <Link to='/addpreviousjobs'><button className="btn btn-primary">Add Previous Jobs</button></Link>
      </div>
      <div className="container">
        <div className="row">
          {console.log(prevJobs,"chekckskk")}
          {
          prevJobs.map((element) => {
            return (
              <div className="col-md-4" key={element.compname}>
                <Jobdetails
                  compname={element.compname}
                  duration={element.duration}
                  salary =  {element.salary}
                  position={element.position}
                  location={element.location}
                /> 
               </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Pastjobs;
