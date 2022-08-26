import React from "react";
// import "react-table-6/react-table.css";
import LandingPageImage from "./LandingPageImage";
import "./landingPageImage.css";

//import App from './App';
//import * as React from 'react';
import classes from "./Images.module.css";

export default function Images() {
  return (
    <>
      {/* <link
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css"
        rel="stylesheet"
      ></link> */}
      {/* <div class="row match-to-row"> */}


      {/* <div className="container">
        <div className="row">
          
          <div className={["col-md-4", classes.main1].join(" ")}>
            <h4>Apisero</h4>
            <h6>Rating: 4.2</h6>
            <h6>Reviews: 113</h6>
          </div>
          <div className={["col-md-4", classes.main1].join(" ")}>
            <h4>Apisero</h4>
            <h6>Rating: 4.2</h6>
            <h6>Reviews: 113</h6>
          </div>
          <div className={["col-md-4", classes.main1].join(" ")}>
            <h4>Apisero</h4>
            <h6>Rating: 4.2</h6>
            <h6>Reviews: 113</h6>
          </div>
        </div>
      </div> */}



      <div className="rows">
   
        <LandingPageImage
          imgLink={
            "https://www.indiawaterportal.org/sites/default/files/styles/node_lead_image/public/iwp/tea_garden_0.jpg?itok=c6Yop2ON"
          }
          jobType={"Gardening"}
          value={0}
        />
        
        <LandingPageImage
          imgLink={
            "https://thumbs.dreamstime.com/b/indian-village-carpenter-working-wooden-work-factory-indian-village-carpenter-working-wooden-work-factory-logs-cutting-162009331.jpg"
          }
          jobType={"Carpenter"}
          value={1}
        />
        
        <LandingPageImage
          imgLink={
            "https://st2.depositphotos.com/1005682/12187/i/950/depositphotos_121872246-stock-photo-indian-male-electrician.jpg "
          }
          jobType={"Electrician "}
          value={2}
        /> 
         
        <LandingPageImage
          imgLink={
            "https://th.bing.com/th/id/R.bb3215a887dc847a3fec3b0406b2fc25?rik=AYnXF3b6A83lag&riu=http%3a%2f%2fwww.mediumspot.com%2fwp-content%2fuploads%2f2020%2f06%2fHouse-Painter11-880x528.jpg&ehk=mdXDDCQFMyp7UA2j9Fo5byDU%2brF6INjD%2boMdxm%2b8%2fLU%3d&risl=&pid=ImgRaw&r=0 "
          }
          jobType={"Painters "}
          value={3}
        />
        {/* </div></div> */}
        

        
        
        <LandingPageImage
          imgLink={
            "https://thumbs.dreamstime.com/b/indian-street-repair-bicycles-ahmedabad-photographing-october-ahmedabad-india-62392476.jpg"
          }
          jobType={"Cycle Repair Workers"}
          value={4}
        /></div>
      {/* </div> */}
      <div className="rows">
        <LandingPageImage
          imgLink={
            "https://i.ytimg.com/vi/ueIyo4QkH7E/maxresdefault.jpg"
          }
          jobType={"Plumbers"}
          value={5}
        />
        <LandingPageImage
          imgLink={
            "https://th.bing.com/th/id/R.db79993b6ab6d6af2df890af917232b3?rik=agKjFg4xMbdmDA&riu=http%3a%2f%2fgdb.voanews.com%2f461B7A5A-4278-45D5-B793-1EA44DD9B53D_mw1024_s_n.jpg&ehk=Fbllu1LeHQ1mNn6jvLjEuqbeWgnsPWu1a2jHcfyrqqk%3d&risl=&pid=ImgRaw&r=0"
          }
          jobType={" Car Repair Workers"}
          value={6}
        />
        <LandingPageImage
          imgLink={
            "https://th.bing.com/th/id/R.e20de233719c470f7501d1b6d736337c?rik=Jmz8Rjkesn%2fO2g&riu=http%3a%2f%2fwww.indianwomenblog.org%2fwp-content%2fuploads%2f2017%2f08%2fcover-26.jpg&ehk=1fqbULZlnzWM8crV7VMWPgswxHi8sFMXfsH%2bO6CSH8A%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
          }
          jobType={"House Keeper"}
          value={7}
        />
        <LandingPageImage
          imgLink={
            "https://thumbs.dreamstime.com/z/jodhpur-india-nov-indian-women-cooking-traditional-food-popular-tourist-destination-featuring-many-palaces-forts-136054221.jpg"
          }
          jobType={"House Cook"}
          value={8}
        />
        <LandingPageImage
          imgLink={
            "https://th.bing.com/th/id/R.1fd9888852e014e9b8ab0260ce56d259?rik=eHzQZ0G8SH83Cw&riu=http%3a%2f%2fi.dawn.com%2flarge%2f2016%2f01%2f56aa49056c785.jpg&ehk=pnyslehfEhO3YNJoe%2fHQHm1TdYqk7wpSPJ%2bSvjLh7mM%3d&risl=&pid=ImgRaw&r=0"
          }
          jobType={"Construction"}
          value={9}
        />
      </div>
      <div className="rows">
        <LandingPageImage
          imgLink={
            "https://3.imimg.com/data3/MK/XS/MY-6721998/housekeeping-security-services-500x500.jpg"
          }
          jobType={"Cleaner"}
          value={10}
        />
        <LandingPageImage
          imgLink={
            "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/03/31/Pictures/akbarpur-construction-protection-wednesday-district-resumed-between_d1131e8c-163f-11e7-a5d6-c47fceabb9c0.jpg"
          }
          jobType={"Road Repair Workers"}
          value={11}
        />
      </div>
    </>
  );
}
// export default Images;
