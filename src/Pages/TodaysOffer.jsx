import React from "react";
import "./TodaysOffer.css";
import OfferImageOne from '../assets/OfferImageOne.webp'
import OfferImageTwo from '../assets/OfferImageTwo.jpeg'


const TodaysOffer = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <iframe
              className="youtubeVideo"
              src="https://www.youtube.com/embed/8Qbax_1szSs?si=Tyghu_KY16Xs54HZ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>

            <img src={OfferImageOne} alt="" className='img-fluid'/>
          <img src={OfferImageTwo} alt="" className='img-fluid customIMGOffer' />
          </div>
          
        </div>
      </div>
    </>
  );
};

export default TodaysOffer;
