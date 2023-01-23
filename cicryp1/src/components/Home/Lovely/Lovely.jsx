import React from "react";
import "./../Lovely/Lovely.scss";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

const Lovely = () => {
  return (
    <section id="lovely">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="lovely_left">
              <h2>Wolf Face #1</h2>
              <div className="jane">
                <div className="jane_left">
                  <img
                    src="https://chisnghiax.com/ciscryp/static/media/Image-1.90baa8cc883db8970fda.png"
                    alt=""
                  />
                  <div className="jane_left_details">
                    <p>Creator</p>
                    <span>Jane Cooper</span>
                    <IoCheckmarkDoneCircleSharp />
                  </div>
                </div>
                <div className="jane_right">
                  <img
                    src="https://chisnghiax.com/ciscryp/static/media/collection.6624a7ff4b0f48fc6e24.png"
                    alt=""
                  />
                  <div className="jane_left_details">
                    <p>Collection</p>
                    <span>Marscapes</span>
                  </div>
                </div>
              </div>
              <div className="current_bid">
                <h1>
                  1.000 ETH <span>(≈ $3,221.22)</span>
                </h1>
              </div>
              <div className="time_part">
                <CiClock2 />
                <h3>Auction ending in:</h3>
              </div>
              <div className="timing">
                <div className="timing_day">
                  <h5>17</h5>
                  <span>Days</span>
                </div>
                <div className="timing_day">
                  <h5>23</h5>
                  <span>hours</span>
                </div>
                <div className="timing_day">
                  <h5>12</h5>
                  <span>mins</span>
                </div>
                <div className="timing_day">
                  <h5>34</h5>
                  <span>secs</span>
                </div>
              </div>
              <ul className="place_buttons">
                <li>
                  <a href="#">Place a bid</a>
                </li>
                <li>
                  <a href="#">View item</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="lovely_right">
              <img
                src="https://chisnghiax.com/ciscryp/static/media/large1.501744b97da258c84cca.png"
                alt=""
              />
              <span id="span_video">
                <AiOutlineVideoCamera />
              </span>
              <span id="span_heart">
                <AiOutlineHeart />
                23
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lovely;
