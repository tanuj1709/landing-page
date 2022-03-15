import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Stars from "../../Assets/images/stars.svg";
import "./testimonial.css"

export default function Testimonial() {
  React.useEffect(() => {
    //this will automatically change the slide to next after 15 seconds.
    setInterval(() => {
      document.querySelector(".owl-next").click();
    }, 15000);
  }, []);
  return (
    <div className="bg-[#E9F6F4] p-10 pt-[80px] pb-[80px] rounded-[70px] mt-10">
      <h1 className="text-center text-[40px] font-bold text-[#1C2D41]">
        What people are saying
      </h1>
      <OwlCarousel className="owl-theme testimonial-slider" loop margin={10} nav center={true}>
        <div className="item">
          <img className="w-10" src={Stars} alt="stars" />
          <p>
            Shocking. This whole process was incredibly
            <br />
            simple, but fast too. My wife and i ended up
            <br />
            buying a much needed new bedset, and <br />
            counches with the Approva program. Great job!
          </p>
          <span>MICHAEL ROSENBAUM, DENTIST</span>
        </div>
        <div className="item">
          <img className="w-10" src={Stars} alt="stars" />
          <p>
            Shocking. This whole process was incredibly
            <br />
            simple, but fast too. My wife and i ended up
            <br />
            buying a much needed new bedset, and <br />
            counches with the Approva program. Great job!
          </p>
          <span>MICHAEL ROSENBAUM, DENTIST</span>
        </div>
        <div className="item">
          <img className="w-10" src={Stars} alt="stars" />
          <p>
            Shocking. This whole process was incredibly
            <br />
            simple, but fast too. My wife and i ended up
            <br />
            buying a much needed new bedset, and <br />
            counches with the Approva program. Great job!
          </p>
          <span>MICHAEL ROSENBAUM, DENTIST</span>
        </div>
        <div className="item">
          <img className="w-10" src={Stars} alt="stars" />
          <p>
            Shocking. This whole process was incredibly
            <br />
            simple, but fast too. My wife and i ended up
            <br />
            buying a much needed new bedset, and <br />
            counches with the Approva program. Great job!
          </p>
          <span>MICHAEL ROSENBAUM, DENTIST</span>
        </div>
        <div className="item">
          <img className="w-10" src={Stars} alt="stars" />
          <p>
            Shocking. This whole process was incredibly
            <br />
            simple, but fast too. My wife and i ended up
            <br />
            buying a much needed new bedset, and <br />
            counches with the Approva program. Great job!
          </p>
          <span>MICHAEL ROSENBAUM, DENTIST</span>
        </div>
        <div className="item">
          <img className="w-10" src={Stars} alt="stars" />
          <p>
            Shocking. This whole process was incredibly
            <br />
            simple, but fast too. My wife and i ended up
            <br />
            buying a much needed new bedset, and <br />
            counches with the Approva program. Great job!
          </p>
          <span>MICHAEL ROSENBAUM, DENTIST</span>
        </div>
        <div className="item">
          <img className="w-10" src={Stars} alt="stars" />
          <p>
            Shocking. This whole process was incredibly
            <br />
            simple, but fast too. My wife and i ended up
            <br />
            buying a much needed new bedset, and <br />
            counches with the Approva program. Great job!
          </p>
          <span>MICHAEL ROSENBAUM, DENTIST</span>
        </div>
        <div className="item">
          <img className="w-10" src={Stars} alt="stars" />
          <p>
            Shocking. This whole process was incredibly
            <br />
            simple, but fast too. My wife and i ended up
            <br />
            buying a much needed new bedset, and <br />
            counches with the Approva program. Great job!
          </p>
          <span>MICHAEL ROSENBAUM, DENTIST</span>
        </div>
        <div className="item">
          <img className="w-10" src={Stars} alt="stars" />
          <p>
            Shocking. This whole process was incredibly
            <br />
            simple, but fast too. My wife and i ended up
            <br />
            buying a much needed new bedset, and <br />
            counches with the Approva program. Great job!
          </p>
          <span>MICHAEL ROSENBAUM, DENTIST</span>
        </div>
      </OwlCarousel>
    </div>
  );
}
